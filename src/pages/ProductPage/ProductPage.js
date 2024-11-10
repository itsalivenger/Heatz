import HeroText from '../../components/heroText/heroText';
import MediaDisplay from '../../components/ImageResponsive/MediaDisplay';
import ProductPreview from '../../components/productPreview/productPreview';
import styles from './ProductPage.module.css';

function ProductPage() {
    return (
        <div className={styles['productPageContainer']}>
            <ProductPreview />
            <HeroText structure={'column'} heading={'Ultra Wide Camera. Focus On Little Things'} description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} />
            <MediaDisplay type={'image'} src={'./images/flayers/sample.png'}/>
        </div>
    );
}

export default ProductPage;