import React from "react";
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="sr-only" aria-live="polite">Loading</div>
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
};
    
export default LoadingSpinner;