"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Explore from "@/assets/images/explore.png";
import PostItem from "@/components/user/PostItem";
import BgImage from "@/assets/images/bg-explore.png";
import { useDispatch } from "react-redux";
import { getLatestPost, getPopularPost } from "@/services/redux/api_request/post_api";
import { useSelector } from "react-redux";
import Dropdown from "@/components/user/Dropdown";

export default function ExplorePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const[sortBy, setSortBy] = useState("Mới nhất");
  const ref = useRef(null);
  const dispatch = useDispatch();
  const postList = useSelector((state:any) => state.post.postList?.data || []);

  useEffect(() => {
    if(sortBy === "Mới nhất"){
      getPopularPost(dispatch)
    }
    else{
      getLatestPost(dispatch)
    }
  }, [sortBy]);

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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        <div className="flex justify-end gap-4">
        <Dropdown 
  title="Chọn thành phố"
  options={[
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu",
    "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", 
    "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đà Nẵng",
    "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", 
    "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", 
    "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hồ Chí Minh", 
    "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", 
    "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
    "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", 
    "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
    "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", 
    "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", 
    "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
  ]}
  onChange={setSortBy}
/>

          <Dropdown
            title="Sắp xếp theo"
            options={["Mới nhất", "Nổi bật nhất"]}
            onChange={(value) => setSortBy(value)} // ✅ Bắt sự kiện thay đổi
          />


        </div>
          {postList.map((post: any) => (
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
            saved_count={0}
            saved={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}