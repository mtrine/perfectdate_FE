"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Explore from "@/assets/images/explore.png";
import PostItem from "@/components/user/PostItem";

const ScrollFadeIn = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-semibold text-center">👋 Hello, React!</h2>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center ">
        <h2 className="text-darkRed">Cần gì phải đắn đo suy nghĩ về buổi hẹn khi có PerfectDate ở đây?</h2>
        <Image src={Explore} alt="Explore"  className="max-w-[300px] h-auto object-fit"/>
        <div>
            <PostItem />
            <PostItem />
            
        </div>
    </div>
    
  );
}
