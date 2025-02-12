import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-skin min-h-screen">
            <Header />
            <div className="pt-[80px]"> {/* Thêm padding-top để tránh bị đè */}
                {children}
            </div>
            <Footer />
        </div>
    );
}

