'use client';
import Button from '@/components/Button';
import PlanActivityItem from '@/components/user/PlanActivityItem';
import { useParams } from 'next/navigation';

export default function PlanDetail() {
  const { id } = useParams();
  return (
    <div className="flex flex-col  pt-20 max-w-[70%] mx-auto min-h-screen  space-y-[2%]">
      <h2 className="text-darkRed text-center">Chi tiết kế hoạch</h2>
      <div className="flex justify-between text-darkRed border-b-2 border-darkRed">
        <h1>Lịch trình Vũng Tàu nè!</h1>
        <h1>24/02/2025</h1>
      </div>
      <div className="space-y-[5%]">
        <PlanActivityItem
          time="04:00 SA"
          content="TP.HCM - Vũng Tàu"
          title="Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng"
          note=""
        />

        <PlanActivityItem
          time="04:00 SA"
          content="TP.HCM - Vũng Tàu"
          title="Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng"
          note=""
        />
        <PlanActivityItem
          time="04:00 SA"
          content="TP.HCM - Vũng Tàu"
          title="Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng"
          note=""
        />
        <PlanActivityItem
          time="04:00 SA"
          content="TP.HCM - Vũng Tàu"
          title="Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng"
          note=""
        />
        <PlanActivityItem
          time="04:00 SA"
          content="TP.HCM - Vũng Tàu"
          title="Trên đường ghé ăn sáng và nghỉ ngơi ngắm cảnh mất tầm 3 tiếng"
          note=""
        />
      </div>
      <div>
        <p>
          <strong className="underline text-darkRed">Mô tả :</strong> Mô tả nè
        </p>
      </div>
      <div className='flex justify-center space-x-4 items-center'>
        <Button
            text='Chỉnh sửa'
            typeButton='secondary'
        />
        <Button
            text='Chia sẻ công khai'
            typeButton='secondary'
            color='cream'
        />
      </div>
    </div>
  );
}
