// src/CategoriesFilter.js
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { FiChevronDown, FiChevronUp, FiChevronRight } from 'react-icons/fi';

const CategoriesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
    <div className="mb-8 border rounded" id="categoriesFilterCategoriesFilter">
      <h5 className="mb-3">
        <button
          className="accordion-button"
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="categoriesCollapse"
        >
          Categories
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </h5>
      <Transition in={isOpen} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <div
              id="categoriesCollapse"
              className="show"
              aria-labelledby="categoriesHeading"
              data-bs-parent="#categoriesFilterCategoriesFilter"
            >
              <div className="accordion-body">
                <ul className="nav nav-category pb-0 mb-0" id="categoryCollapseMenu">
                  <li className="nav-item w-full">
                    <a
                      href="#"
                      className="nav-link Productcategory collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categoryFlush1"
                      aria-expanded="false"
                      data-category-id="Category 1"
                      aria-controls="categoryFlush1"
                    >
                      Category 1
                      <FiChevronRight />
                    </a>
                  </li>
                  <li className="nav-item w-full">
                    <a
                      href="#"
                      className="nav-link Productcategory collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#categoryFlush2"
                      aria-expanded="false"
                      data-category-id="Category 2"
                      aria-controls="categoryFlush2"
                    >
                      Category 2
                      <FiChevronRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default CategoriesFilter;