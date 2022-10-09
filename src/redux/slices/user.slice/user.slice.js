import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        deleteUser: (state, action) => {
            const index = state.users.find(user=>user.id === action.payload);
            state.users.splice(index, 1)

        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action) =>{
                state.users = action.payload;
            })
            .addCase(getAll.pending,(state, action)=>{
                state.loading = true
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.error = action.payload
            })
});

const {reducer: userReducer, actions: {setCurrentUser,deleteUser}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser,
    deleteUser
}

export {
    userReducer,
    userActions
}