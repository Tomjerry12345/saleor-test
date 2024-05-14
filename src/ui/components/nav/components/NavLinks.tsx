import Link from "next/link";
import { NavLink } from "./NavLink";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";

export const NavLinks = async ({ channel }: { channel: string }) => {
	const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "navbar", channel },
		revalidate: 60 * 60 * 24,
	});

	return (
		<div className="h-full min-w-[50%] bg-neutral-700 bg-opacity-90 py-4 px-12 flex flex-col justify-center text-white gap-4">
			<NavLink href="/products">Semua Produk</NavLink>
			<NavLink href="/cart">Kantong Belanja</NavLink>
			{navLinks.menu?.items?.map((item) => {
				if (item.category) {
					return (
						<NavLink key={item.id} href={`/categories/${item.category.slug}`}>
							{item.category.name}
						</NavLink>
					);
				}
				if (item.collection) {
					return (
						<NavLink key={item.id} href={`/collections/${item.collection.slug}`}>
							{item.collection.name}
						</NavLink>
					);
				}
				if (item.page) {
					return (
						<NavLink key={item.id} href={`/pages/${item.page.slug}`}>
							{item.page.title}
						</NavLink>
					);
				}
				if (item.url) {
					return (
						<Link key={item.id} href={item.url}>
							{item.name}
						</Link>
					);
				}
				if (item.name) {
					return (
					<p key={item.id} className={"border-transparent text-white inline-flex items-center border-b-2 pt-px text-xl"}>
						{item.name}
					</p>
					);
				}
				return null;
			})}
		</div>
	);
};
