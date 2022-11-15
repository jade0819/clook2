import React, { useEffect, useRef, useState } from "react";
import Main from "../../components/Main/Main";
import styles from "./Weather.module.css";

export default function Weather() {
  return (
    <div className={styles.weather}>
      <div className={styles.container}>
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
      </div>
    </div>
  );
}
