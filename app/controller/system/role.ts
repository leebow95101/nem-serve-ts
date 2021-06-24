import BaseController from '../BaseController'

export default class Role extends BaseController {
    // 获取所有角色
    public async getRoleList() {
        const { ctx } = this
        // const { rows: data, count } = await ctx.service.system.role.getRoleList({
        const { rows: data, count } = await ctx.service.system.role.getRoleList({
            ...ctx.conversionPaging({
                page: ctx.request.body.page,
                limit: ctx.request.body.limit
            })
        })
        ctx.body = this.success({ data, count })
    }

    // 新增/修改角色
    public async updateRole() {
        const { ctx } = this
        const data = await ctx.service.system.role.updateRole({
            ...ctx.request.body
        })
        if (!Number(data) && ctx.request.body.id) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        if (!data) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = Number(data) === 1 ? this.success({ data: '请求成功' }) : this.success({ data })
    }

    // 删除角色
    public async deleteRole() {
        const { ctx } = this
        const data = await ctx.service.system.role.deleteRole(ctx.request.body.id)
        if (!Number(data)) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = this.success()
    }
}
