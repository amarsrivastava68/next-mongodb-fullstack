import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest , NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect()

export async function POST (request : NextRequest) {

     try {
        
        const reqBody = await request.json()
        const {email , password } = reqBody
        console.log(reqBody)

        //checking if the user exists or not . 

        const user = await User.findOne({email})
        if (!user) 
        {
            return NextResponse.json({error: 'this user does not exist . . . ' } , {status:400}  )
        }
        // checking the password validity . 

        const isvalid = await bcryptjs.compare (password , user.password)

        if (!isvalid){
             return NextResponse.json({error : 'this is an invalid password  . . ' , } , {status:400})
        }
        //create token data 
        const tokendata = {
            id : user._id , 
            username : user.username , 
            email : user.email
        }

        //create token
        const token = await jwt.sign(tokendata , process.env.TOKEN_SECRET! , {expiresIn : '1d'})
        const response = NextResponse.json({
            message : 'Login successful . . .' , 
            success : true
        })
        response.cookies.set('token' , token , {
            httpOnly : true
        })
        return response
     } catch (error: any) {

        return NextResponse.json({error : error.message } , {status : 500})
        
     }
}
