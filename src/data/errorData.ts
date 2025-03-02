
// Định nghĩa interface cho mã lỗi
interface ErrorCode {
  code: number;
  message: string;
}

// Mảng chứa danh sách các mã lỗi
export const errorCodes: ErrorCode[] = [
  { code: 1400, message: "Người dùng đã tồn tại"  },
  { code: 1401, message: "Không được ủy quyền"  },
  { code: 1402, message: "Lỗi khóa công khai" },
  { code: 1403, message: "Có lỗi xảy ra! Vui lòng đăng nhập lại" },
  { code: 1404, message: "Không tìm thấy"  },
  { code: 1405, message: "Người dùng chưa đăng ký" },
  { code: 1406, message: "Token làm mới đã hết hạn"  },
  { code: 1407, message: "Token làm mới không hợp lệ" },
  { code: 1408, message: "Token không hợp lệ"  },
  { code: 1409, message: "Không có quyền truy cập"  },
  { code: 1410, message: "Mật khẩu không được để trống"  },
  { code: 1411, message: "Quyền truy cập đã tồn tại"  },
  { code: 1412, message: "Bạn không phải là người tham gia"  },
  { code: 1414, message: "Tạo kế hoạch thất bại"  },
  { code: 1416, message: "Đã là đối tác"  },
  { code: 1417, message: "Không tìm thấy đối tác"  }
];

// Hàm tiện ích để lấy error code theo code
export const getErrorByCode = (code: number): ErrorCode | undefined => {
  return errorCodes.find(error => error.code === code);
};


// Hàm chuyển đổi sang JSON (tùy chọn)
export const toJSON = (error: ErrorCode) => {
  return {
    code: error.code,
    message: error.message,
  };
};