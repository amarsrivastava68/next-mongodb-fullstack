'use client'
import axios from 'axios'
import Link from 'next/link'
import { useState , useEffect } from 'react'

export default function VerifyEmailPage () 
{

    const [token , settoken ] = useState<string>("")
    const [verified , setverified] = useState(false)
    const [error , seterror] = useState(false)


    const VerifyUserEmail = async ()=> {
        try {
            axios.post('/api/users/verifyemail' , {token})
            setverified(true)
        } catch (error : any) {
            seterror(true)
            console.log(error.response.data)
        }
    }
    useEffect(()=>{
        const urlToken = window.location.search.split('=')
    } , [])
}