import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'role',
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});


userSchema.statics.encryptPassword = async ( password ) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash( password, salt )
}

userSchema.statics.comparePassword = async ( receivedPassword, password ) => {
    return await bcrypt.compare( receivedPassword, password )
}

export default model( 'user', userSchema );