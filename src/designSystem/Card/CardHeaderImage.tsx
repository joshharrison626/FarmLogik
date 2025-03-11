import React from "react";

type CardHeaderImageProps = {
    imageName: string;
    alt?: string;
};

const CardHeaderImage = ({ imageName, alt = "" }: CardHeaderImageProps) => {
    return (
        <div className="w-full h-48 overflow-hidden">
            <img src={`src/images/${imageName}`} alt={alt} />
        </div>
    );
};

export default CardHeaderImage;