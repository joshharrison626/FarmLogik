import React from "react";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelBody from "./SidePanelBody";
import SidePanelFooter from "./SidePanelFooter";
import { X } from "lucide-react";

type SidePanelProps = {
    show: boolean;
    dismissible?: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

const SidePanel = ({dismissible = false, show = false, onClose, children}: SidePanelProps) => {
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 ${!show ? 'hidden' : ''}`}></div>
            <div className={`bg-white shadow-md rounded-md w-1/3 fixed top-0 right-0 h-full z-50 transform transition-transform ${show ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                {dismissible && (
                    <button className="fixed top-5 right-2" aria-label="Close" onClick={onClose}>
                        <X size={24} />
                    </button>
                )}            
                {children}
            </div>
        </>
    );
};

SidePanel.Header = SidePanelHeader;
SidePanel.Body = SidePanelBody;
SidePanel.Footer = SidePanelFooter;
export default SidePanel;