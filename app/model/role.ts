import { Application } from 'egg'

export default function(app: Application) {
    const { STRING, INTEGER } = app.Sequelize
    const Role = app.model.define('role', {
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
        perms: {
            type: STRING,
            allowNull: true
        },
        create_time: {
            type: STRING,
            allowNull: true
        }
    })

    return class extends Role {
        /* static readonly tableName = 'role'
        static associate() {
            app.model.Role.belongsTo(app.model.User, {
                foreignKey: 'id',
                targetKey: 'role',
                as: 'userDetail'
            })
        } */
    }
}
