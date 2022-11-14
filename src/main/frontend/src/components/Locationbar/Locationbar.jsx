import React from 'react';
import { faLocationDot, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from '../shared/Card/Card';
import Icon from '../shared/Icon/Icon';
import styles from './Locationbar.module.css'

export default function Locationbar() {
    const cardStyle = {
        width: "378px",
        height: "60px",
        justifyContent: 'space-between',
        cursor: 'pointer',
    };

    return (
        <Card cardStyle={cardStyle}>
            <Icon icon={faLocationDot} size={18} />
            <div className={styles.location}>서울특별시 강남구 신사동</div>
            <Icon icon={faAngleDown} size={18} />
        </Card>
    );
}

