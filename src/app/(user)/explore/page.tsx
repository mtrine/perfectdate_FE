"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Explore from "@/assets/images/explore.png";
import PostItem from "@/components/user/PostItem";
import BgImage from "@/assets/images/bg-explore.png";
import { useDispatch } from "react-redux";
import { getLatestPost } from "@/services/redux/api_request/post_api";
import LoadingScreen from "@/components/LoadingScreen";
import { useAppSelector } from "@/services/redux/hooks";
import Empty from "@/assets/images/empty.png";
import Button from "@/components/Button";

export default function ExplorePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const[sortBy, setSortBy] = useState("Mới nhất");
  const ref = useRef(null);
  const dispatch = useDispatch();
  const postList =useAppSelector((state)=>state.post.postList.data );
  const loading =useAppSelector((state)=>state.post.postList.loading)

  useEffect(() => {
    getLatestPost(dispatch);
  }, [dispatch]);

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
    if (loading) return; // Ngăn không cho chạy khi loading còn true
  
    if (!ref.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(ref.current);
  
    return () => observer.disconnect();
  }, [loading]); // Chạy lại khi loading thay đổi
  
  
  

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden pt-20" >
      {/* Background chỉ xuất hiện khi cuộn xuống */}
      <div
        className="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-700 ease-in-out"
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

      <div className="flex flex-col lg:w-[50%] md:w-[60%] sm:w-[80%] h-auto mt-8 items-center justify-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
  >

          {postList && postList.length > 0 ? (postList.map((post: any) => (
            <PostItem 
            key={post._id} 
            id={post._id}
            user_ava={post.createdBy.user_avatar}
            user_name={post.createdBy.user_name}
            location={post.city}
            date={post.createdAt}
            title={post.title}
            description={post.content}
            image_url={post.image}
            saved_count={post.likedBy.length}
            saved={false}
            />
          ))) :(
            <div className="flex flex-col gap-4 mt-[10%] w-full bg-cream rounded-[2%] border border-darkRed border-[2px] my-[10%] px-8 py-4">
              <Image src={Empty} alt="Empty" className="w-[400px] h-[400px] mx-auto"/>
              <h2 className="text-darkRed text-center">Không có bài viết nào</h2>
              <Button
                text="Tạo bài viết đầu tiên"
                onClick={()=>console.log("Tạo bài viết đầu tiên")}
                typeButton="secondary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}