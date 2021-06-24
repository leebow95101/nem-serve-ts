import { Application } from 'egg'

export default function(app: Application) {
    const { STRING, INTEGER } = app.Sequelize
    const Dict = app.model.define('dict', {
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
        sort: {
            type: INTEGER,
            allowNull: true
        },
        create_time: {
            type: STRING,
            allowNull: true
        }
    })

    return class extends Dict {}
}
