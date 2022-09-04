import React from "react";
import GithubUser from "../molecules/GithubUserList";
import MtList from "../molecules/MtList";
import UserList from "../molecules/UserList";

import { inputProps } from "../../hooks/useInput"

const RenderProp = ({ loginId }: { loginId: string }): JSX.Element => {
    return (
        <>
            {/* <MtList /> */}
            {/* <UserList /> */}
            <GithubUser logIn={loginId} />
        </>
    )
}




export default RenderProp