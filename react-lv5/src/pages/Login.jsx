import React from 'react'
import { Link } from 'react-router-dom'
import { useInput } from '../hooks/useInput'
import { login } from '../apis/auth'

function Login() {
    const [id, handlerIdInput] = useInput("")
    const [password, handlerPwInput] = useInput("")


    const user = {
        id,
        password,
    }

    const onClickFormHandler = () => {
        login(user)
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onClickFormHandler()
                }}
            >
                아이디:
                <input type="text"
                    value={id}
                    onChange={handlerIdInput}
                />
                비밀번호:
                <input type="password"
                    value={password}
                    onChange={handlerPwInput}
                />
                <button>로그인</button><br />
                <Link to="/createaccount">회원가입</Link>
            </form>
        </>
    )
}

export default Login