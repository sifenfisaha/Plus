import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BlogState{
    query: string, 
    tags: string[]
}

const initialState: BlogState = {
    query: '',
    tags:[]
}


const blogSlice = createSlice({name: 'blog', initialState, reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
        state.query = action.payload
    },
    addTag: (state, action: PayloadAction<string>) => {
        if(!state.tags.includes(action.payload)){
            state.tags.push(action.payload)
        }
    },
    removeTag: (state, action: PayloadAction<string>) => {
       state.tags = state.tags.filter(tag => tag !== action.payload)
    }
}})

export const {setQuery, addTag, removeTag} = blogSlice.actions

export default blogSlice.reducer