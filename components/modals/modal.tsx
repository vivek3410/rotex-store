'use client'
import { Dialog } from "@headlessui/react"
import { useState } from "react"

interface ModalProps {
    title: string
    desc: string
    isOpen?: boolean
    onClose?: () => void
    children?: React.ReactNode
    setIsOpen: (value: boolean) => void
    setOpen: (value: boolean) => void
}


export const Modal = ({ title, desc, isOpen, onClose, children, setIsOpen, setOpen }: ModalProps) => {


    return (
        <>
            <Dialog open={isOpen} onClose={() => setOpen(false)}>
                <Dialog.Panel>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Description>{desc}</Dialog.Description>
                </Dialog.Panel>
                <div>{children}</div>
            </Dialog>
        </>
    )
}