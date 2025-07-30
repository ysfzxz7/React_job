interface propsType {
  rating: number;
  quote: string;
  name: string;
  company?: string | "Freelancer";
}

const TestemonialCard: React.FC<propsType> = ({
  rating,
  quote,
  name,
  company,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg  shadow-md hover:shadow-lg lg:w-[50%]  transition-shadow space-y-2">
      <h1>{rating}</h1>
      <p className="text-xs">{quote}</p>
      <h4 className="font-semibold">{name}</h4>
      <h5 className="text-xs">{company}</h5>
    </div>
  );
};

export default TestemonialCard;
