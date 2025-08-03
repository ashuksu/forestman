import React from "react";

interface FormMessageProps {
    message?: string;
}

const FormMessage: React.FC<FormMessageProps> = ({ message }) => {
    if (!message) return null;

    return <p className="text-red-500 text-sm mt-1">{message}</p>;
};

export default FormMessage;
