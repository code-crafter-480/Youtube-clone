import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { API_KEY } from '../constant/youtube';
// const API_KEY = process.env.REACT_APP_API_KEY


const VideoCart = ({item}) => {
  const [ytIcon, setYtIcon] = useState("")

  const getYoutubeChannelName = async() => {
    try {
      // console.log("Itemsi sis : ", item)
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
      // console.log("res si : ", res)
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
    } catch (error) {
      console.log("Error 2 is : ", error)
    }
  }

  useEffect(() => {
    getYoutubeChannelName()
    // eslint-disable-next-line
  }, [])


  // Utility function to format numbers as 1K, 1M, etc.
  function formatNumber(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return count.toString();
    }
  }

  function timeAgo(uploadDate) {
    const now = new Date();
    const uploadTime = new Date(uploadDate);
    const difference = now - uploadTime;
    // console.log("differenc is : ",difference)
  
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }

  return (
    <div className='w-94 cursor-pointer mb-2'>
      <img className='w-full rounded-lg shadow-lg object-cover' src={item.snippet.thumbnails.medium.url} alt="YouTube Video Thumbnail" />
      <div>
        <div className='flex mt-2 mx-1'>
            <Avatar src={ytIcon} size={50} round={true} className='cursor-pointer' style={{ objectFit: 'cover', width: '100px', height: '100px' }} />
            <div className='ml-2'>
                <h1 className='font-bold'>{item.snippet.title.length > 65 ? item.snippet.title.substring(0, 70) + "..." : item.snippet.title}</h1>
                <p className='text-sm text-gray-600'>{item.snippet.channelTitle}</p>
                <span className='text-sm text-gray-500'>{formatNumber(item.statistics.viewCount)} views • {timeAgo(item.snippet.publishedAt)} </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCart
