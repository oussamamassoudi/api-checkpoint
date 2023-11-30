import React from 'react'

function Userelist({users}) {
  return (
    <div className='users-container'>
        {users.map((el)=>(
            <div className='user-card'>
            <h2>{el.name}</h2>
            <h3>{el.username}</h3>
            <h3>{el.email}</h3>
            <h3>{el.city}</h3>
            <h3>{el.phone}</h3>
            </div>
        ))}
    </div>
  )
}

export default Userelist