import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    
    <div className='flex items-center'>
        <div >
          <Avatar src='https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg' size={27} round={true} className='cursor-pointer' />
        </div>
        <div className='flex items-center'>
          <h1 className='ml-2 font-medium text-sm'>{item.name}</h1>
          <p className='ml-2 py-2 text-sm '>{item.message}</p>
      </div>
    </div>

  )
}

export default ChatMessage
