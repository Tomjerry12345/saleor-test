import Image from "next/image";
import { Button } from "../../atoms/Button";
import { ProductList } from "../ProductList";
import { CategoryList } from "../CategoryList";
import { FeaturedProductList } from "../FeaturedProductList";
import { Footer } from "../Footer";
import { type CategoryListItemFragment, type ProductListItemFragment } from "@/gql/graphql";

interface Props {
	products?: readonly ProductListItemFragment[];
	featured?: readonly ProductListItemFragment[];
	categories: CategoryListItemFragment[];
	channel?: string;
}

export const DekstopLandingPage = ({ products, featured, categories, channel }: Props) => {
	const roomImage = [
		{
			image: "/images/featured-room-planner/room-planner-1.png",
			alt: "room-planner-1",
		},
		{
			image: "/images/featured-room-planner/room-planner-2.png",
			alt: "room-planner-2",
		},
		{
			image: "/images/featured-room-planner/room-planner-3.png",
			alt: "room-planner-3",
		},
	];
	return (
		<>
			<section className="justify-center">
				<div className="flex min-h-20 flex-row">
					<div className="flex w-[60%] flex-col">
						<div className="flex flex-row">
							<div className="flex h-screen flex-col items-start justify-center gap-4 text-wrap bg-white pl-8 pt-16">
								<h1 className="text-5xl">
									Elevate Your Space <br />
									<span className="text-3xl">With</span> Fine Furniture
								</h1>
								<h2 className="text-3xl">Explore our collections today</h2>
								<div className="ml-4">
									<Button label="Belanja" variant="primary" />
								</div>
							</div>
						</div>
						<div className="flex h-full min-h-screen w-full flex-grow flex-row items-stretch">
							<div className="h-full w-full p-8">{products && <ProductList products={products} />}</div>
						</div>
					</div>
					<div className="flex w-[50%] flex-grow flex-col ">
						{featured && <FeaturedProductList products={featured} />}
					</div>
				</div>
				<div>
					<div className="bg-neutral-200 p-8">
						<CategoryList categories={categories} />
					</div>
					<div className="flex flex-row">
						<div className="flex  w-[40%] min-w-[350px] flex-col justify-center gap-4 bg-neutral-700 p-8 text-white">
							<h3 className="text-2xl">
								Mau tahu perabot yang cocok untuk ruanganmu? <br /> Pakai ROOM PLANNER untuk menggambar
								ruanganmu
							</h3>
							<Button label="EKSPLOR" variant="tertiary" />
						</div>
						<div className="grid flex-1 grid-cols-1 sm:grid-cols-3">
							{roomImage.map((e, i) => (
								<Image
									key={i}
									src={e.image}
									alt={e.alt}
									width={200}
									height={300}
									className="h-full w-full object-cover object-center"
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<Footer channel={channel} />
		</>
	);
};
