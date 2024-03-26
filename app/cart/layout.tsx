'use client'

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    const { isUserLoggedIn } = useAuth()
    const router = useRouter()
    if (!isUserLoggedIn) {
        router.push('/login')
    }
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Layout;

