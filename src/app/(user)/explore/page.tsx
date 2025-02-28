"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Explore from "@/assets/images/explore.png";
import PostItem from "@/components/user/PostItem";
import BgImage from "@/assets/images/bg-explore.png";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Lắng nghe sự kiện cuộn trang để thay đổi trạng thái cuộn
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hiệu ứng xuất hiện cho PostItem khi scroll đến
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background chỉ xuất hiện khi cuộn xuống */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: scrollY > 100 ? `url(${BgImage.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: scrollY > 100 ? 1 : 0, // Background fade-in khi cuộn xuống
          position: "fixed",
          zIndex: -1,
          transition: "opacity 0.7s ease-in-out",
        }}
      ></div>

      {/* Tiêu đề */}
      <h2 className="text-darkRed text-center px-4 transition-all duration-500">
        Cần gì phải đắn đo suy nghĩ về buổi hẹn khi có PerfectDate ở đây?
      </h2>

      {/* Hình ảnh sẽ nhỏ dần khi cuộn xuống */}
      <Image
        src={Explore}
        alt="Explore"
        className="transition-all duration-500 mt-4"
        style={{
          width: scrollY > 100 ? "120px" : "250px",
          height: "auto",
        }}
      />

      {/* Danh sách bài viết */}
      <div className="flex flex-col lg:w-[40%] md:w-[50%] sm:w-[80%] h-auto mt-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <PostItem />
          <PostItem />
        </div>
      </div>
    </div>
  );
}
