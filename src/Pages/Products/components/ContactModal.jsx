/** @format */

import React, { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";

const ContactModal = ({ isOpen, onClose, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
		} else {
			const timer = setTimeout(() => setIsVisible(false), 300); // Match the transition duration
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isVisible) return null;
	return (
		<div
			className={` z-[100] fixed inset-0 flex items-center justify-center bg-black backdrop-blur bg-opacity-50 transition-opacity duration-300 ${
				isOpen ? "open" : ""
			} modal-overlay`}
			onClick={handleOverlayClick}
		>
			<div
				className={`bg-white p-6 w-4/12  rounded-lg shadow-lg transition-transform duration-300 ${
					isOpen ? "open" : ""
				} modal-content`}
			>
				<h2 className="text-xl font-bold mb-4">Vendor Contact Info</h2>
				<div className="grid grid-cols-2 items-center gap-x-10 gap-y-5">
					<div>
						<p className="text-gray-500 text-sm">Vendor Location</p>
						<p className="font-bold">Kaduna Polytechnic</p>
					</div>

					<div>
						<p className="text-gray-500 text-sm">Vendor Name</p>
						<p className="font-bold flex">Town Hall Balablu</p>
					</div>

					<div>
						<p className="text-gray-500 text-sm">Vendor Contact</p>
						<p className="font-bold flex items-center bg-purple-200 rounded-lg hover:ring-purple-300 duration-500  cursor-pointer hover:ring-1 text-purple-700 w-max p-2 text-sm gap-4">
							09012345678
							<span>
								<GoCopy className="size-4" />
							</span>
						</p>
					</div>

					<div>
						<p className="text-gray-500 text-sm">Vendor Contact 2</p>
						<p className="font-bold flex items-center bg-purple-200 rounded-lg hover:ring-purple-300 duration-500  cursor-pointer hover:ring-1 text-purple-700 w-max p-2 text-sm gap-4">
							09012345678
							<span>
								<GoCopy className="size-4" />
							</span>
						</p>
					</div>

					<div>
						<p className="text-gray-500 text-sm">Vendor ID</p>
						<p className="font-bold">DFDAHXEU2NDAS</p>
					</div>
				</div>
				<div className="rounded-xl border border-purple-300 p-5  mt-4 bg-purple-100">
					<p className="font-bold text-base">Note</p>
					<ul className="prose text-sm text-gray-500 list-disc I px-5">
						<li>
							Goods Especially Edible Products Are Advised To Be 1 - 3km Away
							From Present Location
						</li>
						<li>Make Sure You Pay On Delivery</li>
						<li>Contact And Report Vendor If You Find It Suspicious</li>
					</ul>
				</div>

				{children}
				<button
					className="mt-4 px-4 py-2 bg-green-100 ring-1  ring-green-500 hover:bg-green-700  hover:text-white duration-500 w-full text-center  text-green-700 rounded-2xl"
					onClick={() => window.location.href = 'tel:+1234567890'}
				>
					Call John Doe
				</button>
			</div>
		</div>
	);
};

export default ContactModal;
