"use client";

import { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { Button } from "@/ui/atoms/Button";
import "react-toastify/dist/ReactToastify.css";

export function RegisterForm() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};

	return (
		<>
			<div className="flex h-full w-full flex-col items-center justify-center gap-12 ">
				<div className="flex flex-col justify-center gap-2">
					<h1 className="text-2xl md:text-3xl">Daftar Member</h1>
				</div>
				<form className="flex flex-col  justify-center gap-4">
					<div className="mb-2 text-center">
						<label className="" htmlFor="name">
							Nama
						</label>
						<input
							type="text"
							name="name"
							className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
						/>
					</div>
					<div className="mb-2 text-center">
						<label className="" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							name="email"
							className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
						/>
					</div>
					<div className="mb-2 text-center">
						<label className="" htmlFor="password">
							Kata Sandi
						</label>

						<div className="container relative mx-auto  text-center">
							<input
								placeholder="Password"
								type={isPasswordVisible ? "text" : "password"}
								name="password"
								autoCapitalize="off"
								autoComplete="off"
								className="mt-2 w-full rounded border border-gray-300 px-4 py-2 text-base outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0  flex items-center  px-4 text-gray-600"
								onClick={togglePasswordVisibility}
							>
								{isPasswordVisible ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-5 w-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-5 w-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
										/>
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								)}
							</button>
						</div>
					</div>

					<div className="flex justify-center">
						<Button label="Daftar" type="submit" variant="primary" />
					</div>
				</form>
				<div>
					<Link className="font-semibold underline" href="/default-channel">
						Kembali ke toko
					</Link>
				</div>
			</div>
			<ToastContainer />
		</>
	);
}
