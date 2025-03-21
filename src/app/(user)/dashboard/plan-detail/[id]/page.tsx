'use client';
import Button from '@/components/Button';
import ActivitiesInPlan from '@/components/user/ActivitesInPlan';
import PlanActivityItem from '@/components/user/PlanActivityItem';
import { useParams } from 'next/navigation';

export default function PlanDetail() {
  const { id } = useParams();
  const haveActivity = false;
  return (
    <div className="flex flex-col  pt-20 max-w-[70%] mx-auto min-h-screen  space-y-[2%]">
      <h2 className="text-darkRed text-center">Chi tiết kế hoạch</h2>
      <div className="flex justify-between text-darkRed border-b-2 border-darkRed">
        <h1>Lịch trình Vũng Tàu nè!</h1>
        <h1>24/02/2025</h1>
      </div>
      {haveActivity ? <ActivitiesInPlan /> : <p>Không có hoạt động nào</p>}
      <div className="flex justify-center space-x-4 items-center">
        <Button text="Chỉnh sửa" typeButton="secondary" />
        <Button text="Chia sẻ công khai" typeButton="secondary" color="cream" />
      </div>
    </div>
  );
}
