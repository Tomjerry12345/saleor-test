import { Footer } from "@/ui/components/Footer";
import { ReactNode } from "react";

export default function CartLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			{props.children}
			<Footer channel={props.params.channel} />
		</>
	);
}
