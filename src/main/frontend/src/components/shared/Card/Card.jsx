import React from "react";
import styles from "./Card.module.css";

export default function Card({ selected, cardStyle, children }) {
  return (
    <div
      className={`${
        selected ? [styles.card, styles.selected].join(" ") : styles.card
      }`}
      style={cardStyle}
    >
      {children}
    </div>
  );
}
