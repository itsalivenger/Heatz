import React from 'react';
import styles from './productCard.module.css';

const ProductCard = ({product: { imageSrc, title, description, price, note }}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.productImage} />
        <div className={styles.iconsContainer}>
          <span className={`material-symbols-outlined ${styles.icon} ${styles.heartIcon}`}>favorite</span>
          <span className={`material-symbols-outlined ${styles.icon} ${styles.cartIcon}`}>shopping_cart</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.note}>{note}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price} DH</p>
      </div>
    </div>
  );
};

export default ProductCard;
