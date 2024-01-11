import React from "react"
import { Navigate } from "react-router-dom"

export  const PrivateHomeRouter = ({access, homePath}) => {
    console.log(access)
    return (
        access ? homePath : homePath//<Navigate to= "/login"/>
    )
}

export  const PrivateAccountRouter = ({access, homePath}) => {
    console.log(access)
    return (
        access ? <Navigate to= "/login"/> : homePath
    )
}
