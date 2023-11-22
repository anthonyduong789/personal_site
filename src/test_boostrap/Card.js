import React from 'react';
import styles from './Card.module.scss';




const SearchIcon = ({ width, height, fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 256 256">
    <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"></path>
  </svg>
);


const Card = ({ id, image, onSelect }) => {
  return (
    <div className={styles.card} onClick={() => onSelect(id)}>
      <div className={styles.imgBackground}>
      <img className={styles.img} src={image} alt={`Card ${id}`}/>
      </div>
      
      <div className={styles.iconOverlay}>
        <SearchIcon width={80} height={80} fill={"white"} />
      </div>
   
     
   
    </div>
  );
};

export default Card;
