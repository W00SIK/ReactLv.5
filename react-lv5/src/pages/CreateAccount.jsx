import React from 'react'
import { Link } from 'react-router-dom'
import {useInput} from '../hooks/useInput'
import { join } from '../apis/auth'

function CreateAccount() {
    const [id, handlerIdInput] = useInput("")
    const [password, handlerPwInput] = useInput("")

    const user = {
        id,
        password,
    }
    
    const onClickFormHandler = () => {
        join(user)
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
                <button>완료</button> <br/>
                <Link to="/">로그인 페이지</Link>
            </form>
        </>
    )
}

export default CreateAccount