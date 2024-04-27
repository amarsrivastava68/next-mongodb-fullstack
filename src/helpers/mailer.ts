import nodemailer from  'nodemailer'
import bcryptjs from 'bcryptjs'
import User from '@/models/userModel'


const sendEmail = async ({email , emailType , userId} : any )=> {
try {
    
    const hashedToken = await bcryptjs.hash(userId.toString() , 10)
    await User.findByIdAndUpdate(userId)
} catch (error: any){
    throw new Error(error.message)
    
}

}