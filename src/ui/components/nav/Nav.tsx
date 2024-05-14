import { Suspense } from "react";
import { UserMenuContainer } from "./components/UserMenu/UserMenuContainer";
import { CartNavItem } from "./components/CartNavItem";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Nav = ({ channel }: { channel: string }) => {
	return (
		<nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
			<div className="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
				<Suspense fallback={<div className="w-8" />}>
					<UserMenuContainer />
				</Suspense>
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem channel={channel} />
				</Suspense>
			</div>
			<Suspense>
				<MobileMenu>
					<div className="flex h-full flex-row justify-around">
						<div className="w-[50%]"></div>
						<NavLinks channel={channel} />
					</div>
				</MobileMenu>
			</Suspense>
		</nav>
	);
};
