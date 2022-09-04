import React, { useEffect } from "react";
import { useIterator } from "../hooks/useIterator";

export const RepoMenu = ({
    repositories,
    onSelect = f => f,
    login
}: {
    repositories: any,
    onSelect: (f: string) => any,
    login: string
}) => {

    const [{ name }, previous, next] = useIterator(repositories)

    useEffect(() => {
        if (!name) return;
        onSelect(name)
    }, [name])

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p> {name} </p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    )
}
