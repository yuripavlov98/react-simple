import React, { useState } from "react";

export const Input = () => {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <h2>{value}
        <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}></input></h2>

    )
}