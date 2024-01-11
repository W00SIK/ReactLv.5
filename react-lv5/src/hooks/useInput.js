import { useState } from 'react'

export const useInput = () => {

    const [value, setValue] = useState("")

    const handlerInput = (e) => {
        setValue(e.target.value)
    }

    const handlerResetValue = () => {
        setValue("")
    }

    return [value, handlerInput, handlerResetValue]
}
