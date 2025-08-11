import React from 'react';

export interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export default function InfoCard({icon, title, text}: InfoCardProps) {
    return (
        <div
            className="flex flex-col justify-between w-full max-w-xl md:w-1/3 bg-white p-6 pb-7 rounded-lg shadow-md min-h-[240px] md:min-h-[300px]">
            <div>
                <div className="flex items-start gap-3 mb-4">
                    {icon}
                    <h3 className="text-xl font-semibold leading-tight pt-1 ">
                        {title}
                    </h3>
                </div>

                <p className="text-md text-gray-700 line-clamp-[8] md:line-clamp-[10]">
                    {text}
                </p>
            </div>
        </div>
    );
}