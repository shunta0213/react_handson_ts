import React, { useCallback, useMemo, useState } from "react";

// export const useIterator = (
//     items = [],
//     initialIndex = 0
// ) => {
//     const [index, setIndex] = useState(initialIndex)

//     const prev = () => {
//         if (index === 0) return setIndex(items.length - 1)
//         setIndex(index - 1)
//     }

//     const next = () => {
//         if (index === items.length) return setIndex(0)
//         setIndex(index + 1)
//     }

//     return [items[index], prev, next]
// }

export const useIterator = (
    items = [],
    initialIndex = 0
) => {
    const [index, setIndex] = useState(initialIndex)

    const prev = useCallback(() => {
        if (index === 0) return setIndex(items.length - 1)
        setIndex(index - 1)
    }, [index])

    const next = useCallback(() => {
        if (index === items.length) return setIndex(0)
        setIndex(index + 1)
    }, [index])

    const item = useMemo(() => items[index], [index])

    return [item || items[0], prev, next]
}