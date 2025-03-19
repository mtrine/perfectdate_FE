import PlanItem from "./PlanItem";

interface PlanItemProps {
    data: object[];
}
export default function HavePlan({data}: PlanItemProps) {
    
    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap">
           {data.map((item: any, index: number) => (
                <PlanItem 
                key={item._id}
                date={item.createdAt}
                title={item.title}
                description={item.description}
                createBy={item.createdBy.user_name}
                />
            )
           )}
            
        </div>
    )
}