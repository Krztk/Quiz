import React, { FC } from 'react';
import styles from './Card.module.scss';

const Card: FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Card;
