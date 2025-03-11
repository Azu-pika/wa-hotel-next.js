// RoomCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';

interface RoomCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageClassName?: string;
  imageContainerClassName?: string; // NEW PROP
}

const RoomCard: React.FC<RoomCardProps> = ({ imageSrc, title, description, imageClassName,  imageContainerClassName }) => {
  return (
    <div className={styles.roomCard}>
      <div className={`${styles.roomImageContainer} ${imageContainerClassName || ''}`}> {/* Apply the new class */}
        <Image
          src={imageSrc}
          alt={title}
          width={300} // Explicit width
          height={200} // Explicit height
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
