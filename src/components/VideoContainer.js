import React, { useEffect } from 'react'
import axios from 'axios'
import { API_KEY, YOUTUBE_VIDEO_API } from '../constant/youtube'      // 📌 'Curly bracket' laganor karon amra 'youtube.js' a 'named export' use kore6i...
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo } from '../utils/appSlice'

const VideoContainer = () => {
  // 📌📌📌 Jab bhi api call/network call kar tahe ho toh apko hmesha 'useEffect' use karna hai...
  // const [video, setVideo] = useState([])            // 👉 Remove in #05 after adding 'video' form store
  const dispatch = useDispatch()       // 👉 Add in #05
  const {video, category} = useSelector((store) => store.app)       // ➡️ Get data from redux store...

  const fetchingYoutubeVideo = async() => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`)
      // console.log("Normal Data is: ",res?.data?.items)
      // setVideo(res?.data?.items)       // 👉 Remove in #05 after adding 'video' form store
      dispatch(setHomeVideo(res?.data?.items))

    } catch (error) {
      console.log("Error 2 is: ", error)
    }
  }

  // 👉 Add in #05, This is for feed chip buttons...
  const fetchVideoByCategory = async () => {
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${API_KEY}`)
        // const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&key=${API_KEY}`)
        // console.log("Blog is: ",res.data)
        dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
        console.log("Error 6 is :", error)
    }
  }

  useEffect(() => {
    if (category === "All") {
      fetchingYoutubeVideo()
    } else {
      fetchVideoByCategory()
    }
    // eslint-disable-next-line 
  },[category])

  return (
    <div className='mt-5 grid grid-cols-3 gap-2'>
      {
        video.map((item, index) => {
          return (
            <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={index} >
              <VideoCart item={item} /> 
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer
