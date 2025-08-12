import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {
    return (
        <div className={clsx("w-full max-w-[var(--2xl)] mx-auto px-4", className)}>
            {children}
        </div>
    );
}