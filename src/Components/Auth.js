import React from 'react'

export const Auth = React.createContext({signIn:function(){},signOut:function(){},fetchToken:function(){},isAuthenticated:function(){},fetchUser:function(){}})

export const fetchToken = () => {
    return localStorage.getItem('token')
}

export const signIn = (token,account) => {
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(account))
}

export const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}

export const isAuthenticated = () => {
    if(localStorage.getItem('token'))
        return true
    return false
}

export const fetchUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}