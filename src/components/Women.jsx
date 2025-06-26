import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Women() {
  const [filter, setFilter] = useState('all');
  const [fadeIn, setFadeIn] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);


  const allProducts = {
  shirts: [
    {
      title: 'Classic Cream Shirt for Women',
      img: 'https://img.freepik.com/free-photo/business-woman-evening-street_1303-3826.jpg?semt=ais_items_boosted&w=740',
      price: 799,
      discount:299,
    },
    {
      title: 'White Lenin Shirt for Women',
      img: 'https://img.freepik.com/free-photo/elegant-female-model-posing-jacket-suit-with-tie-new-feminity-concept_23-2148951009.jpg?semt=ais_items_boosted&w=740',
      price: 899,
    },
    {
      title: 'Black Oversized Crop Shirt',
      img: 'https://images.bewakoof.com/t640/women-s-black-oversized-crop-shirt-636848-1728995930-1.jpg',
      price: 749,
    },
    {
      title: 'ELegant White Top',
      img: 'https://img.freepik.com/free-photo/medium-shot-woman-with-casual-outfit-looking-sideways_23-2148248560.jpg?semt=ais_items_boosted&w=740',
      price: 820,
    },
    {
      title: 'Side Rouching Shirt: Red',
      img: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1746859850_9057913.jpg?format=webp&w=480&dpr=1.7',
      price: 950,
    },
  ],
  tshirts: [
    {
      title: 'Women Hakuna Matata',
      img: 'https://images.bewakoof.com/t640/women-s-black-hakuna-matata-graphic-printed-boyfriend-fit-t-shirt-480369-1744630783-1.jpg',
      price: 699,
    },
    {
      title: 'Women White Minimal',
      img: 'https://images.bewakoof.com/t640/women-s-white-minimal-believe-typography-boyfriend-t-shirt-305344-1728641222-1.jpg',
      price: 1670,
      discount:500,
    },
    {
      title: 'Womens lion printed',
      img: 'https://images.bewakoof.com/t640/women-s-blue-lion-graphic-printed-oversized-t-shirt-615050-1744717395-1.jpg',
      price: 710,
    },
    {
      title: 'Purple Beginning womens',
      img: 'https://images.bewakoof.com/t640/women-s-purple-beginning-and-beyond-graphic-printed-boyfriend-t-shirt-676093-1744349973-1.jpg',
      price: 745,
    },
    {
      title: 'Oversized Printed T-shirt',
      img: 'https://images.bewakoof.com/t640/women-s-black-no-we-in-food-graphic-printed-boyfriend-t-shirt-483824-1745845957-1.jpg',
      price: 765,
    },
  ],
  anime: [
    {
      title: 'VK X Demon Slayer',
      img: 'https://images.bewakoof.com/t640/women-s-orange-ds-siblings-oversized-graphic-printed-t-shirt-648443-1736359062-1.jpg',
      price: 1875,
      discount:600,
    },
    {
      title: 'Mitusri Print T-shirt',
      img: 'https://images.bewakoof.com/t640/women-s-black-mitsuri-kanroji-graphic-printed-oversized-t-shirt-645157-1736424542-1.jpg',
      price: 890,
    },
    {
      title: 'Oversized Nezuko Pink T-shirt',
      img: 'https://images.bewakoof.com/t640/women-s-pink-nezuko-kamado-typography-boyfriend-t-shirt-645155-1739174341-1.jpg',
      price: 935,
    },
    {
      title: 'Itachi Graphical T-shirt',
      img: 'https://images.bewakoof.com/t640/women-s-white-itachi-genjutsu-graphic-printed-boyfriend-t-shirt-661972-1741774384-1.jpg',
      price: 1999,
      discount:800,
    },
    {
      title: 'Naruto Clone T-shirt',
      img: 'https://images.bewakoof.com/t640/women-s-blue-white-ramen-jersey-graphic-printed-oversized-t-shirt-603172-1744883247-1.jpg',
      price: 1049,
    },
  ],
};


 const getFilteredItems = () =>
    filter === 'all'
      ? [...allProducts.shirts, ...allProducts.tshirts, ...allProducts.anime]
      : allProducts[filter];

  const buttonStyle = (active) =>
    `px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
      active
        ? 'bg-pink-500 text-white scale-105'
        : 'bg-white border border-pink-400 text-pink-700 hover:bg-pink-100'
    }`;

  return (
    <div
      className={`pt-10 px-4 transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-4xl text-center mb-8 text-pink-700 font-extrabold'>Women's Clothing</h1>

      <div className='flex justify-center gap-4 flex-wrap mb-10'>
        <button onClick={() => setFilter('all')} className={buttonStyle(filter === 'all')}>
          All
        </button>
        <button onClick={() => setFilter('shirts')} className={buttonStyle(filter === 'shirts')}>
          Luxury Shirts
        </button>
        <button onClick={() => setFilter('tshirts')} className={buttonStyle(filter === 'tshirts')}>
          Printed T-Shirts
        </button>
        <button onClick={() => setFilter('anime')} className={buttonStyle(filter === 'anime')}>
          Anime Merchandise
        </button>
      </div>

      {/* Category Banners */}
      {filter === 'all' && (
                <div className="mb-8 rounded-xl shadow-lg overflow-hidden">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={4000}
                    transitionTime={1000}
                  >
                    <div>
                      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_hDIM8hz.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 1" />
                    </div>
                    <div>
                      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_29.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 2" />
                    </div>
                    <div>
                      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_10_nzfQMY7.jpg?format=webp&w=1500&dpr=1.7" alt="Banner 3" />
                    </div>
                  </Carousel>
                </div>
              )}
      {filter === 'shirts' && (
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-420250513131303.jpg?format=webp&w=1500&dpr=1.7"
          alt="Shirts Banner"
          className='w-full mb-8 rounded-xl shadow-md'
        />
      )}
      {filter === 'tshirts' && (
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-1220250429131812.jpg?format=webp&w=1500&dpr=1.7"
          alt="Tshirts Banner"
          className='w-full mb-8 rounded-xl shadow-md'
        />
      )}
      {filter === 'anime' && (
        <img
          src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FInsideBanner-desktop-NarutoShippuden-02-1744132179.jpg&w=1920&q=75"
          alt="Anime Banner"
          className='w-full mb-8 rounded-xl shadow-md'
        />
      )}

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {getFilteredItems().map((product, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300'
          >
            <img src={product.img} alt={product.title} className='h-60 w-full object-cover' />
            <div className='p-4'>
              <p className='font-semibold text-gray-800 mb-2'>{product.title}</p>
              {product.discount ? (
                <div className='flex items-center gap-2 mb-2'>
                  <p className='line-through text-gray-500'>₹{product.price}</p>
                  <p className='text-lg font-bold text-purple-800'>₹{product.discount}</p>
                  <p className='text-green-600 text-sm font-semibold'>
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
                className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition'
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

export default Women;