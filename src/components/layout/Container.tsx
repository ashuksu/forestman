import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={`container w-full max-w-[1400px] mx-auto px-4 ${className || ''}`}>
            {children}
        </div>
    );
}