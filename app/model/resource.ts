import { Application } from 'egg'

export default function(app: Application) {
    const { STRING, INTEGER } = app.Sequelize
    const Resource = app.model.define('resource', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: STRING,
            allowNull: false
        },
        code: {
            type: STRING,
            allowNull: false
        },
        pid: {
            type: INTEGER,
            allowNull: true
        },
        type: {
            type: INTEGER,
            allowNull: false
        },
        url: {
            type: STRING,
            allowNull: true
        },
        sort: {
            type: INTEGER,
            allowNull: false
        },
        icon: {
            type: STRING,
            allowNull: true
        },
        enabled: {
            type: INTEGER,
            allowNull: false
        },
        create_time: {
            type: STRING,
            allowNull: true
        }
    })

    return class extends Resource {}
}
