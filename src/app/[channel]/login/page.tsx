import { Header } from "@/ui/components/Header";
import { LoginForm } from "@/ui/components/LoginForm";

export default function LoginPage(props: { params: { channel: string } }) {
	return (
		<>
			<Header channel={props.params.channel} page="login" />
			<section className="h-[100vh]">
				<LoginForm />
			</section>
		</>
	);
}
