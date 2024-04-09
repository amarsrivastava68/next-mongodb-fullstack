'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignupPage = () => {
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  });
    const[bdis , setbdis] = useState(false)
  const onSignup = async () => {
    // Implement signup logic here
    try {
      setloading(true)
      const response  = await axios.post('/api/users/signup' , user)
      console.log('signup safal hua '  , response.data )
      router.push('/login')
    
    } catch (error : any) {
      console.log('Signup asafal hua  . . . ' + error)
     
    }
    finally{
      setloading(false)
    }
  };

  useEffect(()=>{
    if (user.email.length>0 && user.password.length >0 && user.username.length>0)
    {
      setbdis(false )
    }
    else{
      setbdis(true)
    }
  } , [user])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-4">{loading ? "Processing . . . " : " Signup Form"}</h1>
        <hr className="border border-white mb-4" />
        <label htmlFor="username" className="block text-white mb-2">
          Username
        </label>
        <input
          className="input"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
       
        <label htmlFor="email" className="block text-white mt-4 mb-2">
          Email
        </label>
        <input
          className="input"
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
         <label htmlFor="password" className="block text-white mt-4 mb-2">
          Password
        </label>
        <input
          className="input"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button className="btn mt-8" onClick={onSignup}>
          {bdis? "no signup . . " : "signup "}
        </button>
        <p className="text-sm mt-2 text-center text-gray-300">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
