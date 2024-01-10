import React, { createContext,useEffect, useState } from "react";
import api from "../apis/api";
import Cookies from 'js-cookie';


export const LoginContext = createContext();
LoginContext.displayName = `LoginContext`

function LoginContextProvider({children}) {

    // 로그인 여부
    const [isLogin, setLogin] = useState(false);

    // 유저 정보
    const [userInfo, setUserInfo] = useState({});

    // 권한 정보
    const [roles, setRoles] = useState({ isUser: false, isAdmin: false });

    // 아이디 저장
    const [remberUserId, setRmberUserId] = useState(false);

    /*-------------------------------------------------*/
    



    // 로그인 세팅
    const ioginSetting = (userData, accessToken) => {

        const { no, userId, authList } = userData
        const roleList = authList.map((auth) => auth.auth)

        console.log(`no : ${no}`)
        console.log(`userId : ${userId}`)
        console.log(`authList : ${authList}`)
        console.log(`roleList: ${roleList}`)

        // axios 객체의 header(Authorization : `Bearer $(accessToken)`)
        api.defaults.headers.commom.Authorization = `Bearer ${accessToken}`

        // 쿠키에 accessToken(jwt) 저장
        Cookies.set("accessToken", accessToken)

        // 로그인 여부 : true
        setLogin(true)

        // 유저정보 세팅
        const updateUserInfo = { no, userId, roleList }
        setUserInfo(updateUserInfo)

        // 권한정보 세팅
        const updatedRoles = { isUser: false, isAmdin: false }

        roleList.forEach((role) => {
            if (role == `ROLE_USER`) updatedRoles.isUser = true
            if (role == `ROLE_ADMIN`) updatedRoles.isAdmin = true
        })
        setRoles(updatedRoles)
    }
    // 로그아웃 세팅
    const logoutSetting = () => {
        // axios 헤더 초기화
        api.defaults.headers.commom.Authorization = undefined

        // 쿠키 초기화
        Cookies.remove("accessToken")

        // 로그인 여부 : false
        setLogin(false)

        // 유저 정보 초기화
        setUserInfo(null)

        // 권한 정보 초기화
        setRoles(null)
    }

    const logout = () => {
        setLogin(false)
    }

    useEffect(()=> {

    }, [])

    return (
        <LoginContext.Provider value= {{isLogin, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider