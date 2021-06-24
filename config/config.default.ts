import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1610883561095_133'

    // add your egg config in here
    config.middleware = ['errorHandler', 'validate']

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
    }

    config.multipart = {
        mode: 'file'
    }

    config.validate = {
        validateRoot: true
    }
    // 关闭csrf安全防范
    config.security = {
        csrf: false
    }
    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: '',
            db: 0
        }
    }

    /* config.mysql = {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'nem_admin'
      }
    } */

    config.sequelize = {
        username: 'root',
        password: '123456',
        database: 'nem_admin',
        host: '127.0.0.1',
        timezone: '+08:00',
        define: {
            timestamps: false,
            freezeTableName: true,
            underscored: false
        }
    }
    // 允许跨域
    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['*']
    }

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    }
    return {
        ...config,
        ...bizConfig,
        base: {
            redis: {
                expire: 60 * 60,
                mode: 'EX'
            }
        }
    }
}
