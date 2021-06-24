import { Service } from 'egg'

export default class Login extends Service {
    public async login({
        account,
        password
    }: {
        account: string;
        password: string;
    }
    ) {
        try {
            const { ctx, app } = this
            const data: any = await ctx.model.User.findOne({
                where: {
                    account,
                    password
                },
                raw: true
            })
            console.log(data, '=====data======')
            const user: any = await ctx.model.User.findOne({
                where: {
                    account: account,
                },
                raw: true
            })

            console.log(user, '=========user=======')
            // 用户不存在
            if (!user) {
                ctx.throw(200, ctx.errorMsg.login.noUser)
            }
            // 密码错误
            if (ctx.helper.md5(user.password) !== ctx.helper.md5(password)) {
                ctx.throw(200, ctx.errorMsg.login.passwordError)
            }
            let token: string = ''
            const redisTokenLists = await app.redis.keys('*')
            const redisToken = redisTokenLists.find(item => item.includes(account))
            // 如果redis里有token直接获取,没有则直接生成
            if (redisToken) {
                data.token = token = redisToken
            } else {
                // 生成token并存入redis
                data.token = token = `${account}-${ctx.helper.md5(account)}`
                await app.redis.hmset(token, {
                    ...data
                })
            }

            app.redis.expire(token, app.config.base.redis.expire)
            return { data }
        } catch (error) {
            return this.ctx.throw(200, error)
        }
    }
}
