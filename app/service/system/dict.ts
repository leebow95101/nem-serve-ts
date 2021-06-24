import { Service } from 'egg'

interface DictInfo {
    id?: number,
    name: string,
    code: string,
    pid?: number,
    sort?: number
}

export default class Dict extends Service {
    // 获取数据字典
    public async getDictList({ page = 1, limit = 10 }: { page: number, limit: number }) {
        const data: any = await this.ctx.model.Dict.findAndCountAll({
            offset: page * limit - limit,
            limit
        })
        return data
    }

    // 获取树形结构
    public async getTree() {
        const { ctx } = this
        const dict = await ctx.model.Dict.findAll({
            raw: true
        })
        return ctx.helper.sortTreeArray(ctx.helper.arrTransformationTree(dict))
    }

    // 新增/修改数据字典
    public async updateDict(params: DictInfo) {
        try {
            if (params.id) {
                return await this.ctx.model.Dict.update(
                    { ...params },
                    {
                        where: { id: params.id }
                    }
                )
            }
            return await this.ctx.model.Dict.create({
                ...params
            })
        } catch (error) {
            return
        }
    }

    // 删除资源
    public async deleteDict(dictId: number) {
        return await this.ctx.model.Dict.destroy({
            where: {
                id: dictId
            }
        })
    }
}
