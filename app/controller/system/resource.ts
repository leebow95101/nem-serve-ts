import BaseController from '../BaseController'

export default class Resource extends BaseController {
    // 获取所有资源
    public async getResourceList() {
        const { ctx } = this
        let { rows: data, count } = await ctx.service.system.resource.getResourceList({
            ...ctx.conversionPaging({
                page: ctx.request.body.page,
                limit: ctx.request.body.limit
            })
        })
        ctx.body = this.success({ data, count })
    }
    // 获取树形结构
    public async getTree() {
        const { ctx } = this
        const data = await ctx.service.system.resource.getTree()
        ctx.body = this.success({
            data
        })
    }

    // 新增/修改资源
    public async updateResource() {
        const { ctx } = this
        const data = await ctx.service.system.resource.updateResource({
            ...ctx.request.body
        })
        if (!Number(data) && ctx.request.body.id) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        if (!data) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = Number(data) === 1 ? this.success({ data: '请求成功' }) : this.success({ data })
    }

    // 删除资源
    public async deleteResource() {
        const { ctx } = this
        const data = await ctx.service.system.resource.deleteResource(ctx.request.body.id)
        if (!Number(data)) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = this.success()
    }
}
