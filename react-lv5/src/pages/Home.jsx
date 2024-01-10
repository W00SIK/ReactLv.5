import React from 'react'
import { logout } from '../apis/auth'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <button onClick = {() => {
                logout()
                navigate("/login")
            }}>로그아웃</button>
        </>
    )
}

export default Home