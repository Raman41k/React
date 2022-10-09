import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../../services";

const initialState = {
    posts:[],
    currentPost:null,
    error:null,
    loading:false
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data;
        } catch (e){
            rejectWithValue(e.response.data)
        }
    }
);


const postSlice = createSlice({
    name: 'postSLice',
    initialState,
    reducers:{
        setCurrentPost:(state, action) =>{
            state.currentPost = action.payload
        },
        deletePost:(state, action) =>{
            const index = state.posts.find(post=>post.id === action.payload);
            state.posts.splice(index, 1)
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) =>{
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected,(state, action) =>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending,(state, action) =>{
                state.loading = true
            })
});

const {reducer:postReducer, actions:{setCurrentPost,deletePost}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost,
    deletePost
}

export {
    postReducer,
    postActions
}
