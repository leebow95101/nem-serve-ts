/**
 * @扩展方法
 */
import { createHash } from 'crypto'

/**
 * @param obj 判断是否是对象
 * @return {Boolean} 返回布尔值
 */
const isObject = (obj: any): boolean => Object.prototype.toString.call(obj) === '[object Object]'

/**
 * @param function 判断是否是函数
 * @return {Boolean} 返回布尔值
 */
const isFunction = (obj: any): boolean => Object.prototype.toString.call(obj) === '[object Function]'

/**
 * @param RegExp 判断是否是正则
 * @return {Boolean} 返回布尔值
 */
const isRegExp = (obj: any): boolean => Object.prototype.toString.call(obj) === '[object RegExp]'

export default {
    isObject,
    isFunction,
    isRegExp,
    /**
   * md5加密
   * @param str 需要加密的字符串
   * @param salt 加盐
   * @return {String} 加密后的字符串
   */
    md5: (str: string, salt = true): string => createHash('md5').update(`${str}${salt ? Date.now() : ''}`).digest('hex'),

    /**
     * 判断是否为空
     * @param value 需要判断的字段
     */
    isEmpty: (value: any): boolean => {
        if (Array.isArray(value)) return value.length === 0

        if (isObject(value)) {
            for (let k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    return false;
                }
            }
        }

        return [undefined, null, ''].includes(value)
    },

    /**
     * 深拷贝
     * @param data 原数据
     * @return {Array || Object} 拷贝后的数据
     */
    deepCopy: (data: any[] | object): any[] | object => {
        const deepCopy = (data: any): any[] | object => {
            const result = Array.isArray(data) ? [] : {}
            for (const i in data) {
                result[i] = deepCopy(data[i])
            }
            return result
        }
        return deepCopy(data)
    },

    /**
     * 树形数组排序
     * @param arr 原数据
     * @return {Array} 排序后的数组
     */
    sortTreeArray: (arr: object[]): object[] => {
        const sortArr = (arr: object[]): object[] => {
            arr.map((item: any) => {
                if (item.children) item.children = sortArr(item.children)
                return item
            })
            return arr.sort((a: any, b: any) => a.sort - b.sort)
        }
        return sortArr(arr)
    },

    /**
     * 一维数组转化为树形结构
     * @param arr 原数组
     * @return {Array} 树形结构的数组
     */
    arrTransformationTree: (arr: object[]): object[] => {
        const arrTransformationTree = (arr: any[], pid = 0) => {
            const result: object[] = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].pid === pid) {
                    arr[i].children = arrTransformationTree(arr, arr[i].id)
                    result.push(arr[i])
                }
            }
            return result
        }
        return arrTransformationTree(arr)
    },
}
