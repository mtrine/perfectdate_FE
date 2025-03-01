"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Explore from "@/assets/images/explore.png";
import PostItem from "@/components/user/PostItem";
import BgImage from "@/assets/images/bg-explore.png";
import { useDispatch } from "react-redux";
import { getLatestPost } from "@/services/redux/api_request/post_api";
import { useSelector } from "react-redux";

export default function ExplorePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const postList = useSelector((state:any) => state.post.postList?.data || []);

  useEffect(() => {
    getLatestPost(dispatch);

  }, []);
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
  }, [scrollY]);

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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"> {/* Thêm pt-20 */}
      {/* Background chỉ xuất hiện khi cuộn xuống */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: scrollY > 100 ? `url(${BgImage.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: scrollY > 100 ? 1 : 0,
          position: "fixed",
          zIndex: -1,
          transition: "opacity 0.7s ease-in-out",
        }}
      ></div>

      {/* Tiêu đề */}
      <h2 className="text-darkRed text-center px-4 transition-all duration-500 mt-[5%]">
        Cần gì phải đắn đo suy nghĩ về buổi hẹn khi có PerfectDate ở đây?
      </h2>

      <Image
        src={Explore}
        alt="Explore"
        className="transition-all duration-500 mt-4"
        style={{
          width: scrollY > 100 ? "120px" : "500px",
          height: "auto",
        }}
      />

      <div className="flex flex-col lg:w-[50%] md:w-[50%] sm:w-[80%] h-auto mt-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {postList.map((post: any) => (
            <PostItem 
            id={post._id}
            user_ava={post.createdBy}
            user_name=""
            location=""
            date=""
            title=""
            description=""
            image_url=""
            saved_count={0}
            saved={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}