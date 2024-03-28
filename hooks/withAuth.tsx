import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "./useAuth"

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter()
        const { isUserLoggedIn } = useAuth();
        if (!isUserLoggedIn) {
            return router.push('/login')
        }



        return <WrappedComponent {...props} />;
    };

    // Set displayName for the wrapped component
    // ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

    return ComponentWithAuth;


}

export default withAuth;