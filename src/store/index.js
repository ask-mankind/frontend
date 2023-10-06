import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth"; 
import entries from "./entries";
import comments from "./comments";
import users from "./users";
const store = configureStore({
	
	reducer: {
		auth,
        entries,
		comments,
		users
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck:false
	}),


})

export default store