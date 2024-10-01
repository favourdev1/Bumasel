/** @format */

import { Description, Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function SortFilter() {
	return (
		<div className="w-max max-w-md px-4">
			
				<div className="relative text-sm rounded-md border  gap-4  ">
					<Select
						className={clsx(
							" block appearance-none  border-none rounded-lg  bg-white/5 py-1.5 px-5 ppr-8 w-full text-gray-700 pr-6",
							"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
							"*:text-black"
						)}
					>
						<option value="relevant">Relevant</option>
						<option value="low-to-high">Low to High</option>
						<option value="high-to-low">High to Low</option>
					</Select>
					<ChevronDownIcon
						className="group pointer-events-none absolute top-2 right-2  size-4 fill-gray-500"
						aria-hidden="true"
					/>
				</div>
		
		</div>
	);
}
