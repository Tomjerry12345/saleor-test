"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/atoms/Button";

export const RegisterComponent = () => {
	const router = useRouter();
	const onClickEmail = () => {
		router.push("register/form");
	};
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-12 md:flex-row md:justify-around md:gap-0">
			<div className="flex flex-col justify-center gap-2">
				<h1 className="text-2xl md:text-3xl">Daftar Member</h1>
				<p className="md:text-md text-sm">
					Sudah Member ?{" "}
					<a href="login" className="underline">
						Login
					</a>
				</p>
			</div>
			<div className="flex w-80 flex-col justify-center gap-4">
				<Button label="Sign Up With Google" type="button" variant="primary" className="!w-auto rounded-lg" />
				<Button
					label="Sign Up With Facebook"
					type="button"
					variant="primary"
					className="!w-auto rounded-lg"
				/>
				<div className="flex w-auto items-center justify-center">
					<hr className="my-8 h-px w-64 border-0 bg-gray-700" />
					<span className=" bg-white px-3 font-medium text-gray-500  ">or</span>
					<hr className="my-8 h-px w-64 border-0 bg-gray-700" />
				</div>
				<Button
					label="Sign Up With Email"
					type="button"
					variant="primary"
					className="!w-auto rounded-lg"
					onClick={onClickEmail}
				/>
			</div>
			<div className="md:hidden">
				<Link className="font-semibold underline" href="/default-channel">
					Kembali ke toko
				</Link>
			</div>
		</div>
	);
};
