import { FeaturedProductElement } from "./FeaturedProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const FeaturedProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<>
			<ul
				role="list"
				data-testid="FeaturedProductList"
				// className="grid flex-grow grid-cols-1 items-stretch gap-8 bg-neutral-700"
				className="gap-8 bg-neutral-700"
			>
				{products.map((product, index) => (
					<FeaturedProductElement
						key={product.id}
						product={product}
						priority={index < 2}
						loading={index < 3 ? "eager" : "lazy"}
					/>
				))}
			</ul>
		</>
	);
};
