import React from 'react';
import styles from './DynamicTextComponent.module.css';

const DynamicTextComponent = ({ alignment, layout, title, text }) => {
  const alignmentClass = styles[alignment] || '';
  const layoutClass = styles[layout] || '';

  return (
    <div className={`${styles.container} ${alignmentClass} ${layoutClass}`}>
      {layout === 'title-over-text' ? (
        <div className={styles.titleOverText}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      ) : (
        <div className={styles.titleBesidesText}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicTextComponent;

