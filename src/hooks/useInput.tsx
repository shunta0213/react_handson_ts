import React, { useState } from "react";

export const useInput = (initialValue: string): [inputProps, resetValue] => {
    const [value, setValue] = useState<string>(initialValue)
    return [
        {
            value,
            onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ]
}

export type inputProps = { value: string, onChange: (e: { target: { value: React.SetStateAction<string> } }) => void }
export type resetValue = () => void