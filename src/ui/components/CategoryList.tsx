import { CategoryElement } from "./CategoryElement";
import { type CategoryListItemFragment } from "@/gql/graphql";

export const CategoryList = ({ categories }: { categories: readonly CategoryListItemFragment[] }) => {
	return (
		<>
			<h2 className="py-8 text-xl md:text-3xl">BELANJA DENGAN KATEGORI</h2>
			<ul role="list" data-testid="CategoryList" className="grid grid-cols-2 gap-8 md:grid-cols-4">
				<CategoryElement
					key={"all"}
					category={{
						id: "all",
						name: "Semua Produk",
						slug: "products",
						backgroundImage: { url: "/images/semua-produk.png", alt: "all" },
					}}
					priority={true}
					loading={"eager"}
				/>
				{categories.map((category, index) => (
					<CategoryElement
						key={category.id}
						category={category}
						priority={index < 2}
						loading={index < 3 ? "eager" : "lazy"}
					/>
				))}
			</ul>
		</>
	);
};
