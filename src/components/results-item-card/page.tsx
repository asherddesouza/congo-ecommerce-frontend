import ResultsItemCard from "./page.client";
import { ResultsItemCardProps } from "./page.client";

export default function Index({
  uuid,
  name,
  description,
  price,
  quantity,
  category,
  imageUrl,
}: ResultsItemCardProps) {
  return (
    <div>
      <ResultsItemCard
        uuid={uuid}
        name={name}
        description={description}
        price={price}
        quantity={quantity}
        category={category}
        imageUrl={imageUrl}
      />
    </div>
  );
}
