import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth"; 
import entries from "./entries";
import users from "./users";
const store = configureStore({
	
	reducer: {
		auth,
        entries,
		users
	},

})

export default store