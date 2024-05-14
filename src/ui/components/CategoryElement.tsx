import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { CategoryListItemFragment } from "@/gql/graphql";

export function CategoryElement({
	category,
	loading,
	priority,
}: { category: CategoryListItemFragment } & {
	loading: "eager" | "lazy";
	priority?: boolean;
	href?: string;
}) {
	return (
		<li data-testid="CategoryElement">
			<LinkWithChannel
				href={category.id === "all" ? "/products" : `/categories/${category.slug}`}
				key={category.id}
			>
				<div>
					{category?.backgroundImage?.url && (
						<ProductImageWrapper
							loading={loading}
							src={category.backgroundImage.url}
							alt={category.backgroundImage.alt ?? ""}
							width={250}
							height={250}
							sizes={"250px"}
							priority={priority}
						/>
					)}
					<div className="mt-2 flex flex-col justify-between">
						<div>
							<h3 className="mt-1 text-center text-lg text-neutral-900">{category.name.toUpperCase()}</h3>
						</div>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}
