import React from "react";
import styles from "./Card.module.css";

export default function Card({ cardStyle, children }) {
  return (
    <div className={styles.card} style={cardStyle}>
      {children}
    </div>
  );
}
