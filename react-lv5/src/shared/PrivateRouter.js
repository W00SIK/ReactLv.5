import React from "react"
import { Navigate } from "react-router-dom"

export  const PrivateHomeRouter = ({access, homePath}) => {
    console.log(access)
    return (
        access ? homePath : <Navigate to= "/login"/>
    )
}

export  const PrivateAccountRouter = ({access, homePath}) => {
    console.log(access)
    return (
        access ? <Navigate to= "/"/> : homePath
    )
}
