import React, { useEffect, useState } from "react";
import clsx from 'clsx';

interface FormMessageProps {
    message?: string;
    type?: 'error' | 'info' | 'success';
}

const FormMessage: React.FC<FormMessageProps> = ({ message, type = 'error' }) => {
    const [internalMessage, setInternalMessage] = useState<string | undefined>(message);
    const [opacityClass, setOpacityClass] = useState(message ? 'opacity-100' : 'opacity-0');

    useEffect(() => {
        if (message) {
            setInternalMessage(message);
            setOpacityClass('opacity-100');
        } else if (type === 'success' && internalMessage) {
            setOpacityClass('opacity-0');
            const timer = setTimeout(() => {
                setInternalMessage(undefined);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setInternalMessage(undefined);
            setOpacityClass('opacity-0');
        }
    }, [message, type, internalMessage]);

    if (!internalMessage) return null;

    const messageClasses = clsx(
        "text-xs transition-opacity duration-1000",
        {
            'text-red-500': type === 'error',
            'text-blue-500': type === 'info',
            'text-green-600': type === 'success',
        },
        opacityClass
    );

    return <p className={messageClasses}>{internalMessage}</p>;
};

export default FormMessage;