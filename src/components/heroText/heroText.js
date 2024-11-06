import React from 'react';
import styles from './heroTextComponent.module.css';

const HeroTextComponent = ({ heading, description }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroTextComponent;
