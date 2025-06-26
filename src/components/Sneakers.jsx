import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Sneakers() {
  const [filter, setFilter] = useState('all');
  const [fadeIn, setFadeIn] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => setFadeIn(true), []);

  const allProducts = {
    urbanblaze: [
      {
        title: 'Urban Blaze: Recover',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/4_7tj5Fr1.jpg?format=webp&w=360&dpr=1.7',
        price: 1999,
        discount:800,
      },
      {
        title: 'UBZ : Velocity',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_1_P3upkrg.jpg?format=webp&w=360&dpr=1.7',
        price: 799,
      },
      {
        title: 'Star Wars : Stormtroppers',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/main_copy_21WtC0L.jpg?format=webp&w=360&dpr=1.7',
        price: 3599,
        discount:2000, 
      },
      {
        title: 'Marvel: Doctor Doom',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top_selling_dr_doom_1_nHI8CAC.jpg?format=webp&w=360&dpr=1.7',
        price: 799,
      },
      {
        title: 'Souled',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/top1_t2OoBrj.jpg?format=webp&w=360&dpr=1.7',
        price: 799,
      },
    ],
    fumes: [
      {
        title: 'Fumes: Toxic',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746611674_1972735.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
      {
        title: 'Fumes: Hazard',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744797988_8981925.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
      {
        title: 'Fumes: Storm',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744798265_3891874.jpg?format=webp&w=480&dpr=1.7',
        price: 1199,
        discount:800,
      },
      {
        title: 'Fumes: Eclipse',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1744797855_1816014.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
      {
        title: 'Fumes: Knight',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/r1.jpg?format=webp&w=360&dpr=1.7',
        price: 799,
      },
    ],
    fandom: [
      {
        title: 'Superman',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1749904108_5184705.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
      {
        title: 'Batman: The Dark Knight 2.0',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708668433_3948163.jpg?format=webp&w=480&dpr=1.7',
        price: 2099,
        discount:1999,
      },
      {
        title: 'Wolverine X Deadpool',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1727881384_2145406.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
      {
        title: 'Deadpool: Utility Suit',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1749638102_6037602.jpg?format=webp&w=480&dpr=1.7',
        price: 2799,
        discount:1500,
      },
      {
        title: 'Star Wars: Darth Vader',
        img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1745836876_7154809.jpg?format=webp&w=480&dpr=1.7',
        price: 799,
      },
    ],
  };

 const getFilteredItems = () =>
    filter === 'all'
      ? [...allProducts.urbanblaze, ...allProducts.fumes, ...allProducts.fandom]
      : allProducts[filter];

  const filterBtnStyle = (active) =>
    `px-4 py-2 text-sm font-bold tracking-wider uppercase rounded-full transition duration-300 shadow-sm ${
      active
        ? 'bg-red-600 text-white scale-105'
        : 'bg-black text-yellow-400 border border-yellow-500 hover:bg-yellow-100 hover:text-black'
    }`;

  return (
    <div className={`pt-10 px-4 min-h-screen transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='text-4xl text-center mb-8 text-yellow-400 font-extrabold drop-shadow-sm uppercase'>"Sneaker" Attack Zone</h1>

      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 flex-wrap mb-10'>
        <button onClick={() => setFilter('all')} className={filterBtnStyle(filter === 'all')}>All</button>
        <button onClick={() => setFilter('urbanblaze')} className={filterBtnStyle(filter === 'urbanblaze')}>Urban Blaze</button>
        <button onClick={() => setFilter('fumes')} className={filterBtnStyle(filter === 'fumes')}>Fumes</button>
        <button onClick={() => setFilter('fandom')} className={filterBtnStyle(filter === 'fandom')}>Fandom</button>
      </div>

      {/* Banners */}
      {filter === 'all' && (
        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_10_wm3vS31.jpg?format=webp&w=1500&dpr=1.7"
          alt="Sneaker Banner"
          className='w-full rounded-xl shadow-lg mb-8' />
      )}
      {filter === 'urbanblaze' && (
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4246920250613150914.jpg?format=webp&w=1500&dpr=1.7"
          alt="Urban Blaze"
          className='w-full rounded-xl shadow-lg mb-8' />
      )}
      {filter === 'fumes' && (
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1709220250612123657.jpg?format=webp&w=1500&dpr=1.7"
          alt="Fumes"
          className='w-full rounded-xl shadow-lg mb-8' />
      )}
      {filter === 'fandom' && (
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1529020250510115755.jpg?format=webp&w=1500&dpr=1.7"
          alt="Fandom"
          className='w-full rounded-xl shadow-lg mb-8' />
      )}

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {getFilteredItems().map((product, idx) => (
          <div key={idx} className='bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition duration-300 border border-yellow-600'>
            <img src={product.img} alt={product.title} className='h-60 w-full object-cover' />
            <div className='p-4 text-white'>
              <p className='text-lg font-bold text-yellow-400 mb-2'>{product.title}</p>
              {product.discount ? (
                <div className='flex items-center gap-2 mb-2'>
                  <p className='line-through text-gray-400'>₹{product.price}</p>
                  <p className='text-lg font-bold text-white'>₹{product.discount}</p>
                  <p className='text-red-500 text-sm font-medium'>
                    {Math.round(((product.price - product.discount) / product.price) * 100)}% OFF
                  </p>
                </div>
              ) : (
                <p className='text-gray-300 mb-2'>₹{product.price}</p>
              )}
              <button
                onClick={() => {
                  const priceToUse = product.discount || product.price;
                  addToCart({ ...product, price: priceToUse });
                  alert('Item has been added to cart');
                }}
                className='w-full bg-gradient-to-r from-yellow-400 to-red-600 text-black py-2 rounded-full font-bold hover:from-yellow-300 hover:to-red-700 transition'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sneakers;