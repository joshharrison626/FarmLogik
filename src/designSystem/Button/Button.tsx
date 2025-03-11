import React from 'react';

type ButtonLabel = {
    label: string;
    ariaLabel?: undefined;
};

type ButtonAriaLabel = {
    label?: undefined;
    ariaLabel: string;
};

type ButtonProps = (ButtonLabel | ButtonAriaLabel) & {
    priority?: 'primary' | 'secondary';
    icon?: React.ReactNode;
    fullWidth?: boolean;
    onClick: () => void;
    children?: React.ReactNode;
};

const Button = ({priority = "primary", label, ariaLabel, icon, fullWidth = false, onClick, children}: ButtonProps) => {
    const classList = [
        'flex',
        'items-center',
        'justify-center',
        'h-12',
        'rounded-md',
        'px-4',
        'py-2',
        'transition-colors'
    ];
    
    if (fullWidth) {
        classList.push('w-full');
    } else {
        classList.push('w-fit');
    }
    
    if (priority === 'primary') {
        classList.push('bg-blue-600', 'text-white', 'shadow-lg', 'hover:bg-blue-700', 'transition-colors');
    } else {
        classList.push('bg-white', 'text-blue-600', 'shadow-md', 'hover:bg-gray-50', 'transition-colors');
    }
    
    return (
        <button
            onClick={onClick}
            className={classList.join(' ')}
            aria-label={ariaLabel || undefined}
        >
            {icon}
            <span>{label}</span>
            {children}
        </button>
    );
};

export default Button;