interface StepDescriptionProps {
  title: string;
  description: string;
}
export default function StepDescription({
  title,
  description,
}: StepDescriptionProps) {
  return (
    <div>
      <h4 >{title}</h4>
      <p>{description}</p>
    </div>
  );
}
