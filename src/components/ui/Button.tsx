import React from 'react';
import clsx from 'clsx';

type ButtonOrLinkProps = {
    href?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    className?: string;
    type?: "button" | "submit" | "reset";
    target?: string;
    rel?: string;
    title?: string;
    ariaLabel?: string;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export default function ButtonOrLink({
                                         href,
                                         children,
                                         onClick,
                                         className,
                                         type = "button",
                                         target,
                                         rel,
                                         title,
                                         ariaLabel,
                                         ...rest
                                     }: ButtonOrLinkProps) {
    const baseClasses =
        "bg-[var(--primary)] hover:bg-[var(--primary-hover)] cursor-pointer transition duration-300 text-white font-medium py-2 px-4 rounded-lg shadow-md";

    const computedRel =
        href && target === "_blank" && !rel ? "noopener noreferrer" : rel;

    const computedAriaLabel =
        !ariaLabel && typeof children !== "string"
            ? href
                ? "Link"
                : "Button"
            : ariaLabel;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={computedRel}
                onClick={onClick}
                title={title}
                aria-label={computedAriaLabel}
                className={clsx(baseClasses, className)}
                {...rest}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            title={title}
            aria-label={computedAriaLabel}
            className={clsx(baseClasses, className)}
            {...rest}
        >
            {children}
        </button>
    );
}
