import ResultsItemCard from "./page.client";
import { ResultsItemCardProps } from "./page.client";

export default function Index({
  uuid,
  name,
  description,
  price,
  imageUrl,
}: ResultsItemCardProps) {
  return (
    <div>
      <ResultsItemCard
        uuid={uuid}
        name={name}
        description={description}
        price={price}
        imageUrl={imageUrl}
      />
    </div>
  );
}
