import { Service } from 'egg'

interface UserInfo {
    id?: number,
    account: string,
    password: string,
    email: string,
    sex: number,
    role: string
}

export default class UserService extends Service {
    // 获取所有用户
    public async getUserList({ page = 1, limit = 10 }: { page: number, limit: number }) {
        const data: any = await this.ctx.model.User.findAndCountAll({
            offset: ((page * limit) - limit),
            limit
        })
        /* const roleDetail = await this.ctx.model.User.findAll({
            include: [{
                model: this.ctx.model.Role,
                as: 'roleDetail'
                // attributes: ['name', 'code']
            }]
        })
        data.rows = roleDetail */
        return data
    }
    // 新增/修改用户
    public async updateUser(params: UserInfo) {
        try {
            if (params.id) {
                return await this.ctx.model.User.update(
                    { ...params },
                    {
                        where: { id: params.id }
                    }
                )
            }
            return await this.ctx.model.User.create({
                ...params
            })
        } catch (error) {
            return
        }
    }
    // 删除用户
    public async deleteUser(userId: number) {
        return await this.ctx.model.User.destroy({
            where: {
                id: userId
            }
        })
    }
}
