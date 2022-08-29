import React from 'react';
import { useSelector } from 'react-redux';
import { colors as colorPalette } from "../../constants";
import styles from "./SecondaryCard.module.css";

function SecondaryCard(props) {

    const theme = useSelector((state) => state.colorTheme);
    const colors = colorPalette[theme.value];

    return (
        <div className={styles.container} style={{ backgroundColor: colors.CardBG }}>
            <div className={styles.sub_container}>
                <div className={styles.flex_row}>
                    <div><p className={styles.type} style={{ color: colors.Text}}>{props.name}</p></div>
                    <div>i</div>
                </div>
                <div className={styles.flex_row}>
                    <div><h2 className={styles.number} style={{ color: colors.SecondaryText}}>{props.count}</h2></div>
                    <div><p className={styles.rating} style={{ color: props.rating.type === "increase" ? colors.LimeGreen : colors.BrightRed }}>{props.rating.by}</p></div>
                </div>
            </div>
        </div>
    );
}

export default SecondaryCard;
