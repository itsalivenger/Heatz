import DynamicTextComponent from '../../components/DynamicTextComponent/DynamicTextComponent';
import MediaDisplay from '../../components/ImageResponsive/MediaDisplay';
import ImageCarousel from '../../components/imagesCarousel/imagesCarousel';
import ProductPreview from '../../components/productPreview/productPreview';
import ImageBesidesText from '../../components/ImageBesidesText/imageBesidesText';
import ProductCard from '../../components/productCard/productCard';
import ImageGallery from '../../components/ImageGallery/imageGallery';
import styles from './ProductPage.module.css';

function ProductPage() {
    const images = [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
    ];
    const detailsData = [
        {
            label: 'Battery',
            desc: 'The ZG28 Gaming Headset features a 3.7V, 300mAh rechargeable battery, providing long-lasting power for extended gaming sessions and quick recharging for minimal downtime.',
        },
        {
            label: 'Sound Quality',
            desc: 'Experience immersive audio with crystal-clear highs and deep, rich bass. Perfect for gaming, music, and movies.',
        },
        {
            label: 'Comfort',
            desc: 'Designed with soft ear cushions and an adjustable headband for extended gaming sessions without discomfort.',
        },
        {
            label: 'Connectivity',
            desc: 'Seamless wireless connectivity with Bluetooth 5.0 and a range of up to 10 meters for hassle-free use.',
        }, {
            label: 'Battery',
            desc: 'The ZG28 Gaming Headset features a 3.7V, 300mAh rechargeable battery, providing long-lasting power for extended gaming sessions and quick recharging for minimal downtime.',
        },
        {
            label: 'Sound Quality',
            desc: 'Experience immersive audio with crystal-clear highs and deep, rich bass. Perfect for gaming, music, and movies.',
        },
        {
            label: 'Comfort',
            desc: 'Designed with soft ear cushions and an adjustable headband for extended gaming sessions without discomfort.',
        },
    ];
    const products = [
        {
            product: {
                imageSrc: './images/products/headset (1).png',
                title: 'Gaming Headset ZG28',
                description: 'Immersive sound with noise-canceling mic and comfortable ear cushions.',
                price: '59.99',
                note: 'Limited stock available',
            },
        },
        {
            product: {
                imageSrc: './images/products/headset (2).png',
                title: 'Mechanical Keyboard MK45',
                description: 'RGB backlighting, tactile switches, and durable design for gamers.',
                price: '89.99',
                note: 'Includes free keycap puller',
            },
        },
        {
            product: {
                imageSrc: './images/products/headset (3).png',
                title: 'Wireless Mouse WM10',
                description: 'Ergonomic design with adjustable DPI and long-lasting battery.',
                price: '29.99',
                note: 'Available in black and white',
            },
        },
        {
            product: {
                imageSrc: './images/products/headset (4).png',
                title: '4K Ultra HD Monitor 27"',
                description: 'Stunning 4K resolution, 144Hz refresh rate, and slim bezel design.',
                price: '299.99',
                note: 'Comes with HDMI and DisplayPort cables',
            },
        },
    ];



    return (
        <div>
            <div className={styles['productPageContainer']}>
                <ProductPreview />
                <DynamicTextComponent alignment={'left'} layout={'title-over-text'} title={'Ultra Wide Camera. Focus On Little Things'} text={'The new ultra wide camera with autofocus takes incredibely sharp, detailed marcro photos and videos. You can also frame more expansive scenes without taking a step back. and because it has a larger aperture and bigger pixels, it can capture up to 2.6x more light for higher image quality - even in low light'} />
                <ImageCarousel images={images} />
                <div className={styles['textSectionContainer']}>
                    <div className={styles['textSection']}>
                        <h1>lorem ipsum is simply dummy text of the printing and typesetting</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    </div>
                </div>
                <MediaDisplay type={'video'} src={'https://placehold.co/600x400'} />
                <ImageBesidesText imageSrc={'https://placehold.co/600x400'} title={'Lorem ipsum dolor sit amet'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                <ImageBesidesText reverse={true} imageSrc={'https://placehold.co/600x400'} title={'Lorem ipsum dolor sit amet'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />

                <div className={styles['detailsContainer']}>
                    <h2 className={styles.specificationsTitle}>Specifications.</h2>
                </div>
                {detailsData && detailsData.map((detail, index) => (
                    <DetailSection key={index} label={detail.label} description={detail.desc} />
                ))}
                <div className={styles.miniTitle}>
                    <h2>Get Similar Products</h2>
                </div>

                <div className={styles['similarProductsContainer'] + ' ' + styles['cardsContainer']}>
                    {products && products.map((product, index) => (
                        <ProductCard key={index} product={product.product} />
                    ))}
                </div>
            </div>

            <div>
                <ImageGallery images={images} />
            </div>
        </div>
    );
}


const DetailSection = ({ label, description }) => {
    return (
        <div className={styles.detailContainer}>
            <hr className={styles.horizontalLine} />
            <div className={styles.contentContainer}>
                <div className={styles.label}>{label}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};


export default ProductPage;