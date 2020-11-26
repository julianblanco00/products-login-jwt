import jwt from 'jsonwebtoken'
import config from '../config/config'
import Role from '../models/role'
import User from '../models/user'

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"]
        if( !token ) return res.status(403).json({ message: "No token provided" })

        const decoded = jwt.verify( token, config.SECRET )
        req.userId = decoded.id

        const user = await User.findById( req.userId, { password: 0 } )
        if( !user ) return res.status(404).json({ message: "User not found" })

        next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthorize" })
    }
}

export const isModeratorOrAdmin = async ( req, res, next ) => {

    const user = await User.findById( req.userId )
    const roles = await Role.find({ _id: {$in: user.roles} })

    for (const role of roles) {
        if( role.name == 'moderator' || role.name == 'admin'){
            next()
            return;
        } 
    }

    return res.status(403).json({ message: "Require moderator or admin role" })
}