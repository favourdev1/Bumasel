/** @format */

import { Fragment } from "react";
import cookie from "js-cookie"
import { Popover, Transition } from "@headlessui/react";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon
} from "@heroicons/react/20/solid";
import {
	ArrowPathIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon
} from "@heroicons/react/24/outline";

const profileOptions = [
	{
		name: "My Account",
		
		href: "/profile",
		icon: ChartPieIcon
	},
	{
		name: "Favourites",
		
		href: "#",
		icon: CursorArrowRaysIcon
	},
	{
		name: "LogOut",
		description: "Your customers' data will be safe and secure",
		href: "#",
		icon: ArrowPathIcon
	},
	// {
	// 	name: "Integrations",
	// 	description: "Connect with third-party tools",
	// 	href: "#",
	// 	icon: SquaresPlusIcon
	// },
	// {
	// 	name: "Automations",
	// 	description: "Build strategic funnels that will convert",
	// 	href: "#",
	// 	icon: ArrowPathIcon
	// }
];
const  logoutUser=()=>  {
	console.log("logging out");
	// remve cookie
	cookie.remove('token');
	window.location.href = "/login";
}

export default function ProfilePopup({ isOpen, setIsOpen, userDetails }) {
	return (
		<Popover
			className="relative"
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Popover.Button className="bg-[#FAF7FF] text--purple-700 flex items-center gap-2 rounded-xl  text-sm hover:bg-purple-700 hover:text-white duration-500 focus:outline-none focus:border:none focus:ring-none flex items-center cursor-pointer text-gray-700  pl-2 pr-4 py-2  hover:bg-purple-700 hover:text-white rounded-lg duration-500 border-[#eee] ">
				<img src="/images/profilehead.png" alt="" className="object-fit w-6  h6 rounded-full border" />

				<p className="hover:text-white text-xs">{userDetails && userDetails.first_name}</p>
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4">
					<div className=" flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/10">
						<div className="p-4">
							{profileOptions.map((item) => (
								<div
									key={item.name}
									className="group relative flex items-center gap-x-3 rounded-lg p-2 hover:bg-gray-200"
								>
									<div className="mt-1 flex  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<item.icon
											className="h-4 w-4 text-gray-600 group-hover:text-indigo-600"
											aria-hidden="true"
										/>
									</div>
									<div>
										{item.name.toLowerCase() === "logout" ? (
											<p onClick={logoutUser} className="font-semibold text-gray-900 cursor-pointer">
												{item.name}
												<span className="absolute inset-0" />
											</p>
										) : (
											<a href={item.href} className="font-semibold text-gray-900 cursor-pointer">
												{item.name}
												<span className="absolute inset-0" />
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
