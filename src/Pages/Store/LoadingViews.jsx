import React from "react"
export default function LoadingView() {

    return (
    <div className="text-gray-700 container h-screen py-10 text-sm flex mx-auto px-4 xl:px-2 gap-6 animate-pulse">
        <div className="mx-auto w-full lg:w-[30%] h-max rounded-full-xl border pl-4 pr-8 py-8">
            <div className="h-6 bg-gray-300 rounded-full mb-4 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded-full mb-2 w-3/4"></div>
            <div className="py-4 flex gap-3 lg:flex-row flex-col">
                <div className="rounded-full-full w-14 h-14 bg-gray-300"></div>
                <div className="flex flex-col">
                    <div className="h-6 bg-gray-300 rounded-full mb-2 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded-full w-1/4"></div>
                </div>
            </div>
            <div className="flex gap-4 pr-4">
                <div className="h-8 bg-gray-300 rounded-full w-1/2"></div>
                <div className="h-8 bg-gray-300 rounded-full w-1/2"></div>
            </div>
            <div className="border-t border-b pt-5 pb-4">
                <div className="flex justify-between items-center py-2">
                    <div className="h-6 bg-gray-300 rounded-full mb-2 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded-full w-1/4"></div>
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="h-6 bg-gray-300 rounded-full mb-2 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded-full w-1/4"></div>
                </div>
            </div>
            <div className="border-b pt-4 pb-3 flex flex-col gap-1">
                <div className="h-8 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-8 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-8 bg-gray-300 rounded-full mb-2"></div>
            </div>
            <div className="pt-4 pb-3 flex flex-col gap-3">
                <div className="h-6 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-6 bg-gray-300 rounded-full mb-2"></div>
            </div>
        </div>

        {/* Second section */}
        <div className="mx-auto w-full rounded-full-xl p-8 lg:flex flex-col hidden">
            <div className="h-6 bg-gray-300 rounded-full mb-4 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded-full mb-2 w-3/4"></div>
            <form className="lg:w-[80%] w-full">
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="h-10 bg-gray-300 rounded-full mb-2"></div>
                        <div className="h-10 bg-gray-300 rounded-full mb-2"></div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-4">
                    <div className="h-4 bg-gray-300 rounded-full mb-1 w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex justify-start gap-10">
                    <div className="h-10 bg-gray-300 rounded-full w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded-full w-1/4"></div>
                </div>
            </form>
        </div>
    </div>
    
    )
}