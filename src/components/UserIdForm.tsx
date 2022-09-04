import React from "react";
import SubmitForm from "./molecules/form";
import { inputProps, resetValue } from "../hooks/useInput";

const UserIdForm = ({
    loginProp,
    resetLogin,
    setLoginId
}: {
    loginProp: inputProps,
    resetLogin: resetValue,
    setLoginId: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <SubmitForm
            placeholder="user id ..."
            buttonString="Add"
            loginProp={loginProp}
            resetLogin={resetLogin}
            setLoginId={setLoginId}
        />
    )
}

export default UserIdForm