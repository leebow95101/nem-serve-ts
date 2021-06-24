import { Application } from 'egg'

export default function(app: Application) {
    const { STRING, BIGINT, INTEGER } = app.Sequelize

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        account: {
            type: STRING,
            allowNull: false
        },
        password: {
            type: STRING,
            allowNull: false
        },
        username: {
            type: STRING,
            allowNull: false
        },
        email: {
            type: STRING,
            allowNull: true
        },
        sex: {
            type: BIGINT,
            allowNull: false,
            defaultValue: 1
        },
        role: {
            type: STRING,
            allowNull: false,
            defaultValue: ''
        },
        create_time: {
            type: STRING,
            allowNull: true
        }
    })

    return class extends User {
        /* static readonly tableName = 'user'
        static associate() {
            app.model.User.belongsTo(app.model.Role, {
                foreignKey: 'role',
                targetKey: 'id',
                as: 'roleDetail'
            })
        } */
    }
}
