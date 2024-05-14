import NextImage from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

import { Button } from "../atoms/Button";
import type { ProductListItemFragment } from "@/gql/graphql";

export function FeaturedProductElement({
	product,
	loading,
	priority,
}: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
	return (
		<li data-testid="FeaturedProductElement" className="">
			<div className="flex h-full flex-col">
				{product?.thumbnail?.url && (
					<div className="h-[calc(100vh-144px)] overflow-clip bg-neutral-200">
						<NextImage
							loading={loading}
							src={product.thumbnail.url.includes("localhost") ? "/images/white.png" : product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={240}
							height={320}
							sizes={"512px"}
							priority={priority}
							className="h-full w-full object-cover object-center"
						/>
					</div>
				)}
				<div className="flex max-h-min flex-grow flex-col justify-center gap-4 p-6">
					<div>
						<h2 className="mt-1 text-2xl text-white">{product.name}</h2>
					</div>
					<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
						<Button className="w-36" label="EKSPLOR" variant="tertiary" />
					</LinkWithChannel>
				</div>
			</div>
		</li>
	);
}
