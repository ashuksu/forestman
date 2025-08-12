import React from 'react';
import clsx from 'clsx';

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function Title({children, className}: TitleProps) {
    return (
        <h2 className={clsx("text-3xl md:text-4xl font-bold mb-6", className)}>
            {children}
        </h2>
    );
}