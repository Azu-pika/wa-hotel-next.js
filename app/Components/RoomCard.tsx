// RoomCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

interface RoomCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageClassName?: string;
  imageContainerClassName?: string; //  PROP
  width?: number;   // PROP: width of the image
  height?: number;  // PROP: height of the image

}

const RoomCard: React.FC<RoomCardProps> = ({ imageSrc, title, description, imageClassName,  imageContainerClassName, width = 300, height = 200 }) => { // Set default values

  return (
    <div className={styles.roomCard}>
      <div className={`${styles.roomImageContainer} ${imageContainerClassName || ''}`}> {/* Apply the new class */}
        <Image
          src={imageSrc}
          alt={title}
          width={width}  // Use dynamic width
          height={height} // Use dynamic height
          className={`${styles.roomImage} ${imageClassName || ''}`}
        />
        <div className={styles.roomDetails}>
          <h3 className={styles.roomTitle}>{title}</h3>
          <p className={styles.roomDescription}>{description}</p>
        </div>
     </div>
    </div>
  );
};

export default RoomCard;
