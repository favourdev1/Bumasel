import { Transition } from '@headlessui/react';
import React from "react"

const ProductModal = ({ showModal, closeModal, selectedImage }) => {
    return (
        <Transition
            show={showModal}
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="flex items-center justify-center min-h-screen">
                <Transition.Child
                    as="div"
                    className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity  bg-black/40 "
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    onClick={closeModal}
                />
                <Transition.Child
                    as="div"
                    className="bg-white rounded-lg overflow-hidden shadow-xl z-10 max-w-lg w-full "
                    enter="transform transition ease-out duration-300 sm:duration-500"
                    enterFrom="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                    enterTo="translate-y-0 opacity-100 sm:scale-100"
                    leave="transform transition ease-in duration-200 sm:duration-300"
                    leaveFrom="translate-y-0 opacity-100 sm:scale-100"
                    leaveTo="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                >
                    <img
                        src={selectedImage}
                        alt=""
                        className="w-full h-[60%] object-contain"
                    />
                </Transition.Child>
            </div>
        </Transition>
    );
};

export default ProductModal;