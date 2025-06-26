import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Mens() {
  const [filter, setFilter] = useState('all');
  const { addToCart } = useCart();
  const [fadeIn, setFadeIn] = useState(false);

   useEffect(() => {
    setFadeIn(true);
  }, []);


  const allProducts = {
    shirts: [
      {
        title: 'Denim Shirt',
        img: 'https://img.freepik.com/premium-photo/man-denim-shirt-arms-hips-gray-background-people-lifestyle-concept-mock-up-copy-space-straightening-sleeves-looking-aside_222877-12674.jpg?semt=ais_hybrid&w=740',
        price: 799,
        discount: 499,
      },
      {
        title: 'White Lenin Shirt',
        img: 'https://img.freepik.com/free-photo/basic-white-shirt-men-s-fashion-apparel-studio-shoot_53876-105424.jpg?semt=ais_hybrid&w=740',
        price: 799,
        discount: 399,
      },
      {
        title: 'Classic plain Blue Shirt',
        img: 'https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg?semt=ais_hybrid&w=740',
        price: 799,
      },
      {
        title: 'Layered Shirt/Tshirt Combo',
        img: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4983.jpg?w=740',
        price: 799,
      },
      {
        title: 'Textured Skyblue Shirt',
        img: 'https://img.freepik.com/free-photo/handsome-businessman-formal-clothes-posing-street-sunglasses_158538-8303.jpg?semt=ais_hybrid&w=740',
        price: 799,
      },
    ],
    tshirts: [
      {
        title: 'Iron Chest Regular Size T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-black-iron-man-of-war-graphic-printed-t-shirt-220650-1730990210-1.jpg',
        price: 799,
        discount: 500,
      },
      {
        title: 'Batman Black T-shirt Oversized',
        img: 'https://images.bewakoof.com/t640/men-s-black-batman-outline-logo-graphic-printed-oversized-t-shirt-519159-1734686072-1.jpg',
        price: 799,
      },
      {
        title: 'Oversized Spiderman T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-black-across-the-spiderverse-graphic-printed-oversized-t-shirt-599566-1730987038-1.jpg',
        price: 799,
      },
      {
        title: 'Oversized Blackpanther T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-black-panther-mech-graphic-printed-oversized-t-shirt-620196-1730989624-1.jpg',
        price: 799,
        discount: 699,
      },
      {
        title: 'Mens Deadpool Graphic T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-blue-marvel-jesus-graphic-printed-t-shirt-644865-1738831771-1.jpg',
        price: 799,
      },
    ],
    anime: [
      {
        title: 'Rengoku Hoodie',
        img: 'https://images.bewakoof.com/t640/men-s-brown-flame-hashira-graphic-printed-oversized-hoodies-648724-1736406112-1.jpg',
        price: 799,
      },
      {
        title: 'Flame Breathing Tanjiro Tee',
        img: 'https://images.bewakoof.com/t640/men-s-black-tanjiro-fire-breathing-graphic-printed-oversized-t-shirt-645964-1739174384-1.jpg',
        price: 799,
      },
      {
        title: 'Oversized Hashira T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-vapour-blue-hashira-assemble-graphic-printed-oversized-t-shirt-646003-1727100270-1.jpg',
        price: 799,
      },
      {
        title: 'Itachi Graphical T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-vapour-blue-itachi-akatsuki-graphic-printed-oversized-t-shirt-662007-1744002486-1.jpg',
        price: 1799,
        discount: 1000,
      },
      {
        title: 'Naruto Clone T-shirt',
        img: 'https://images.bewakoof.com/t640/men-s-white-naruto-clone-graphic-printed-oversized-t-shirt-645976-1737525277-1.jpg',
        price: 799,
      },
    ],
  };

  const getFilteredItems = () =>
    filter === 'all'
      ? [...allProducts.shirts, ...allProducts.tshirts, ...allProducts.anime]
      : allProducts[filter];

  const filterBtnStyle = (active) =>
    `px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm shadow-sm ${
      active
        ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white scale-105'
        : 'bg-white text-orange-700 border border-orange-400 hover:bg-orange-50'
    }`;

  return (
    <div className={`pt-10 px-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className='text-4xl text-center mb-8 text-blue-900 font-extrabold tracking-wide'>Men's Premium Collection</h1>
      <div className="w-full overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 mb-6">
        <div className="whitespace-nowrap animate-marquee text-center text-sm sm:text-base">
          🔥 SALE HAPPENING SOON — Stay tuned for massive discounts on Men's Collection! 🔥 SALE HAPPENING SOON — Stay tuned for massive discounts on Men's Collection! 🔥
        </div>
      </div>


      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 flex-wrap mb-10'>
        <button onClick={() => setFilter('all')} className={filterBtnStyle(filter === 'all')}>
          All
        </button>
        <button onClick={() => setFilter('shirts')} className={filterBtnStyle(filter === 'shirts')}>
          Luxury Shirts
        </button>
        <button onClick={() => setFilter('tshirts')} className={filterBtnStyle(filter === 'tshirts')}>
          Printed T-Shirts
        </button>
        <button onClick={() => setFilter('anime')} className={filterBtnStyle(filter === 'anime')}>
          Anime Merchandise
        </button>
      </div>

      {/* Banners */}
      {filter === 'all' && (
          <div className="mb-8 rounded-xl shadow-lg overflow-hidden">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={4000}
              transitionTime={800}
            >
              <div>
                <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_pMbv5fd.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 1" />
              </div>
              <div>
                <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_I67mC76.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 2" />
              </div>
              <div>
                <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Made_for_the_modern_explorer_-_Homepage__banner_copy_I2hm4mh.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 3" />
              </div>
            </Carousel>
          </div>
        )}

        {filter === 'shirts' && (
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_Page_-_souled_in_lenin.jpg?format=webp&w=1500&dpr=1.7"
          className='w-full mb-8 rounded-xl shadow-lg'
          alt='All Clothing'
        />
      )}

        {filter === 'tshirts' && (
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-220250610141356.jpg?format=webp&w=1500&dpr=1.7"
          className='w-full mb-8 rounded-xl shadow-lg'
          alt='All Clothing'
        />
      )}

      {filter === 'anime' && (
        <img
          src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FInsideBanner-desktop-NarutoShippuden-02-1744132179.jpg&w=1920&q=75"
          className='w-full mb-8 rounded-xl shadow-lg'
          alt='All Clothing'
        />
      )}

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {getFilteredItems().map((product, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-slate-200'
          >
            <img src={product.img} alt={product.title} className='h-60 w-full object-cover' />
            <div className='p-4'>
              <p className='text-lg font-semibold text-slate-800 mb-2'>{product.title}</p>
              {product.discount ? (
                <div className='flex items-center gap-2 mb-2'>
                  <p className='line-through text-gray-500'>₹{product.price}</p>
                  <p className='text-lg font-bold text-orange-700'>₹{product.discount}</p>
                  <p className='text-orange-600 text-sm font-medium'>
                    {Math.round(((product.price - product.discount) / product.price) * 100)}% OFF
                  </p>
                </div>
              ) : (
                <p className='text-gray-700 mb-2'>₹{product.price}</p>
              )}
              <button
                onClick={() => {
                  const priceToUse = product.discount || product.price;
                  addToCart({ ...product, price: priceToUse });
                  alert('Item has been added to cart');
                }}
                className='w-full bg-gradient-to-r from-orange-700 to-yellow-500 text-white py-2 rounded-full font-bold hover:from-orange-800 hover:to-yellow-600 transition'
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;