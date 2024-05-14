import { shuffle } from "@/lib/utils";
import { executeGraphQL } from "@/lib/graphql";
import {
	CategoriesListDocument,
	FeaturedProductListDocument,
	ProductListByCollectionDocument,
	type ProductListItemFragment,
} from "@/gql/graphql";
import { LandingPage } from "@/ui/components/landing-page/LandingPage";

// import { LandingPage } from "@/ui/components/landing-page/LandingPage";

export const metadata = {
	title: "Orbit Furniture",
	description: "Elevate Your Space with Fine Furniture",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const newProducts = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			// slug: "new-products",
			slug: "summer-picks",
			channel: params.channel,
		},
		revalidate: 60,
	});
	const featuredProducts = await executeGraphQL(FeaturedProductListDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});
	const { categories } = await executeGraphQL(CategoriesListDocument, {
		variables: {
			first: 4,
		},
		revalidate: 60,
	});

	const products = newProducts?.collection?.products?.edges.map(({ node: product }) => product);
	const allFeaturedProducts = featuredProducts?.collection?.products?.edges.map(
		({ node: product }) => product,
	);

	const getRandomProducts = (products: readonly ProductListItemFragment[], count: number) => {
		const shuffledProducts = shuffle([...products]);
		return shuffledProducts.slice(0, count);
	};

	const featured = getRandomProducts(allFeaturedProducts || [], 2);

	const c = categories && categories.edges.map((e) => e.node);

	return (
		<>
			{c && <LandingPage featured={featured} categories={c} products={products} channel={params.channel} />}
		</>
	);
}
