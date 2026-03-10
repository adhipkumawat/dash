import React from 'react'
import { useEffect, useState } from 'react'
import axios, { Axios } from "axios";

function New  ()  {
     const[user, setuser]=useState([])
     
  
  useEffect(() => {
   axios
   .get("https://jsonplaceholder.typicode.com/users")
   .then((res)=> setuser(res.data))
   .catch((err)=> console.log(err)); 
  
  }, [])
  
  return (
    <div className='bg-amber-100 h-250'>
 <h1 className='uppercase text-center text-6xl'>user list</h1>
      <div className='w-250 border-2 h-screen ml-80 mt-30'>
        <table>
          <thead className='bg-blue-600'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user)=>(
            <tr key={user.id}>
              <td className='py-5  px-4'>{user.id}</td>
              <td className='py-5  px-4'>{user.name}</td>
              <td className='py-5  px-4'>{user.username}</td>
              <td className='py-5  px-4'>{user.email}</td>
              <td className='py-5  px-4'>{user.address.street}</td>
              <td><button className='border-2 h-10 w-10 rounded-2xl bg-blue-400 hover:cursor-pointer'>view</button></td>
            </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default New