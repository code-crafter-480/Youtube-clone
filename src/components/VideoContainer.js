import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUTUBE_VIDEO_API } from '../constant/youtube'      // 📌 'Curly bracket' laganor karon amra 'youtube.js' a 'named export' use kore6i...
// import { API_KEY } from '../constant/youtube'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  // 📌📌📌 Jab bhi api call/network call kar tahe ho toh apko hmesha 'useEffect' use karna hai...
  const [video, setVideo] = useState([])

  const fetchingYoutubeVideo = async() => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`)
      // console.log(res?.data?.items)
      setVideo(res?.data?.items)
    } catch (error) {
      console.log("Errrrrroooor is: ", error)
    }
  }
  useEffect(() => {
    fetchingYoutubeVideo()
  },[])

  return (
    <div className='mt-5 grid grid-cols-3 gap-2'>
      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id} >
              <VideoCart item={item} /> 
            </Link>
            

          )
        })
      }
    </div>
  )
}

export default VideoContainer
