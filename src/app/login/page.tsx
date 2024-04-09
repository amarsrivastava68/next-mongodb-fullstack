'use client'
import React, { useState , useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: '',
   
  });
  const [loading, setloading]       =     useState(false)
  const[bdis , setbdis]             =     useState(false)

  const onLogin = async () => {
    try {
      setloading(true)
      await axios.post('/api/users/login' , user)
      console.log('login successful . . . ')
      router.push('/profile')
      
    } catch (error: any) {

      console.log('login is failed  . . . ' , error.message)
      
    }
    finally{
      setloading(false)
    }
  };

  useEffect(()=>{
    if (user.email.length>0 && user.password.length >0 && user.password.length>0)
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
        <h1 className="text-4xl font-bold text-center text-white mb-4">{loading ? "Processing  . . ." : "Login"}</h1>
        <hr className="border border-white mb-4" />
      
      
        
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

        <button className="btn mt-8" onClick={onLogin}>
          Login
        </button>
        <p className="text-sm mt-2 text-center text-gray-300">
          New user ? Goto {' '}
          <Link href="/signup" className="text-blue-500">
             Signup Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
