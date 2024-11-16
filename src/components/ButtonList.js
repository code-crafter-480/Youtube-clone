import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setCategory } from '../utils/appSlice'

const buttonList = ["All", "Javascript", "Java", "Live", "Mixes","Game", "Movie", "News", "Songs", "Trending", "Indian pop music", "Coding", "film", "Music", "Recently uploaded", "Watched", "New to you"]


const ButtonList = () => {
  // const [active, setActive] = useState("All")
  // const dispatch = useDispatch()

  // const videoByTag = (tag) => {
  //   if(active !== tag){
  //     dispatch(setCategory(tag))
  //     setActive(tag)
  //   }
  // }
  const dispatch = useDispatch();
  const active = useSelector((state) => state.app.active);  // Access active from Redux store

  const videoByTag = (tag) => {
    if(active !== tag){
      dispatch(setCategory(tag));   // Update category in Redux store
      dispatch(setActive(tag));     // Update active state in Redux store
    }
  };

  return (
    // 👉 This 'no-scrollbar' is defined in 'index.css'
    <div className='mt-3 flex w-full overflow-x-scroll no-scrollbar'>      
      {
        buttonList.map((item, index) => {
          return (
            <div key={index}>
                <button onClick={() => {videoByTag(item)}} className={`${active === item ? "bg-slate-900 text-white" : "bg-gray-200" } font-medium px-4 py-1 mx-1 rounded-lg`} ><span className='whitespace-nowrap'>{item}</span></button>
            </div>
          ) 
        })
      }
    </div>
  )
}

export default ButtonList
