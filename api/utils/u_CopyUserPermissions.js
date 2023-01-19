const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.copyPermissions = async(userId, roleId) => {

    try {

        let rolePermissions = await db.permissions.findMany({
            where:{
                actorType:{
                    title: 'Role'
                },
                actorId: parseInt(roleId),
            },
            select:{
                invite:   true,
                view:     true,
                create:   true,
                edit:     true,
                delete:   true,
                approve:  true,
                moduleId: true
            }
        })

        await db.permissions.deleteMany({
            where:{
                actorType:{
                    title: 'User'
                },
                actorId: parseInt(userId)
            }
        })
        
        for(let i=0; i < rolePermissions.length; i++){
            const permission = rolePermissions[i]
            const addPermission = async() => {
                await db.permissions.create({
                    data:{
                        actorType:{
                            connect:{
                                title: 'User'
                            }
                        },
                        actorId:  parseInt(userId),
                        invite:   permission.invite,
                        view:     permission.view,
                        create:   permission.create,
                        edit:     permission.edit,
                        delete:   permission.delete,
                        approve:  permission.approve,
                        module:{
                            connect:{
                                id: permission.moduleId
                            }
                        }
                    }
                })
            }
            await addPermission()
        }

        return 1

    } catch (error) {
        console.log(error.message);
        return -1
    }
}


