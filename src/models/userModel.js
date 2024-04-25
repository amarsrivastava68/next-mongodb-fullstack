import mongoose from "mongoose"

const userSchema = new mongoose.Schema ({

    username  : {

        type : String , 
        required : [true , 'Kripya ek vaidh username input karein ....'] , 
        unique : true
    } , 
    email  : {

        type : String , 
        required : [true , 'Kripya ek vaidh email input karein ....'] , 
        unique : true
    }  ,
    password  : {

        type : String , 
        required : [true , 'Kripya ek vaidh password input karein ....'] , 
        
    }  , 

    isVerified : {
        type :Boolean , 
        default : false 
    } , 

    isAdmin : {
        type : Boolean , 
        default : false
    } , 

    forgotPasswordToken : String , 
    forgotPasswordTokenExpiry : Date , 
    verifyToken : String , 
    verifyTokenExpiry : Date
})


const User =  mongoose.models.users || mongoose.model('users' , userSchema)

export default User