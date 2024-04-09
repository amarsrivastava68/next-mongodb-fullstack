import React from 'react'

const UserProfile = ({params} :  any ) => {
  return (
    <div>
      <h1>This is the user profile : <span className='text-blue-500 bg-yellow'>{params.id}</span> </h1>
      
    </div>
  )
}

export default UserProfile
