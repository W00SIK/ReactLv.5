import api from './api'

// 로그인
export const login = async (user) => {
    
    console.log(user)
    console.log(user.id)
    console.log(user.password)
    try {
        const response = await api.post(`login`, user)
        localStorage.setItem('accessToken', response.data.token)
        localStorage.setItem('refreshToken', response.data.token)
        console.log(response.data)
    } catch (error) {
        console.log("Login failed:", error)
        alert("존재하지 않는 아이디 입니다.")
    }
}

// 로그아웃
export const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
}

// 회원 가입
export const join = async (user) => {
    console.log(user)
    console.log(user.id)
    console.log(user.password)

    if (user.id.trim() === '' || user.password.trim() === '') {
        console.log("유저 아이디와 비밀번호를 입력하세요.");
        return;
    }

    try {
        const accessToken = localStorage.getItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        console.log(accessToken)
        const response = await api.post(`register`, user, {
            headers: {
                Authorization: "Bearer " + accessToken
            },
        })
        console.log(response.data)

    } catch (error) {
        console.log("singUp failed:", error)
        alert("이미 존재하는 아이디입니다.");
    }
}

// 사용자 정보
export const info = (userId) => api.get(`/users/${userId}`)

// 회원 정보 수정
export const update = (data) => api.put(`/users`, data)

// 회원 탈퇴
export const remove = (userId) => api.delete(`/users/${userId}`)