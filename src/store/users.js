import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	users: [
        {
            fullName:"Alperen",
            userName:"Hadacar",
            email:"aalprnbzkrt@gmail.com",
            password:"1111"
        }
    ]
}


const users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
            state.users.push(action.payload);
		}
	}
})

export const { setUser } = users.actions
export default users.reducer