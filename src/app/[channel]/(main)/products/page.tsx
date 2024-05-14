import { notFound } from "next/navigation";
import { ConfigProvider, Slider, type SliderSingleProps } from "antd";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";
import { ProductsPerPage } from "@/app/config";
// import { ProductSidebar } from "@/ui/components/ProductSidebar";

export const metadata = {
	title: "Products · Orbit Furniture",
	description: "All products in Orbit Furniture",
};

export default async function Page({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams: {
		cursor: string | string[] | undefined;
	};
}) {
	const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : null;

	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor,
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!products) {
		notFound();
	}

	const newSearchParams = new URLSearchParams({
		...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
	});

	const marks: SliderSingleProps["marks"] = {
		0: {
			style: {
				color: "gray",
			},
			label: (
				<strong>
					Rp. <br /> 200.000
				</strong>
			),
		},
		100: {
			style: {
				color: "gray",
			},
			label: (
				<strong>
					Rp. <br /> 5.000.000
				</strong>
			),
		},
	};

	return (
		<section className="mx-auto max-w-7xl p-8 py-20">
			<h2 className="text-lg md:text-3xl">Semua Produk</h2>
			<div className="mt-8 flex flex-col gap-8 md:flex-row md:gap-4">
				<div className="flex-[0.2] px-4">
					<div className="flex flex-col gap-4">
						<h6 className="mt-2">Cari berdasar</h6>
						<hr />
						<h6 className="">Semua produk</h6>
						<h6 className="">Rumah tangga</h6>
						<h6 className="">Komersial</h6>
						<h6 className="">Accesories</h6>
					</div>
					<div className="mt-20 flex flex-[0.2] flex-col gap-4">
						<h6 className="mt-2">Filter berdasar</h6>
						<hr />
						<h6 className="">Harga</h6>
						<ConfigProvider
							theme={{
								components: {
									Slider: {
										colorPrimaryBorderHover: "black",
										dotActiveBorderColor: "black",
										handleActiveColor: "black",
										handleColor: "black",
										trackBg: "black",
										trackHoverBg: "black",

										dotSize: 4,
										handleSize: 8,
										fontSize: 12,
									},
								},
							}}
						>
							<Slider range marks={marks} />
						</ConfigProvider>
					</div>
				</div>

				<div className="flex-1 items-start">
					<div className="mb-4">
						<input
							placeholder="Search..."
							type="text"
							name="name"
							className=" rounded border border-gray-300 px-4 py-1 text-base outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
						/>
					</div>
					<div className="md:hidden">
						<ProductList products={products.edges.map((e) => e.node)} showTitle={false} cols={2} />
					</div>
					<div className="hidden md:inline-block">
						<ProductList products={products.edges.map((e) => e.node)} showTitle={false} cols={4} />
					</div>
					<Pagination
						pageInfo={{
							...products.pageInfo,
							basePathname: `/products`,
							urlSearchParams: newSearchParams,
						}}
					/>
				</div>
			</div>
		</section>
	);
}
