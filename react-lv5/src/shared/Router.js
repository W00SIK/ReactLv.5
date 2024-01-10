import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import {PrivateHomeRouter, PrivateAccountRouter} from './PrivateRouter'
import Home from '../pages/Home'

function Router() {
    const access = localStorage.getItem("accessToken")
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/login" element={<Login/>} />
                <Route path ="/createaccount" element={<PrivateAccountRouter access={access} homePath= {<CreateAccount/>}/>} />
                <Route path ="/" element={<PrivateHomeRouter access={access} homePath = {<Home/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router