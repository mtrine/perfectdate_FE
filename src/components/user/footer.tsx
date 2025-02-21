
import "@/styles/footer.css";
export default function Footer() {
    return (
        <footer className="bg-gray py-6">
          <div className="container mx-auto px-4 sm:px-10"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10">
              <div><h1 className=" font-playfair-bold text-cream">PerfectDate</h1></div>
            <ul>
                <li>Hỗ trợ khách hàng: support@perfectdate.com</li>
                <li>Số điện thoại: 0123456789</li>
            </ul>
            </div>
        </footer>
    );
}
