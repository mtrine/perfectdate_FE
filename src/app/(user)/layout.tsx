
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
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

