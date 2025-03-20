import React from "react";

type ImageUploadProps = {
    label: string;
    inputRef: React.RefObject<HTMLInputElement>;
};

const ImageUpload = ({ inputRef, label }: ImageUploadProps) => {
    const classList = [
        'border',
        'border-gray-300',
        'rounded-md p-2',
        'file:mr-4',
        'file:rounded-md',
        'file:bg-white',
        'file:shadow-md',
        'file:border',
        'hover:file:bg-gray-50',
        'hover:file:cursor-pointer',
    ].join(' ');

    return (
        <div className="flex flex-col gap-1">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                ref={inputRef}
                type="file"
                accept="image/png, image/jpeg"
                className={classList}
            />
        </div>
    );
};

export default ImageUpload;