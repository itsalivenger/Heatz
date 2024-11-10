import ColoredDivider from "../components/coloredHr/coloredDivider";
import HeroCarousel from "../components/heroCarousel/herocarousel";
import HeroSection from "../components/heroSection/HeroSection";
import HeroText from "../components/heroText/heroText";
import ImageAndVideo from "../components/ImageAndVideo/imageAndVideo";
import ProductsCardsCarousel from "../components/ProductsCardsCarousel/productsCardsCarousel";
import ProductsCarousel from "../components/ProductsCarousel/productsCarousel";


const products = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Wireless Bluetooth Headphones',
      description: 'High-quality wireless headphones with noise cancellation and 20-hour battery life',
      price: 99.99
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Smart Fitness Watch',
      description: 'Track your health and fitness with this advanced smartwatch featuring heart rate monitoring',
      price: 149.99
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Portable Power Bank',
      description: '20000mAh high-capacity power bank with fast charging capabilities',
      price: 49.99
    },
    {
      id: 4,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Ultra HD Webcam',
      description: '4K webcam perfect for streaming and video conferencing with auto-focus',
      price: 79.99
    },
    {
      id: 5,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Mechanical Gaming Keyboard',
      description: 'RGB backlit mechanical keyboard with customizable keys and macro support',
      price: 129.99
    },
    {
      id: 6,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Ergonomic Mouse',
      description: 'Comfortable wireless mouse with adjustable DPI and ergonomic design',
      price: 39.99
    },
    {
      id: 7,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'USB-C Hub',
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, and card reader ports',
      price: 59.99
    },
    {
      id: 8,
      imageSrc: 'https://via.placeholder.com/150',
      note: 'best seller',
      title: 'Wireless Charging Pad',
      description: 'Fast wireless charging pad compatible with all Qi-enabled devices',
      price: 29.99
    }
  ];
function Home() {
    
    return (
        <div>
            <HeroSection />
            <HeroText heading={"Boost Up Your Gaming Experience"} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} />
            <HeroCarousel />
            <ProductsCardsCarousel />
            <ProductsCarousel products={products} />
            <ColoredDivider />
            <ImageAndVideo img={"./images/flayers/sample.png"} vid={"./videos/heroVid.mp4"} />
            <HeroText heading={"Boost Up Your Gaming Experience"} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} />
            <HeroCarousel />
            <ProductsCardsCarousel />
            <ProductsCarousel products={products} />
            <ColoredDivider />
            <ImageAndVideo img={"./images/flayers/sample.png"} vid={"./videos/heroVid.mp4"} />
            <HeroText heading={"Trending Products"} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} />

        </div>
    );
}

export default Home;