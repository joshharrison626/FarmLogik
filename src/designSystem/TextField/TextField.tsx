import React, { useId, useRef } from 'react';

type TextFieldProps = {
    label: string;
    placeholder?: string;
    value?: string;
};

const TextField = ({label, placeholder, value}: TextFieldProps) => {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);

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