import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ChannelSelect } from "./ChannelSelect";
import { Logo } from "./Logo";
import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Footer({ channel = "default-channel" }: { channel?: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});
	const channels = process.env.SALEOR_APP_TOKEN
		? await executeGraphQL(ChannelsListDocument, {
				withAuth: false, // disable cookie-based auth for this call
				headers: {
					// and use app token instead
					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
				},
			})
		: null;

	return (
		<footer className="border-neutral-700 bg-neutral-700">
			<div className="w-[100vw]">
				<div className="grid h-full grid-cols-4 gap-8">
					<div className="flex items-center justify-center overflow-hidden border-r border-gray-200 px-4 pb-12 pt-4">
						<Logo fill="text-white" variant="dekstop-footer" />
					</div>
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id} className="border-r border-gray-200 py-16">
								<h3 className="text-sm text-white">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:ml-4 [&>li]:text-white hover:[&>li]:text-neutral-300 lg:[&>li]:ml-8">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
														{child.collection.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/pages/${child.page.slug}`}>
														{child.page.title}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{channels?.channels && (
					<div className="mb-4 text-white">
						<label>
							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)}
			</div>
		</footer>
	);
}

export async function FooterMobile({ channel = "default-channel" }: { channel?: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});
	// const channels = process.env.SALEOR_APP_TOKEN
	// 	? await executeGraphQL(ChannelsListDocument, {
	// 			withAuth: false, // disable cookie-based auth for this call
	// 			headers: {
	// 				// and use app token instead
	// 				Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
	// 			},
	// 		})
	// 	: null;

	return (
		<footer className="border-neutral-700 bg-neutral-700">
			<div className="w-[100vw]">
				<div className="flex items-center justify-center pt-8">
					<Logo fill="text-white" variant="mobile-footer" />
				</div>
				<div className="flex justify-center gap-8">
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id} className="py-11">
								<h3 className="text-sm text-white">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:ml-4 [&>li]:text-white hover:[&>li]:text-neutral-300 lg:[&>li]:ml-8">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
														{child.collection.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<LinkWithChannel href={`/pages/${child.page.slug}`}>
														{child.page.title}
													</LinkWithChannel>
												</li>
											);
										}
										// if (child.url) {
										// 	return (
										// 		<li key={child.id} className="text-sm">
										// 			<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
										// 		</li>
										// 	);
										// }
										return null;
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{/* {channels?.channels && (
					<div className="mb-4 text-white">
						<label>
							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)} */}
			</div>
		</footer>
	);
}
