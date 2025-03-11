import React from "react";

type CardBodyProps = {
    children: React.ReactNode;
};

const CardBody = ({ children }: CardBodyProps) => {
    return (
        <div className="p-4">
            {children}
        </div>
    );
};

export default CardBody;