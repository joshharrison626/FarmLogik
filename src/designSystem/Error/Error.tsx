import React from "react";

type ErrorProps = {
    message: string;
};

const Error = ({ message }: ErrorProps) => {
    return (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
            {`Something went wrong: ${message}`}
        </div>
    );
}

export default Error;