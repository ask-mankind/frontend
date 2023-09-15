import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth"; 
import entries from "./entries";

const store = configureStore({
	
	reducer: {
		auth,
        entries
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck:false
	}),
})

export default store