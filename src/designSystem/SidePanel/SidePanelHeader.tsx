import React from "react";

type SidePanelHeaderProps = {
    title: string;
};

const SidePanelHeader = ({title}: SidePanelHeaderProps) => (
    <div className="p-4 bg-blue-50 border-b border-gray-200">
        <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
);

export default SidePanelHeader;