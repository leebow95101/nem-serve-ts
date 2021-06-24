import BaseController from '../BaseController'

export default class Dict extends BaseController {
    // 获取所有字典
    public async getDictList() {
        const { ctx } = this
        const { rows: data, count } = await ctx.service.system.dict.getDictList({
            ...ctx.conversionPaging({
                page: ctx.request.body.page,
                limit: ctx.request.body.limit
            })
        })
        ctx.body = this.success({ data, count })
    }

    // 获取树形字典
    public async getTree() {
        const data = await this.service.system.dict.getTree()
        this.ctx.body = this.success({
            data
        })
    }

    // 新增/修改字典
    public async updateDict() {
        const { ctx } = this
        const data = await ctx.service.system.dict.updateDict({
            ...ctx.request.body
        })
        if (!data) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = this.success({ data: null })
    }

    // 删除资源
    public async deleteDict() {
        const { ctx } = this
        const data = await ctx.service.system.dict.deleteDict(ctx.request.body.id)
        if (!Number(data)) return ctx.throw(200, ctx.errorMsg.common.failed.errMsg)
        ctx.body = this.success()
    }
}
