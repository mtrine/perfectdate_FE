
interface PlanItemProps {
    date: string;
    title: string;
    description: string;
    createBy: string;
}

export default function PlanItem({date, title, description,createBy}: PlanItemProps) {
    return(
        <div className="bg-white rounded-xl border-2 border-darkRed p-[5%] space-y-[5%] max-w-[500px] max-h-[400px]">
            <h2 className="text-darkRed">{date}</h2>
            <h3>{title}</h3>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                {description}
            </p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">Đăng bởi: <strong>{createBy}</strong></p>
        </div>
    )
}