import React from "react";

interface ListProps<X> {
    data: X[],
    renderItem: (item: X) => JSX.Element,
    renderEmpty: JSX.Element,
}

export function List<X>({ data = [], renderItem, renderEmpty }: ListProps<X>) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, index) => (
                <li key={index}> {renderItem(item)} </li>
            ))}
        </ul>
    )
}