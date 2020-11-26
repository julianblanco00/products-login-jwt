import { ROLES } from "../models/role"
import User from "../models/user"

export const isDuplicated = async ( req, res, next ) => {

    const username = await User.findOne({ username: req.body.username })
    if(username) return res.status(400).json({ message: "The username already exists" })

    const email = await User.findOne({ email: req.body.email })
    if(email) return res.status(400).json({ message: "The email already exists" })

    next()
}

export const checkIfRoleExists = ( req, res, next ) => {

    if( req.body.roles ){

        for (const role of req.body.roles) {
            if( !ROLES.includes(role) ){
                return res.status(400).json({
                    message: `Role ${role} does not exist`
                })
            }
        }

    }

    next()
}