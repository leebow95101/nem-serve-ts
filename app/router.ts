import { Application } from 'egg'
import { ROUTER_PREFIX } from './settings'

export default (app: Application) => {
    const { controller, router } = app
    router.prefix(ROUTER_PREFIX)

    router.post('/login', controller.login.login)
    router.post('/loginOut', controller.loginOut.loginOut)

    router.post('/system/user/list', controller.system.user.getUserList)
    router.post('/system/user/save', controller.system.user.updateUser)
    router.post('/system/user/delete', controller.system.user.deleteUser)

    router.post('/system/role/list', controller.system.role.getRoleList)
    router.post('/system/role/save', controller.system.role.updateRole)
    router.post('/system/role/delete', controller.system.role.deleteRole)

    router.post('/system/resource/list', controller.system.resource.getResourceList)
    router.post('/system/resource/tree', controller.system.resource.getTree)
    router.post('/system/resource/save', controller.system.resource.updateResource)
    router.post('/system/resource/delete', controller.system.resource.deleteResource)

    router.post('/system/dict/list', controller.system.dict.getDictList)
    router.post('/system/dict/tree', controller.system.dict.getTree)
    router.post('/system/dict/save', controller.system.dict.updateDict)
    router.post('/system/dict/delete', controller.system.dict.deleteDict)
}
