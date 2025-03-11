import React from "react";

type CardListProps = {
    children: React.ReactNode;
};

const CardList = ({ children }: CardListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {children}
        </div>
    );
};

export default CardList;