import { type FC, type ReactNode, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	ariaLabel?: string;
	ariaDisabled?: boolean;
	loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
	label,
	className,
	variant = "primary",
	disabled = false,
	children: _children,
	type = "button",
	ariaLabel,
	ariaDisabled,
	loading = false,
	...rest
}) => {
	const classes = clsx(
		"inline-flex h-10  items-center justify-center whitespace-nowrap rounded-3xl px-8  border-2 active:outline-none",
		{
			"shadow-2xl border-neutral-600 bg-white text-neutral-600 hover:bg-neutral-600 hover:text-white disabled:bg-neutral-800 px-4 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-neutral-600 border-[1px]":
				variant === "primary",
			// "border-neutral-600 bg-neutral-600 bg-transparent text-white hover:border-neutral-600 hover:bg-transparent hover:text-neutral-600 disabled:border-neutral-300 aria-disabled:border-neutral-300 disabled:bg-transparent aria-disabled:bg-transparent px-4":
			// 	variant === "secondary",
			"shadow-2xl border-neutral-600 bg-neutral-700 text-neutral-600 hover:bg-neutral-600 hover:text-white disabled:bg-neutral-800 px-4 aria-disabled:cursor-not-allowed aria-disabled:opacity-70 hover:aria-disabled:bg-neutral-600 border-[1px]":
				variant === "secondary",
			"border-white w-min bg-white text-neutral-600 hover:border-neutral-200 hover:bg-neutral-200 px-4":
				variant === "tertiary",
		},
		className,
	);

	return (
		<button
			aria-label={ariaLabel}
			aria-disabled={ariaDisabled}
			disabled={disabled}
			// className="flex w-full max-w-md items-center justify-center  rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-2 focus:ring-offset-blue-200"
			className={classes}
			type={type === "submit" ? "submit" : "button"}
			{...rest}
		>
			{loading ? (
				<svg
					width="20"
					height="20"
					fill="currentColor"
					className="mr-2 animate-spin"
					viewBox="0 0 1792 1792"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
				</svg>
			) : null}

			{label}
		</button>
		// <button
		// 	aria-label={ariaLabel}
		// 	aria-disabled={ariaDisabled}
		// 	disabled={disabled}
		// 	className={classes}
		// 	// className="justify-between"
		// 	type={type === "submit" ? "submit" : "button"}
		// 	{...rest}
		// >
		// 	{label}
		// 	<svg
		// 		aria-hidden="true"
		// 		className="mr-3 h-5 w-5 animate-spin  fill-blue-600 text-gray-200 dark:text-gray-600"
		// 		viewBox="0 0 98 98"
		// 		fill="none"
		// 		xmlns="http://www.w3.org/2000/svg"
		// 	>
		// 		<path
		// 			d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
		// 			fill="currentColor"
		// 		/>
		// 		<path
		// 			d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
		// 			fill="currentFill"
		// 		/>
		// 	</svg>
		// 	{/* {typeof label === "string" ? <span>{label}</span> : label} */}
		// </button>
	);
};
