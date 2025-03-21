interface PlanActivityItemProps {
    time: string;
    title: string;
    content: string;
    note: string;
}
export default function PlanActivityItem({time, title, content, note}: PlanActivityItemProps) {
    return(
        <div className="flex items-center gap-4">
            <div className="text-darkRed  min-w-[100px]">
                <h1>{time}</h1>
            </div>
            <div className="border-l-2 border-darkRed p-2 space-y-3 ">
                <h4>{title}</h4>
                <p> {content}</p>
               {note &&  <p><strong className="underline text-darkRed">Ghi chú :</strong> {note}</p>}
            </div>
        </div>
    )
}