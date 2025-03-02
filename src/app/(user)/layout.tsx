
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/login')) {
        return children; // Bỏ qua layout chung cho /login
    }
    return (
        <div className="main-container">
            <Header />
            
            <main className="mt-0"> {/* Đảm bảo không có margin-top */}
                {children}
            </main>
            <Footer  />
        </div>
    );
}

