import Footer from "@/components/user/footer";
import Header from "@/components/user/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="main-container">
            <Header />
            
            <div className="pt-[70px] sm:pt-[110px] md:pt-[120px] lg:pt-[130px]"> {/* Thêm padding-top responsive */}
                {children}
            </div>
            <Footer />
        </div>
    );
}

