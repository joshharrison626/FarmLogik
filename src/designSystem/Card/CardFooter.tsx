import React from "react";

type CardFooterProps = {
    children: React.ReactNode;
};

const CardFooter = ({ children }: CardFooterProps) => {
    return (
        <div className="">
            {children}
        </div>
    );
};

export default CardFooter;