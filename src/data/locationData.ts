// provinces.ts

// Định nghĩa interface cho tỉnh thành
interface Province {
  id: number;
  name: string;
}

// Mảng chứa danh sách các tỉnh thành
export const provinces: Province[] = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "Hà Giang" },
  { id: 3, name: "Cao Bằng" },
  { id: 4, name: "Bắc Kạn" },
  { id: 5, name: "Tuyên Quang" },
  { id: 6, name: "Lào Cai" },
  { id: 7, name: "Điện Biên" },
  { id: 8, name: "Lai Châu" },
  { id: 9, name: "Sơn La" },
  { id: 10, name: "Yên Bái" },
  { id: 11, name: "Hòa Bình" },
  { id: 12, name: "Thái Nguyên" },
  { id: 13, name: "Lạng Sơn" },
  { id: 14, name: "Quảng Ninh" },
  { id: 15, name: "Bắc Giang" },
  { id: 16, name: "Phú Thọ" },
  { id: 17, name: "Vĩnh Phúc" },
  { id: 18, name: "Bắc Ninh" },
  { id: 19, name: "Hải Dương" },
  { id: 20, name: "Hải Phòng" },
  { id: 21, name: "Hưng Yên" },
  { id: 22, name: "Thái Bình" },
  { id: 23, name: "Hà Nam" },
  { id: 24, name: "Nam Định" },
  { id: 25, name: "Ninh Bình" },
  { id: 26, name: "Thanh Hóa" },
  { id: 27, name: "Nghệ An" },
  { id: 28, name: "Hà Tĩnh" },
  { id: 29, name: "Quảng Bình" },
  { id: 30, name: "Quảng Trị" },
  { id: 31, name: "Thừa Thiên Huế" },
  { id: 32, name: "Đà Nẵng", },
  { id: 33, name: "Quảng Nam" },
  { id: 34, name: "Quảng Ngãi" },
  { id: 35, name: "Bình Định" },
  { id: 36, name: "Phú Yên" },
  { id: 37, name: "Khánh Hòa" },
  { id: 38, name: "Ninh Thuận" },
  { id: 39, name: "Bình Thuận" },
  { id: 40, name: "Kon Tum" },
  { id: 41, name: "Gia Lai" },
  { id: 42, name: "Đắk Lắk" },
  { id: 43, name: "Đắk Nông" },
  { id: 44, name: "Lâm Đồng" },
  { id: 45, name: "Bình Phước" },
  { id: 46, name: "Tây Ninh" },
  { id: 47, name: "Bình Dương" },
  { id: 48, name: "Đồng Nai" },
  { id: 49, name: "Bà Rịa - Vũng Tàu" },
  { id: 50, name: "Hồ Chí Minh" },
  { id: 51, name: "Long An" },
  { id: 52, name: "Tiền Giang" },
  { id: 53, name: "Bến Tre" },
  { id: 54, name: "Trà Vinh" },
  { id: 55, name: "Vĩnh Long" },
  { id: 56, name: "Đồng Tháp" },
  { id: 57, name: "An Giang" },
  { id: 58, name: "Kiên Giang" },
  { id: 59, name: "Cần Thơ" },
  { id: 60, name: "Hậu Giang" },
  { id: 61, name: "Sóc Trăng" },
  { id: 62, name: "Bạc Liêu" },
  { id: 63, name: "Cà Mau" }
];

// Hàm tiện ích để lấy tỉnh theo id (tùy chọn)
export const getProvinceById = (id: number): Province | undefined => {
  return provinces.find(province => province.id === id);
};

// Hàm tiện ích để lấy tỉnh theo tên (tùy chọn)
export const getProvinceByName = (name: string): Province | undefined => {
  return provinces.find(province =>
    province.name.toLowerCase() === name.toLowerCase()
  );
};