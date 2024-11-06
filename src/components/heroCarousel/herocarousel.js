import React from 'react';
import Slider from 'react-slick';
import styles from './heroCarousel.module.css';

const items = [
  {
    title: "Boost up your Audio experience.",
    description: "Experience immersive audio with cutting-edge technology. Perfect for gaming and music enthusiasts.",
    buttonText: "Learn more",
    backgroundImage: './images/slide1.png',
  },
  {
    title: "Revolutionize your Game Setup.",
    description: "Discover the ultimate gaming setup tailored for high performance and seamless play.",
    buttonText: "Shop now",
    backgroundImage: './images/slide2.png',
  },
  {
    title: "Enhance Visual Clarity.",
    description: "Unleash the true potential of 4K visuals with our latest displays and graphics.",
    buttonText: "Explore",
    backgroundImage: './images/slide3.png',
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={styles.carouselContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.slide} style={{ backgroundImage: `url(${item.backgroundImage})` }}>
          <div className={styles.overlay}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <button className={styles.button}>{item.buttonText}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default HeroCarousel;
