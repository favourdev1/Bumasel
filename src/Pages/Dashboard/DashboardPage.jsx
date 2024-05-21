import React, { useState, useEffect, useRef } from 'react';
import { FaCartShopping, FaBell } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const today = new Date();
  const currentDate = today.toDateString();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10', profit: 5, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 2, name: 'Product 2', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 3, name: 'Product 3', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    { id: 4, name: 'Product 4', price: '$20', profit: 10, discount: '50%', showButtons: false, category: "Gadget", date: "22/2/2024" },
    // Add more products here
  ]);

  const buttonsRef = useRef([]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleThreeDotsClick = (id) => {
    setProducts(products.map((product) => {
      if (product.id === id) {
        return { ...product, showButtons: !product.showButtons };
      }
      return { ...product, showButtons: false }; // Close other dropdowns
    }));
  };

  const handleClickOutside = (event) => {
    if (buttonsRef.current && !buttonsRef.current.some((ref) => ref && ref.contains(event.target))) {
      setProducts(products.map((product) => ({ ...product, showButtons: false })));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [products]);

  const renderContent = () => {
    switch (activeSection) {
      case 'store':
        return (
          <div>
            {/* Store Section Content */}
            <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 1</div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 2</div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Store Item 3</div>
            </div>
          </div>
        );
      case 'product':
        return (
          <div>
            {/* Product Section Content */}
            <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 1</div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 2</div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'>Product Item 3</div>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div>
            {/* Dashboard Section Content */}
            <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
            </div>
            <div className='flex lg:flex-row flex-col gap-4 w-full py-5'>
              <div className='w-full lg:w-2/3 h-44 lg:h-60 bg-white rounded-xl'></div>
              <div className='w-full lg:w-1/3 h-44 lg:h-60 bg-white rounded-xl'></div>
            </div>
            <div className="flex flex-col h-screen">
              <header className="py-4 px-6">
                <h1 className="text-2xl font-bold">Product Table</h1>
              </header>
              <main className="flex-grow bg-[#FAF7FF] p-6">
                <table className="w-full">
                  <thead>
                    <tr className='border-b border-white text-start'>
                      <th className="py-2 px-4 text-start">Product Name</th>
                      <th className="py-2 px-4 text-start">Item ID</th>
                      <th className="py-2 px-4 text-start">Category</th>
                      <th className="py-2 px-4 text-start">Date</th>
                      <th className="py-2 px-4 text-start">Price</th>
                      <th className="py-2 px-4 text-start">Discount</th>
                      <th className="py-2 px-4 text-start">Profit</th>
                      <th className="py-2 px-4 text-start"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id} className='border-b border-white '>
                        <td className="py-2 px-4">{product.name}</td>
                        <td className="py-2 px-4">{product.id}</td>
                        <td className="py-2 px-4">{product.category}</td>
                        <td className="py-2 px-4">{product.date}</td>
                        <td className="py-2 px-4">{product.price}</td>
                        <td className="py-2 px-4">{product.discount}</td>
                        <td className="py-2 px-4">{product.profit}</td>
                        <td>
                          <div className="relative">
                            <div className=" " ref={(el) => (buttonsRef.current[index] = el)}>
                              <button
                                className="p-2 rounded-md font-bold hover:bg-white"
                                onClick={() => handleThreeDotsClick(product.id)}
                              >
                                ...
                              </button>
                              {/* Display delete and add buttons when clicked */}
                              {product.showButtons && (
                                <div className="flex flex-col absolute z-10 w-32 right-0 p-2 gap-2 top-8 bg-white rounded-md">
                                  <button className="mr-2 bg-purple-200 p-2 rounded-xl text-purple-700 hover:text-white hover:bg-purple-500" onClick={() => handleDelete(product.id)}>
                                    Delete
                                  </button>
                                  <Link to={""} className="mr-2 bg-purple-200 p-2 rounded-xl text-purple-700 hover:text-white hover:bg-purple-500">Add New</Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </main>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='mx-auto px-4 xl:px-2 py-6 bg-[#FAF7FF]'>
      <div className='flex w-full px-6 gap-3'>
        <div className='w-1/4 px-6 pb-6 bg-white'>
          <div className='w-full pb-4'>
            <img src="/images/logo.png" alt="" />
          </div>
          <ul>
            <li className='p-4'><Link to={""} onClick={() => setActiveSection('dashboard')}>Dashboard</Link></li>
            <li className='p-4'><Link to={""} onClick={() => setActiveSection('store')}>Store</Link></li>
            <li className='p-4'><Link to={""} onClick={() => setActiveSection('product')}>Product</Link></li>
          </ul>
        </div>
        <div className='w-3/4'>
          <div className='px-4 py-2 flex justify-between items-center w-full bg-white rounded-xl'>
            <div className=''>
              <p>Welcome, Chisom</p>
              <p className='text-gray-300'>{currentDate}</p>
            </div>
            <div className='flex gap-2'>
              <div className='bg-[#FAF7FF] p-2 rounded-full w-8 h-8 flex items-center justify-center'><FaBell className='w-5 h-5 ' /></div>
              <div className=''>
                <p>Welcome, Chisom</p>
                <p className='text-gray-300'>{currentDate}</p>
              </div>
              <div className='bg-[#FAF7FF] p-2 rounded-full w-8 h-8'></div>
            </div>
          </div>
          <div className='Display'>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
