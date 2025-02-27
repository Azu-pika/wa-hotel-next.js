// RoomCard.tsx
import React from 'react';
import styles from '../app/page.module.css'; // [CHANGED] Corrected import path

interface RoomCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.roomCard}>
            <img src={imageSrc} alt={title} className={styles.roomImage} />
            <div className={styles.roomDetails}>
                <h3 className={styles.roomTitle}>{title}</h3>
                <p className={styles.roomDescription}>{description}</p>
            </div>
        </div>
    );
};

export default RoomCard;
