import React from "react";

type SidePanelBodyProps = {
    children: React.ReactNode;
};

const SidePanelBody = ({children}: SidePanelBodyProps) => (
    <div className="p-4">
        {children}
    </div>
);

export default SidePanelBody;