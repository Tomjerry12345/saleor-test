import { type ReactNode } from "react";
import { Footer, FooterMobile } from "@/ui/components/Footer";

export default function ProductLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			{props.children}
			<div className="md:hidden">
				<FooterMobile channel={props.params.channel} />
			</div>
			<div className="hidden md:inline-block">
				<Footer channel={props.params.channel} />
			</div>
		</>
	);
}
