import BaseController from '../BaseController'

export default class User extends BaseController {
    // 获取所有用户
    public async getUserList() {
        const { ctx } = this
        const { rows: data, count } = await ctx.service.system.user.getUserList({
            ...ctx.conversionPaging({
                page: ctx.request.body.page,
                limit: ctx.request.body.limit
            })
        })
        ctx.body = this.success({ data, count })
    }
    // 新增/修改用户
    public async updateUser() {
        const { ctx } = this
        const data = await ctx.service.system.user.updateUser({
            ...ctx.request.body
        })
        if (!Number(data) && ctx.request.body.id) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        if (!data) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = Number(data) === 1 ? this.success({ data: '请求成功' }) : this.success({ data })
    }

    // 删除用户
    public async deleteUser() {
        const { ctx } = this
        const data = await ctx.service.system.user.deleteUser(ctx.request.body.id)
        if (!Number(data)) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = this.success()
    }
}
