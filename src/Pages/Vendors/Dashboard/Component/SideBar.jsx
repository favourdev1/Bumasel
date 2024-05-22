import React from 'react';
import { FaBell, FaBorderAll, FaShop, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const getLinkClasses = (section) =>
    `p-4 w-full flex gap-2 items-center justify-start ${activeSection === section ? 'bg-purple-700 text-white' : 'bg-white text-black'} hover:bg-purple-500 hover:text-white`;

  return (
    <div className='w-1/4 px-6 pb-6 bg-white sidebar'>
      <div className='w-full pb-4'>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className='text-sm'>
        <li className={getLinkClasses('dashboard')}>
          <Link to={""} onClick={() => setActiveSection('dashboard')} className='w-full flex justify-start items-center gap-2'>
            <FaBorderAll /><span className='hidden lg:flex'>Dashboard</span>
          </Link>
        </li>
        <li className={getLinkClasses('store')}>
          <Link to={""} onClick={() => setActiveSection('store')} className='w-full flex justify-start items-center gap-2'>
            <FaShop /><span className='hidden lg:flex'>Store</span>
          </Link>
        </li>
        <li className={getLinkClasses('product')}> 
          <Link to={""} onClick={() => setActiveSection('product')} className='w-full flex justify-start items-center gap-2'>
            <FaCartShopping /><span className='hidden lg:flex' >Product</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
