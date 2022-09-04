import React from "react";
import { inputProps, resetValue } from "../../hooks/useInput";


const SubmitForm = ({ placeholder,
    buttonString,
    loginProp,
    resetLogin,
    setLoginId
}: {
    placeholder: string,
    buttonString: string,
    loginProp: inputProps,
    resetLogin: resetValue,
    setLoginId: React.Dispatch<React.SetStateAction<string>>
}) => {
    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(loginProp.value)
        setLoginId(loginProp.value)
        resetLogin()
    }
    return (
        <form onSubmit={submit}>
            <input type="text" placeholder={placeholder} {...loginProp} required />
            <button>{buttonString}</button>
        </form>
    )
}

export default SubmitForm