import { Header } from "@/ui/components/Header";
import { RegisterComponent } from "@/ui/components/register/RegisterComponent";

export default function DaftarPage(props: { params: { channel: string } }) {
	return (
		<>
			<Header channel={props.params.channel} page="login" />
			<section className="h-[100vh]">
				<RegisterComponent />
			</section>
		</>
	);
}
