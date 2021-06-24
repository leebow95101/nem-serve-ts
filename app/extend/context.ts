/**
 * @ctx 上下文扩展
 */
import errMsg from './error'
interface Response {
    data?: any;
    message?: string;
    success?: boolean;
    code?: string;
    count?: number;
}
export default {
    errorMsg: errMsg,
    // 请求返回结构
    responseStruc(res: Response): Response {
        return {
            code: errMsg.common.success.code,
            count: 0,
            data: null,
            success: true,
            message: errMsg.common.success.errMsg,
            ...res
        }
    },
    // 转化分页
    conversionPaging({ page = 1, limit = 10 }: {page: number, limit: number}) {
        return {
            page: +page,
            limit: +limit,
            offset: +((page * limit) - limit)
        }
    }
}
