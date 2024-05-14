import { MobileLandingPage } from "./MobileLandingPage";
import { DekstopLandingPage } from "./DekstopLandingPage";
import { type CategoryListItemFragment, type ProductListItemFragment } from "@/gql/graphql";

interface Props {
	products?: readonly ProductListItemFragment[];
	featured?: readonly ProductListItemFragment[];
	categories: CategoryListItemFragment[];
	channel?: string;
}

export const LandingPage = ({ products, featured, categories, channel }: Props) => {
	return (
		<>
			<div className="md:hidden">
				<MobileLandingPage
					products={products}
					featured={featured}
					channel={channel}
					categories={categories}
				/>
			</div>
			<div className="hidden md:inline-block">
				<DekstopLandingPage
					products={products}
					categories={categories}
					featured={featured}
					channel={channel}
				/>
			</div>
		</>
	);
};
