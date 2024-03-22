'use client'

import { IconType } from "react-icons"

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const Button = ({ label, disabled, outline, small, custom, icon: Icon, onClick }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-md
            hover:opacity-80
            transition
            w-full
            border-slate-700
            flex
            items-center
            justify-center
            gap-2
            ${outline ? 'bg-white text-slate-700' : 'bg-slate-700 text-white'}
            ${small ? 'text-sm py-1 px-2 font-light border-[1px]' : 'text-md font-semibold py-3 px-4 border-2'}
            ${custom ? custom : ''}
            `}>
            {Icon && <Icon size={24} />}
            {label}
        </button>
    )
}