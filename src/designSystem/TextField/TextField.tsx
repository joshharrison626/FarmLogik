import React, { useId, useRef } from 'react';

type TextFieldProps = {
    label: string;
    placeholder?: string;
    value?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
};

const TextField = ({label, placeholder, value, inputRef}: TextFieldProps) => {
    const id = useId();

    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>}
            <input
                ref={inputRef}
                id={id}
                type="text"
                className="border border-gray-300 rounded-md p-2"
                placeholder={placeholder}
                defaultValue={value}
            />
        </div>
    );
}

export default TextField;