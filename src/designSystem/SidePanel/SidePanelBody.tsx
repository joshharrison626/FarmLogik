import React from "react";

type SidePanelBodyProps = {
    children: React.ReactNode;
};

const SidePanelBody = ({children}: SidePanelBodyProps) => (
    <div className="p-4 h-[var(--side-panel-body-height)] overflow-y-auto overscroll-contain">
        {children}
    </div>
);

export default SidePanelBody;