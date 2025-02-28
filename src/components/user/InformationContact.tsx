import FieldInInforContact from "./FieldInforContact";

export default function InformationContact() {
    return (
        <div className="bg-darkRed rounded-2xl "> {/* Thêm chiều cao tối thiểu hoặc cụ thể */}
            <div className="flex flex-col p-[5%] h-full justify-evenly"> 
                <FieldInInforContact title="Địa chỉ" content="Hiên không có" />
                <FieldInInforContact title="Email" content="perfectdate.contact@gmail.com" />
                <FieldInInforContact title="Số điện thoại" content="Hiện không có" />
                <FieldInInforContact title="Giờ hoạt động" content="Giờ hành chính" />
            </div>
        </div>
    );
}