'use client';
import Button from '@/components/Button';
import Input from '@/components/user/Input';
import StepDescription from '@/components/user/StepDescription';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
type FormData = {
  title: string;
  description: string;
  startDate: string;
};
export default function CreatePlan() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      startDate: '',
    },
  });

  const onSubmit = async (data: FormData) => {};
  return (
    <div className="flex flex-col justify-center pt-20 max-w-[70%] mx-auto min-h-screen  space-y-[2%]">
      <div>
        <h2>Tạo kế hoạch hẹn hò</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-12">
          <div className="col-span-2">
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-[8%]"
            >
              <div className="flex items-center ">
                <h3 className="min-w-[100px]">Tiêu đề</h3>
                <Input
                  type="text"
                  placeholder="Tiêu đề"
                  className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                  {...register('title', { required: '' })}
                />
              </div>
              <div className="flex items-center ">
                <h3 className="min-w-[100px]">Mô tả</h3>
                <Input
                  type="text"
                  placeholder="Mô tả"
                  className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                  {...register('title', { required: '' })}
                />
              </div>
              <div className="flex items-center ">
                <h3 className="min-w-[100px]">Ngày bắt đầu</h3>
                <Input
                  type="date"
                  placeholder="Ngày bắt đầu"
                  className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                  {...register('title', { required: '' })}
                />
              </div>
              {/* Button */}
              <div className="flex justify-center gap-6  ">
                <Button
                  text="Hủy"
                  onClick={() => {
                    router.back();
                  }}
                  typeButton="secondary"
                />
                <Button
                  text="Tiếp tục"
                  onClick={() => {
                    router.back();
                  }}
                  typeButton="secondary"
                  color="cream"
                />
              </div>
            </form>
            <div></div>
          </div>
          <div className="bg-darkRed px-[8%] py-[4%] rounded-xl text-white space-y-[5%] col-span-3">
            <h4 className="underline">
              Để PerfectDate bật mí cách tạo ra 1 kế hoạch hẹn hò nhé!
            </h4>
            <div className="space-y-[5%] ">
              <StepDescription
                title="Bước 1 : Nhập thông tin chung"
                description='Điền tiêu đề, mô tả, ngày diễn ra và chọn chế độ hiển thị(  Riêng tư hay công khai ). Nhấn "Tiếp theo".'
              />
              <StepDescription
                title="Bước 2: Thêm hoạt động chi tiết"
                description='Nhập từng hoạt động gồm tên, địa điểm, giờ bắt đầu và ghi chú (nếu cần). Bạn có thể thêm nhiều hoạt động khác nhau.'
              />
              <StepDescription
                title="Bước 3: Kiểm tra & Hoàn tất"
                description='Xem lại thông tin, nhấn "Tạo Kế Hoạch" và sẵn sàng tận hưởng khoảnh khắc đáng nhớ!'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
