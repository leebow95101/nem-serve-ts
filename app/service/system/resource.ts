import { Service } from 'egg'

interface ResourceInfo {
    id?: number,
    name: string,
    code: string,
    pid?: number,
    type: number,
    url?: string,
    sort: number,
    icon: string,
    enabled: number
}

export default class Resource extends Service {
    // 获取所有资源
    public async getResourceList({ page = 1, limit = 10 }: { page: number, limit: number }) {
        const data: any = await this.ctx.model.Resource.findAndCountAll({
            offset: page * limit - limit,
            limit
        })
        // data.rows = this.ctx.helper.arrTransformationTree(data.rows)
        console.log(data.rows, '=========resource=======data')
        return data
    }

    // 获取属性结构
    public async getTree() {
        const { ctx } = this
        const resource = await ctx.model.Resource.findAll({
          where: {
            enabled: 1
          },
          raw: true
        })
        return ctx.helper.sortTreeArray(ctx.helper.arrTransformationTree(resource))
      }
    // 新增/修改资源
    public async updateResource(params: ResourceInfo) {
        try {
            if (params.id) {
                return await this.ctx.model.Resource.update(
                    { ...params },
                    {
                        where: { id: params.id }
                    }
                )
            }
            return await this.ctx.model.Resource.create({
                ...params
            })
        } catch (error) {
            return
        }
    }
    // 删除资源
    public async deleteResource(resourceId: number) {
        return await this.ctx.model.Resource.destroy({
            where: {
                id: resourceId
            }
        })
    }
}
