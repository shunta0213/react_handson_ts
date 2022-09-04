import React, { useCallback, useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

const RepoReadme = ({
    repo,
    login
}: {
    repo: string,
    login: string
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [markdown, setMarkdown] = useState("")

    const loadReadme = useCallback(async (login: string, repo: string) => {
        setIsLoading(true)
        const uri: string = `https://api.github.com/repos/${login}/${repo}/readme`
        const { download_url }: { download_url: string } = await fetch(uri).then(res => res.json())
        const markdown = await fetch(download_url).then(res => res.text())
        setMarkdown(markdown)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError)
    }, [repo])

    if (error) return (<pre> {JSON.stringify(error, null, 2)} </pre>)
    if (isLoading) return <p>Loading... </p>
    return <ReactMarkdown children={markdown} />
}

export default RepoReadme