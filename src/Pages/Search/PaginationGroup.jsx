import React from "react";

export default function PaginationGroup({ activePage, onNext, onPrev, setPage }) {
  const getItemProps = (index) => ({
    className: `p-2 bg-white px-2.5 h-full border  ${activePage === index ? "bg-gray-100 text-gray-900" : ""}`,
    onClick: () => setPage(index),
  });

  return (
    <div className="flex items-center  w-full justify-center py-7">
      <button onClick={onPrev} className="p-2 bg-white h-full border rounded-l-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {[...Array(5)].map((_, index) => (
        <button key={index} {...getItemProps(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button onClick={onNext} className="p-2 bg-white h-full border  rounded-r-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}