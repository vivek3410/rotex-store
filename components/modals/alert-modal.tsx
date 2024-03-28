'use client'
import { Dialog } from "@headlessui/react"
import { Modal } from "./modal"
import { Button } from "../button"
import { useEffect, useState } from "react"

interface AlertModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    loading: boolean
    setIsOpen: (value: boolean) => void
    setOpen: (value: boolean) => void

}

export const AlertModal = ({ isOpen, onClose, onConfirm, loading, setIsOpen, setOpen }: AlertModalProps) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <>
            <Modal title="Are you sure" desc="This action cannot be undone" isOpen={isOpen} setIsOpen={setIsOpen} setOpen={() => setOpen(false)}>
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button label="Cancel" onClick={onClose} disabled={loading} />
                    <Button label="Cancel" onClick={onConfirm} disabled={loading} />
                </div>
            </Modal>
        </>
    )
}