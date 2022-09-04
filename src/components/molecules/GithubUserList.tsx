import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

interface githubUser {
    avatar_url: string,
    bio: string,
    blog: string,
    company: string | null,
    login: string,
    name: string,
    location: string | null,
}

const GithubUser = ({ logIn }: { logIn: string }) => {
    const { isLoading, data, error } = useFetch<githubUser>(`https://api.github.com/users/${logIn}`)

    if (error) return <pre> {JSON.stringify(error, null, 2)} </pre>

    if (isLoading) return <h1>...Loading</h1>

    console.log(data)
    return (
        <div className="githubUser">
            <img
                src={data!.avatar_url}
                alt={data!.login}
                style={{ width: 200 }}
            />
            <div>
                <h1> {data!.login} </h1>
                {data!.name && <p> {data!.name} </p>}
                {data!.location && <p> {data!.location} </p>}
            </div>
        </div>
    )
}

export default GithubUser