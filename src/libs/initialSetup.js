import Role from '../models/role'

export const createRoles = async () => {

    try {
        const count = await Role.estimatedDocumentCount()

        if( count > 0 ) return;

        await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'moderator' }).save()
        ])
        
    } catch (error) {
        throw error;
    }

}