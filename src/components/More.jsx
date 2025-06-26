import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImSpinner2 } from "react-icons/im";


const allImages = [
  'clark-street-mercantile-P3pI6xzovu0-unsplash.jpg',
  'priscilla-du-preez-my5cwTzhmNI-unsplash.jpg',
  'nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg',
  'pexels-thelazyartist-1300550.jpg',
   'pexels--rahulshah--899357.jpg',
   'pexels-dom-j-7304-45982.jpg',
   'pexels-olly-720606.jpg',
   'pexels-solliefoto-298863.jpg',
   'priscilla-du-preez-my5cwTzhmNI-unsplash.jpg',

 
];

function More() {
  const [images, setImages] = useState(allImages.slice(0, 3));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreImages = () => {
    setTimeout(() => {
      const currentLength = images.length;
      const more = allImages.slice(currentLength, currentLength + 3);
      setImages(prev => [...prev, ...more]);
      if (currentLength + more.length >= allImages.length) {
        setHasMore(false);
      }
    }, 1000);
  };

  const loader = (
    <div className="flex items-center justify-center gap-2 p-2">
      <ImSpinner2 className="animate-spin text-blue-600 text-xl" />
      <p>Loading new images</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Upcoming Surprise Drop</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreImages}
        hasMore={hasMore}
        loader={loader}
        endMessage={
          <p className="text-center text-gray-600 mt-4">
            <b>No more images to show!</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="bg-white rounded shadow">
              <img src={img} alt={`Image ${index}`} className="w-full h-auto rounded" />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default More;
