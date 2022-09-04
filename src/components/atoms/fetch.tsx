import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const Fetch = ({
    uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = (error) => (<pre> {JSON.stringify(error, null, 2)} </pre>)
}: {
    uri: string,
    renderSuccess: any,
    loadingFallback?: JSX.Element,
    renderError?: (error: object) => JSX.Element
}) => {
    const { isLoading, data, error } = useFetch(uri)
    if (error) return renderError(error)
    if (isLoading) return loadingFallback
    if (data) return renderSuccess({ data })
}