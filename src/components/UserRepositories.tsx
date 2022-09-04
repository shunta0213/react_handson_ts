import React from "react";

import { Fetch } from "./atoms/fetch";
import { RepoMenu } from "./RepoMenu";

const UserRepositories = ({
    login,
    onSelect = f => f
}: {
    login: string,
    onSelect: (f: any) => any
}) => {
    return (
        <>
            <Fetch
                uri={`https://api.github.com/users/${login}/repos`}
                renderSuccess={({ data }: { data: any }) => {
                    return <RepoMenu
                        repositories={data}
                        onSelect={onSelect}
                        login={login}
                    />
                }}
                renderError={(error) => {
                    return <p>... Failed</p>
                }}
            />
        </>
    )
}

export default UserRepositories