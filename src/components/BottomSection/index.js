import { Grid } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { colors as colorPalette } from "../../constants";
import Card from '../Card';
import SecondaryCard from '../SecondaryCard';
import styles from "./BottomSection.module.css";

function BottomSection() {

    const theme = useSelector((state) => state.colorTheme);
    const colors = colorPalette[theme.value];

    let data = useMemo(() => {
        return [
            {
                type: "Facebook",
                name: "Page Views",
                count: 87,
                rating: { type: "increase", by: "3%" }
            },
            {
                type: "Facebook",
                name: "Likes",
                count: 52,
                rating: { type: "decrease", by: "2%" }
            },
            {
                type: "Instagram",
                name: "Likes",
                count: "5462",
                rating: { type: "increase", by: "2257%" }
            },
            {
                type: "Instagram",
                name: "Profile Views",
                count: "52k",
                rating: { type: "increase", by: "1375%" }
            },
            {
                type: "Twitter",
                name: "Retweets",
                count: 117,
                rating: { type: "increase", by: "303%" }
            },
            {
                type: "Twitter",
                name: "Likes",
                count: 507,
                rating: { type: "increase", by: "553%" }
            },
            {
                type: "YouTube",
                name: "Likes",
                count: 107,
                rating: { type: "decrease", by: "19%" }
            },
            {
                type: "YouTube",
                name: "Total Views",
                count: 1407,
                rating: { type: "decrease", by: "12%" }
            }
        ]
    }, [])

    return (
        <div style={{ backgroundColor: colors.BG }}>
            <div className={styles.container}>
                <h2 className={styles.title} style={{ color: colors.secondaryTitle}}>OverView - Today</h2>
                <Grid container spacing={2} className={styles.grid_container}>
                    {
                        data && data.map((item) => (
                            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ p: "0px" }} >
                                <SecondaryCard {...item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
}

export default BottomSection;
