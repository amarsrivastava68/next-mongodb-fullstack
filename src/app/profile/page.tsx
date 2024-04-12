'use client'
import axios from 'axios'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'





const ProfilePage = () => {
  const router = useRouter()
  const [data ,setdata ] = useState('nothing')

  const getUserDetails = async () => {

    const res = await axios.get('/api/users/me')
    console.log(res.data)
    setdata(res.data.data._id)
  }


  const logout =async ()=>{
try {
  

  await axios.get('/api/users/logout')
  router.push('/login')
} catch (error:any) {

  console.log(error.message)
}
  }
  return (
    <div>
      <h1>This is the profile page </h1>
      <h2>{data === 'nothing' ? "click on get user data button to know about user " : <Link href={`/profile/${data}`}>user-{data}</Link>}</h2>
      <button className='bg-blue-500 text-white ' onClick={logout}>Logout</button>
      <button className='bg-blue-500 text-white ' onClick={getUserDetails}>Get user Data</button>

    </div>
  )
}

export default ProfilePage
