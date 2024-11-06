import HeroCarousel from "../components/heroCarousel/herocarousel";
import HeroSection from "../components/heroSection/HeroSection";
import HeroText from "../components/heroText/heroText";

function Home() {
    return (
        <div>
            <HeroSection />
            <HeroText heading={"Boost Up Your Gaming Experience"} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} />
            <HeroCarousel />
        </div>
    );
}

export default Home;