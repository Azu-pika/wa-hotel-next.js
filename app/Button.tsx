// Button.tsx

'use client';

//import React, { useCallback } from 'react'; 
import React from 'react';
import styles from './page.module.css'; // Or create a separate module for the button

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <div className={styles.component4} onClick={onClick}>
      <div className={styles.text4}>{children}</div>
    </div>
  );
};

export default Button;