'use client'
import { useEffect, useState } from "react";


interface FloatingInputProps {
    label: string;
    custom?: string;
    name: string;
    value?: string;
}
export const FloatingInput = ({ label, custom, name, value }: FloatingInputProps) => {
    return (
        <div className='flex justify-center items-center relative'>
            <input
                type="text"
                className={` px-2 
                md:px-4 h-12 
                bg-white 
                w-full 
                text-sm md:text-md 
                border-2 border-black 
                outline-none 
                focus:border-teal-600 focus:text-black border-opacity-50
                transition
                duration-200 
                ${custom}`}
                name={name}
                value={value}
            />
            <span className={`text-md absolute left-0 top-3 mx-4 px-2 transition duration-200 input-text ${value ? 'text-teal-600 bg-white transform -translate-y-6 -translate-x-2 scale-75' : 'block '}`}>{label}</span>
        </div>
    )
}

export const FloatingTextArea = ({ label, custom, name, value }: FloatingInputProps) => {
    return (
        <div className='flex justify-center items-center relative'>
            <textarea className={` px-2 md:px-4 pt-4 h-24 bg-white w-full text-xl border-2 border-black outline-none focus:border-teal-600 focus:text-black border-opacity-50 transition duration-200 ${custom}`}
                name={name}
                value={value}
            />
            <span className='text-md absolute left-0 top-3 mx-4 px-2 transition duration-200 input-text'>{label}</span>
        </div>
    )
}