interface FieldInInforContactProps {
    title: string;
    content: string;
}
export default function FieldInInforContact({title, content}: FieldInInforContactProps) {
    return (
        <div className="text-cream space-y-3 py-3">
            <h3 className="underline">{title}</h3>
            <p>{content}</p>
        </div>
    )
}