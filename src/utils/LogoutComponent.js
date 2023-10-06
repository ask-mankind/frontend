import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/auth'

const LogoutComponent = () => {
    const dispatch = useDispatch()

  return (
    <>{
        dispatch(logoutUser())
    }</>
  )
}

export default LogoutComponent