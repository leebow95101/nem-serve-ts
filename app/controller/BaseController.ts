import { Controller } from 'egg'

export default class BaseController extends Controller {
    public success(response: {
        code?: string,
        count?: number
        data?: any,
        success?: boolean,
        message?: string,
        token?: string
    } = {}) {
        const { ctx } = this
        return {
            ...ctx.responseStruc(response),
            ...response
        }
    }
}
