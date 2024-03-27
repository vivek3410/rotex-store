import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "./useAuth"

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    const ComponentWithAuth = (props: any) => {
        // const router = useRouter();
        // const { isUserLoggedIn } = useAuth();

        // // console.log(user);
        // useEffect(() => {
        //     if (!isUserLoggedIn) {
        //         router.push('/login');
        //     }
        // }, [isUserLoggedIn]);

        return <WrappedComponent {...props} />;
    };

    // Set displayName for the wrapped component
    // ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

    return ComponentWithAuth;


}

export default withAuth;