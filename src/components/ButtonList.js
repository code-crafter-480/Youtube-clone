import React from 'react'

const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Trending", "Live"]


const ButtonList = () => {
  return (
    <div className='mt-3'>
      {
        buttonList.map((item, index) => {
          return <button key={index} className='bg-gray-200 font-medium px-4 py-1 mx-1 rounded-lg' >{item}</button>
        })
      }
    </div>
  )
}

export default ButtonList
