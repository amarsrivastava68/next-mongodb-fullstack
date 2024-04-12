import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse , NextRequest } from "next/server";
import User from "@/models/userModel";
import {connect} from '@/dbConfig/dbConfig'

connect ()

export async function GET (request : NextRequest)

{
    try {
        
        const uesrId = await getDataFromToken(request)
        const user = await User.findOne({_id: uesrId}).select("-password")

        return NextResponse.json({
            message : 'User found  . . . ' , 
            data : user 
        })

    } catch (error : any) {

        return NextResponse.json({message : error.message} , {status : 400})
        
    }
}