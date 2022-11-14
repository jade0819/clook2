import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, size, color }) {

    const style = {
        fontSize: `${size ? size : "18"}px`,
        color: `${color ? color : "var(--color-brand)"}`,
    };
    
    return <FontAwesomeIcon icon={icon} style={style} />;
}

