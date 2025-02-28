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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && scrollY <= 100) {
        setScrollY(currentScrollY);
      } else if (currentScrollY <= 100 && scrollY > 100) {
        setScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]); // Luôn giữ [scrollY] từ đầu

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
  }, []); // Không phụ thuộc gì ở đây

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-all duration-500 w-full"
      style={{
        backgroundImage: scrollY > 100 ? `url(${BgImage.src})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: scrollY > 100 ? "#FFFDEF" : "transparent",
      }}
    >
      <h2 className="text-darkRed text-center text-xl md:text-2xl lg:text-3xl font-semibold px-4">
        Cần gì phải đắn đo suy nghĩ về buổi hẹn khi có PerfectDate ở đây?
      </h2>

      <Image
        src={Explore}
        alt="Explore"
        className="transition-all duration-500 mt-4"
        style={{
          width: scrollY > 100 ? "120px" : "250px",
          height: "auto",
        }}
      />

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