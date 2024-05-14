"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export function NavLink({ href, children }: { href: string; children: JSX.Element | string }) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<li className="inline-flex">
			<LinkWithChannel
				href={href}
				className={clsx(
					isActive ? "border-neutral-900 text-neutral-300" : "border-transparent text-white",
					"inline-flex items-center border-b-2 pt-px text-xl hover:text-neutral-400",
				)}
			>
				{children}
			</LinkWithChannel>
		</li>
	);
}
