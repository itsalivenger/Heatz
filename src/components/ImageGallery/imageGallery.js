import Slider from 'react-slick';
import styles from './imageGallery.module.css'; // Import your modular CSS for additional styling


const images = [
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 1",
      placeholder: "Loading image 1...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 2",
      placeholder: "Loading image 2...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 3",
      placeholder: "Loading image 3...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 4",
      placeholder: "Loading image 4...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 5",
      placeholder: "Loading image 5...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 6",
      placeholder: "Loading image 6...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 7",
      placeholder: "Loading image 7...",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200",
      imgAlt: "Placeholder image 8",
      placeholder: "Loading image 8...",
    },
  ];
  
const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images per slide
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 images on medium screens
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 images on small screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 image on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["carousel-container"]}>
      <Slider {...settings}>
        {
            images.map((image, index) => (
              <div key={index}>
                <img className={styles["carousel-image"]} src={image.imgSrc} alt={image.imgAlt} />
              </div>
            ))
        }
      </Slider>
    </div>
  );
};

export default ImageCarousel;
