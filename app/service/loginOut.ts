import { Service } from 'egg'

export default class LoginOut extends Service {
    public async loginOut(token:any) {
        return this.app.redis.del(token)
    }
}
