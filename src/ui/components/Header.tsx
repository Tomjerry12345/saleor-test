import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export function Header({ channel, page }: { channel: string; page: "login" | "main" }) {
	return (
		<header className="absolute top-0 z-20 w-full bg-white md:bg-transparent">
			<div className="px-3 sm:px-8">
				<div className="flex h-16 justify-between gap-4 md:gap-8">
					<Logo fill="text-neutral-500" variant="header" />
					{page === "main" ? <Nav channel={channel} /> : null}
				</div>
			</div>
		</header>
	);
}
