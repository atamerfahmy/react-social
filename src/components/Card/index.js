import React from 'react';
import { useSelector } from 'react-redux';
import { colors as colorPalette } from "../../constants";
import styles from "./Card.module.css";

function Card(props) {

    const theme = useSelector((state) => state.colorTheme);
    const colors = colorPalette[theme.value];

    return (
        <div className={styles.container} style={{ backgroundColor: colors.CardBG }}>
            <div className={styles.topNotch} style={{ background: colors[props.type] }}></div>
            <div className={styles.sub_container}>
                <div><p className={styles.username} style={{ color: colors.Text}}>{props.name}</p></div>
                <div><h1 style={{ margin: "0px", fontSize: "40px", color: colors.SecondaryText }}>{props.count.number}</h1></div>
                <div><p className={styles.subscription} style={{ color: colors.Text}}>{props.count.name}</p></div>
                <div><p className={styles.rating} style={{ color: props.rating.type === "increase"? colors.LimeGreen : colors.BrightRed}}>{props.rating.by} Today</p></div>
            </div>
        </div>
    );
}

export default Card;
