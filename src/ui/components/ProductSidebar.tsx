import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type CategoryListItemFragment } from "@/gql/graphql";

export const ProductSidebar = ({
	categories,
}: {
	categories: readonly CategoryListItemFragment[] | undefined;
}) => {
	return (
		<div className="flex w-[70%] flex-col gap-4">
			<h3 className="text-sm">Cari berdasar</h3>
			<hr className="border border-solid border-neutral-700" />
			<ul role="list" data-testid="ProductSidebar" className="grid grid-cols-1 text-xs">
				<li className="py-2">
					<LinkWithChannel href={`/categories`} key={"all"}>
						Semua produk
					</LinkWithChannel>
				</li>
				{categories
					? categories.map((category) => (
							<li key={category.id} className="py-2">
								<LinkWithChannel href={`/categories/${category.slug}`} key={category.id}>
									{category.name}
								</LinkWithChannel>
							</li>
						))
					: null}
			</ul>

			<h3 className="text-sm">Filter berdasar</h3>
			<hr className="border border-solid border-neutral-700" />
			<ul role="list" data-testid="ProductSidebar" className="grid grid-cols-1 text-xs">
				<li className="py-2">Harga</li>
			</ul>
		</div>
	);
};
