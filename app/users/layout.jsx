import React from 'react'
import UserList from './UserList'

const layout = ({children}) => {
  return (
    <main className='flex h-full'>
        <div className=''>
            <UserList/>
        </div>
        <div className='bg-gray-400 w-full h-full'>
        {children}
        </div>
    </main>
  )
}

export default layout