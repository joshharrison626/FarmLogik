import React from "react";

type SidePanelFooterProps = {
    children: React.ReactNode;
};

const SidePanelFooter = ({children}: SidePanelFooterProps) => (
    <div className="flex gap-4 p-4 border-t border-gray-200 fixed bottom-0 w-full justify-between">
        {children}
    </div>
);

export default SidePanelFooter;