import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
    sequelize: {
        enable: true,
        package: 'egg-sequelize'
    },

    validate: {
        enable: true,
        package: 'egg-validate'
    },

    cors: {
        enable: true,
        package: 'egg-cors'
    },
    redis: {
        enable: true,
        package: 'egg-redis'
    }
}

export default plugin
