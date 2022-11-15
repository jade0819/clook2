import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Card from "../shared/Card/Card";
import Icon from "../shared/Icon/Icon";
import iconWeather from "../../assets/imgs/weather.png";
import character from "../../assets/imgs/character.png";
import styles from "./Main.module.css";

export default function Main() {
  const cardStyle = {
    width: "100%",
    height: "80px",
  };

  return (
    <section className={styles.main}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.today}>
            <img src={iconWeather} alt="" />
            <span>10월 17일 (월)</span>
          </div>
          <div className={styles.temperature}>
            <span>30</span>
            <span>°C</span>
          </div>
          <div className={styles.maxmin}>
            <div className={styles.min}>
              최저<span>30</span>°C
            </div>
            <div className={styles.max}>
              최고<span>30</span>°C
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={character} alt="" />
        </div>
      </div>
      <Card cardStyle={cardStyle}>
        <div className={styles.icon}>
          <Icon icon={faBell} size={26} />
        </div>
        <span className={styles.span}>5시간 뒤에 비 소식이 있어요.</span>
      </Card>
    </section>
  );
}
