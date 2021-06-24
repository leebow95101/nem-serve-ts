import { Context } from 'egg'
import { IGNORE_LOGIN_ROUTES, ROUTER_PREFIX } from '../settings'

export default function () {
    return async function validate(ctx: Context, next: () => Promise<any>) {
        try {
            const token: any = ctx.request.headers.token
            const userInfo = await ctx.app.redis.hgetall(token)
            if (IGNORE_LOGIN_ROUTES.findIndex(v => v.test(`${ROUTER_PREFIX}${ctx.path}`)) !== -1) {
                return await next()
            }
            // token续期
            if (!token || JSON.stringify(userInfo) === '{}') {
                ctx.body = {
                    code: 401,
                    success: false,
                    data: null,
                    errMsg: '无token或用户token已过期'
                }
                return ctx.throw(401, ctx.errorMsg.common.noToken)
            }
            await ctx.app.redis.expire(token, ctx.app.config.base.redis.expire)
            return next()
        } catch (err) {
            ctx.body = {
                code: err.code,
                count: 0,
                data: null,
                success: false,
                ...err,
            }
        }
    }
}
