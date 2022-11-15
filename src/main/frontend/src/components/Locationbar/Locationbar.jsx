import React, { useState, useEffect } from "react";
import { faLocationDot, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from "../shared/Card/Card";
import Icon from "../shared/Icon/Icon";
import styles from "./Locationbar.module.css";

export default function Locationbar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) => res.data)
      .then((items) => {
        console.log(items);
        setData(items);
      });
  }, []);

  const cardStyle = {
    width: "378px",
    height: "60px",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  return (
    <div>
      <Card cardStyle={cardStyle}>
        <Icon icon={faLocationDot} size={18} />
        {/* <div className={styles.location}>서울특별시 강남구 신사동</div> */}
        <ul className={styles.location}>
          {data.map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <Icon icon={faAngleDown} size={18} />
      </Card>
    </div>
  );
}
