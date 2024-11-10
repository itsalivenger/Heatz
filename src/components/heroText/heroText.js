import React from 'react';
import styles from './heroTextComponent.module.css';

const HeroTextComponent = ({ heading, description, structure='', position, width }) => {
  // position can be string= left or right
  // structure can be string= row or column
  return (
    <div className={`${styles.heroContainer} ${styles[structure + 'container']}`}>
      <div className={`${styles.textSection} ${styles[structure]} ${styles[position]} ${styles[width]}`}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroTextComponent;
