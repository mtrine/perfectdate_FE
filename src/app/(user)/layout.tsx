import Footer from "@/components/user/footer";
import Header from "@/components/user/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-skin min-h-screen">
            <Header />
                {children}
            <Footer />
        </div>
    );
}

