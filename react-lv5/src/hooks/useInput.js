import { useState } from 'react'

export const useInput = () => {

    const [value, setValue] = useState("")

    const handlerInput = (e) => {
        setValue(e.target.value)
    }

    return [value, handlerInput]
}
