"use client";

import { Fragment, type ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMobileMenu } from "./useMobileMenu";
import { OpenButton } from "./OpenButton";
import { CloseButton } from "./CloseButton";

type Props = {
	children: ReactNode;
};

export const MobileMenu = ({ children }: Props) => {
	const { closeMenu, openMenu, isOpen } = useMobileMenu();

	return (
		<>
			<OpenButton onClick={openMenu} aria-controls="mobile-menu" />
			<Transition show={isOpen}>
				<Dialog onClose={closeMenu}>
					<Dialog.Panel className="fixed inset-0 z-20 float-right flex h-dvh w-[100%] flex-col overflow-y-scroll">
						<Transition.Child
							className="sticky top-0 z-10 flex h-16 shrink-0 justify-end bg-transparent"
							enter="motion-safe:transition-all motion-safe:duration-150"
							enterFrom="opacity-0 bg-transparent"
							enterTo="opacity-100 bg-transparent"
							leave="motion-safe:transition-all motion-safe:duration-150"
							leaveFrom="opacity-100 bg-white"
							leaveTo="opacity-0 bg-transparent"
						>
							<div className={"flex min-w-[50%] justify-center bg-neutral-700 bg-opacity-90 pr-5"}>
								<CloseButton onClick={closeMenu} aria-controls="mobile-menu" />
							</div>
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="motion-safe:transition-all motion-safe:duration-150"
							enterFrom="opacity-0 bg-transparent"
							enterTo="opacity-100 bg-transparent"
							leave="motion-safe:transition-all motion-safe:duration-150"
							leaveFrom="opacity-100 bg-white"
							leaveTo="opacity-0 bg-transparent"
						>
							<ul
								className="flex h-full flex-col divide-y divide-neutral-200 whitespace-nowrap pt-0 [&>li]:py-3"
								id="mobile-menu"
							>
								{children}
							</ul>
						</Transition.Child>
					</Dialog.Panel>
				</Dialog>
			</Transition>
		</>
	);
};
