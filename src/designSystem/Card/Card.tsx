import React from "react";
import CardList from "./CardList";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeaderImage from "./CardHeaderImage";

type CardProps = {
    children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {children}
        </div>
    );
};

Card.List = CardList;
Card.HeaderImage = CardHeaderImage;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;