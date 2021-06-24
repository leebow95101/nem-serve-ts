import { Service } from 'egg'

interface RoleInfo {
    id?: number,
    name: string,
    code: string,
    perms?: string
}

export default class Role extends Service {
    // 获取所有角色
    public async getRoleList({ page = 1, limit = 10 }: { page: number, limit: number }) {
        const data: any = await this.ctx.model.Role.findAndCountAll({
            offset: page * limit - limit,
            limit
        })
        /* const userDetail = await this.ctx.model.Role.findAll({
            include: {
                model: this.ctx.model.User,
                as: 'userDetail'
                // attributes: ['name', 'code']
            }
        })
        data.rows = userDetail */
        return data
    }
    // 新增/修改角色
    public async updateRole(params: RoleInfo) {
        try {
            if (params.id) {
                return await this.ctx.model.Role.update(
                    { ...params },
                    {
                        where: { id: params.id }
                    }
                )
            }
            return await this.ctx.model.Role.create({
                ...params
            })
        } catch (error) {
            return
        }
    }
    // 删除角色
    public async deleteRole(roleId: number) {
        return await this.ctx.model.Role.destroy({
            where: {
                id: roleId
            }
        })
    }
}
