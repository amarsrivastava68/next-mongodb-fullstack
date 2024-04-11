'use client'
import axios from 'axios'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
  const router = useRouter()

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
      <button className='bg-blue-500 text-white ' onClick={logout}>Logout</button>
    </div>
  )
}

export default ProfilePage
