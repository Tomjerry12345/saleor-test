import Image from "next/image";
import { Button } from "../../atoms/Button";
import { ProductList } from "../ProductList";
import { FooterMobile } from "../Footer";
import { CategoryList } from "../CategoryList";
import { type CategoryListItemFragment, type ProductListItemFragment } from "@/gql/graphql";

interface Props {
	products?: readonly ProductListItemFragment[];
	featured?: readonly ProductListItemFragment[];
	categories: CategoryListItemFragment[];
	channel?: string;
}

export const MobileLandingPage = ({ products, channel, categories }: Props) => {
	return (
		<>
			<section className="justify-center">
				<div className=" flex h-[100vh] flex-col items-start justify-center gap-4 pl-8 pt-16 before:absolute before:bg-[rgba(0,0,0,0.25)]">
					<Image
						src="/images/bg-image.jpg"
						alt="dfd"
						width={500}
						height={500}
						className="absolute inset-0 h-full w-full object-cover opacity-20"
					/>
					<h1 className="text-3xl">
						Elevate Your Space <br />
						<span className="text-3xl">With</span> Fine Furniture
					</h1>
					<h2 className="text-xl">Explore our collections today</h2>
					<div className="z-10 ml-4">
						<Button label="Belanja" variant="primary" />
					</div>
				</div>
				<div className="flex h-full min-h-screen w-full flex-grow flex-row items-stretch">
					<div className="h-full w-full p-8">{products && <ProductList products={products} />}</div>
				</div>
				<div className="bg-neutral-200 p-8">
					<CategoryList categories={categories} />
				</div>
			</section>
			<FooterMobile channel={channel} />
		</>
	);
};
