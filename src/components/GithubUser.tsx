import React from "react";

import { Fetch } from "./atoms/fetch";

interface githubUser {
    avatar_url: string,
    bio: string,
    blog: string,
    company: string | null,
    login: string,
    name: string,
    location: string | null,
}

const UserDetails = ({ data }: { data: githubUser }) => {
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
                {data!.bio && <p> {data!.bio} </p>}
            </div>
        </div>
    )
}

const GithubUser = ({ login }: { login: string }) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    )
}


// const GithubUser = ({ logIn }: { logIn: string }) => {
//     const { isLoading, data, error } = useFetch<githubUser>(`https://api.github.com/users/${logIn}`)

//     if (error) return <pre> {JSON.stringify(error, null, 2)} </pre>

//     if (isLoading) return <h1>...Loading</h1>

//     console.log(data)
//     return (
//         <div className="githubUser">
//             <img
//                 src={data!.avatar_url}
//                 alt={data!.login}
//                 style={{ width: 200 }}
//             />
//             <div>
//                 <h1> {data!.login} </h1>
//                 {data!.name && <p> {data!.name} </p>}
//                 {data!.location && <p> {data!.location} </p>}
//             </div>
//         </div>
//     )
// }

export default GithubUser