import User from '../../models/user'
import jwt from 'jsonwebtoken'
import config from '../../config/config'
import Role from '../../models/role'

export const signUp = async (req, res) => {

    const password = await User.encryptPassword(req.body.password)

    const newUser = new User({
        ...req.body,
        password: password
    })

    if( req.body.roles ){
        const foundRole = await Role.find({ name: {$in: req.body.roles} })
        newUser.roles = foundRole.map( role => role._id )
    }else{
        const role = await Role.findOne({ name: "user" })
        newUser.roles = [ role._id ]
    }

    const savedUser = await newUser.save()

    const token = jwt.sign( { id: savedUser._id }, config.SECRET, { 
        expiresIn: 86400
    })

    res.status(200).json({ token })
}


export const signIn = async (req, res) => {

    const foundUser = await User.findOne({ email: req.body.email }).populate("roles")
    if(!foundUser) return res.status(400).json({ message: "User not found" })

    const matchPassword = await User.comparePassword( req.body.password, foundUser.password )
    if(!matchPassword) return res.status(401).json({ token: null, message: "Invalid email or password" })

    const token = jwt.sign( { id: foundUser._id }, config.SECRET, { 
        expiresIn: 86400
    })

    res.json({ token })
}