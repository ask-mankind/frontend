import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token = localStorage.getItem("token");
    return token
}

export function getAuthUser(){
    const user = JSON.parse(localStorage.getItem("ahkUser"));
    console.log(user)
    return user
}

export function checkAuthLoader(){
    const token = getAuthToken()
    if(!token){
        return redirect("/login")
    }
}