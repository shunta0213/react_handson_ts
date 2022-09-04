import { useEffect, useState } from "react";

export const useFetch = <DataType,>(uri: string) => {
    const [data, setData] = useState<DataType>()
    // HACK:object?
    const [error, setError] = useState<object>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setIsLoading(false))
            .catch(setError)
    }, [uri])

    return { isLoading, data, error }
}
