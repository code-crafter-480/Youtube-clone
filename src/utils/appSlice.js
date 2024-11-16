import { createSlice } from '@reduxjs/toolkit'

// 👉 Some update in #05
const appSlice = createSlice({
    name: 'app', 
    initialState:{
        open:true,
        video:[],
        category:"All",
        active: "All"  // Add the 'active' field to the state
    },
    reducers:{
        // action
        toggleSidebar:(state)=>{
            state.open = !state.open
        },
        setHomeVideo:(state,action) => {
            state.video = action.payload
        },
        setCategory:(state, action) => {
            state.category = action.payload
        },
        setActive: (state, action) => {  // New action to set 'active'
            state.active = action.payload;
        }
    }
})

export const {toggleSidebar, setHomeVideo, setCategory, setActive} = appSlice.actions
export default appSlice.reducer