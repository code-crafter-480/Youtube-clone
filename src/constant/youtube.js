export const API_KEY = process.env.REACT_APP_API_KEY_2
export const BASE_URL = "https://www.googleapis.com/youtube/v3"

// This is from 'most popular videos'...
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${API_KEY}`

// export const YOUTUBE_SEARCH_SUGGESSION_API ="https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="