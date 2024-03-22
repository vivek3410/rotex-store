import Footer from "../Footer";
import Header from "../Header";


interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

