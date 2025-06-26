import { useSearch } from './SearchContext';
import { useCart } from './CartContext';

function SearchResults() {
  const { searchQuery } = useSearch();
  const { addToCart } = useCart();
//   const [searchTerm, setSearchTerm] = useState('');


  // Combine all product arrays from Mens, Women, Sneakers
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

  // ✅ Flatten all product arrays into a single array
  const allItems = Object.values(allProducts).flat();

  // ✅ Filter by search query
  const filtered = allItems.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="pt-20 px-6">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for "{searchQuery}"
      </h2>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                alt={product.title}
                className="h-60 w-full object-cover rounded-md"
              />
              <p className="font-bold mt-2">{product.title}</p>
              <p className="text-gray-700">₹{product.discount || product.price}</p>
              <button
                onClick={() =>
                  addToCart({ ...product, price: product.discount || product.price })
                }
                className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
