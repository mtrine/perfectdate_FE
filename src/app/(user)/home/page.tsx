import DatePlanningSteps from "@/components/DatePlanningSteps";
import LogoImage from "@/assets/logo-not-bg.png"
import CalendarImage from "@/assets/calendar.png"
export default function HomePage() {
    return (
        <div className="home-main">
            <div className="flex flex-row gap-4">
            <DatePlanningSteps 
               image={CalendarImage}
               tilte="Lên kế hoạch hẹn hò"
               description="Chọn địa điểm, thời gian và hoạt động và hoàn thành kế hoạch hẹn hò lãng mạn chỉ trong vài phút."
            />
            <DatePlanningSteps 
               image={CalendarImage}
               tilte="Lên kế hoạch hẹn hò"
               description="Chọn địa điểm, thời gian và hoạt động và hoàn thành kế hoạch hẹn hò lãng mạn chỉ trong vài phút."
            />
            <DatePlanningSteps 
               image={CalendarImage}
               tilte="Lên kế hoạch hẹn hò"
               description="Chọn địa điểm, thời gian và hoạt động và hoàn thành kế hoạch hẹn hò lãng mạn chỉ trong vài phút."
            />
            </div>


        </div>
    )
}
