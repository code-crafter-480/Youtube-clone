export const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL = "https://www.googleapis.com/youtube/v3"
// export const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos"

// This is from 'most popular videos'...
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`
// export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&key=${API_KEY}`)`
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&q=${category}&maxResults=10&regionCode=IN&key=${API_KEY}