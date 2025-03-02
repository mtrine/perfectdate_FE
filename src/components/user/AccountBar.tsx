import Link from "next/link";

export default function AccountBar() {
    const  isLogin= false;
    
    if(isLogin){
            return(
            <div className="account-dropdown absolute right-0 mt-2 w-36 sm:w-52 bg-gray text-cream rounded-2xl shadow-lg z-20 before:content-[''] before:absolute before:-top-2 before:right-4 before:w-0 before:h-0 before:border-[10px] before:border-transparent before:border-b-gray before:border-t-0">
                <ul className="py-1">
                    <li className="flex justify-center items-center px-4 py-2 hover:font-playfair-bold cursor-pointer">
                        <Link href="/account">Tài khoản của tôi</Link>
                    </li>
                    <li className="flex justify-center items-center px-4 py-2 hover:font-playfair-bold cursor-pointer">
                        <Link href="/dashboard">Kế hoạch của tôi</Link>
                    </li>
                    <li className="flex justify-center items-center px-4 py-2 hover:font-playfair-bold cursor-pointer">
                        <Link href="/logout">Đăng xuất</Link>
                    </li>
                </ul>
            </div>
            )
    }
    return(
        <div className="account-dropdown absolute right-0 mt-2 w-36 sm:w-52 bg-gray text-cream rounded-2xl shadow-lg z-20 before:content-[''] before:absolute before:-top-2 before:right-4 before:w-0 before:h-0 before:border-[10px] before:border-transparent before:border-b-gray before:border-t-0">
            <ul className="py-0">
                <li className="flex justify-center items-center hover:font-playfair-bold cursor-pointer">
                    <Link href="/login">Đăng nhập ngay</Link>
                </li>
            </ul>
        </div>
        )
        
}