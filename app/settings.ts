// 路由前缀
export const ROUTER_PREFIX = '/api'

// 无需授权的API
export const IGNORE_LOGIN_ROUTES = [
    new RegExp(`${ROUTER_PREFIX}/login$`)
]
