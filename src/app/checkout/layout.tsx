import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";
import { Footer } from "@/ui/components/Footer";

export const metadata = {
	title: "Orbit Furniture",
	description: "Elevate Your Space with Fine Furniture",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
			<Footer />
		</main>
	);
}
