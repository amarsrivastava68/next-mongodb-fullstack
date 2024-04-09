import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest , NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'




connect()

export async function POST(request: NextRequest){

    try {
            const reqBody = await request.json()
            const {username , email , password } = reqBody
            console.log(reqBody)
            // checking if the user already exists  

            const user = await User.findOne({email})

            if (user)
            {
                return NextResponse.json({error : 'upyogkarta pahle se panjikrit hai....'} , {status : 400})
            }

            // hash password making 
            const salt = await bcryptjs.genSalt(10)
            const hashedpassword = await bcryptjs.hash(password, salt)

            const newuser =    new User({
                username , 
                email , 
                password : hashedpassword
            })

            const saveduser = await newuser.save()
            console.log(saveduser)
            
            return NextResponse.json({message: 'naya user safaltapurvak banaya gaya '  , success : true , saveduser })
        }
    catch (err : any )
    {
            return NextResponse.json({error : err.message} ,{status : 500})
    }
}