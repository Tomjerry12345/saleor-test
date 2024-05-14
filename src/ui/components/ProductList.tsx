import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({
	products,
	showTitle = true,
	cols = 2,
}: {
	products: readonly ProductListItemFragment[];
	showTitle?: boolean;
	cols?: number;
}) => {
	return (
		<>
			{showTitle ? <h2 className="py-8 text-xl md:text-3xl">KOLEKSI TERBARU</h2> : null}

			<ul role="list" data-testid="ProductList" className={`grid grid-cols-${cols} gap-8`}>
				{products.map((product, index) => (
					<ProductElement
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
