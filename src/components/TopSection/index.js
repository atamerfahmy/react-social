import { Grid } from '@mui/material';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { colors as colorPalette } from "../../constants";
import Card from '../Card';
import styles from "./TopSection.module.css";

function TopSection() {

    const theme = useSelector((state) => state.colorTheme);
    const colors = colorPalette[theme.value];

    let data = useMemo(() => {
        return [
            {
                type: "Facebook",
                name: "@nathanf",
                count: { name: "F O L L O W E R S", number: 1987 },
                rating: { type: "increase", by: 12 }
            },
            {
                type: "Twitter",
                name: "@nathanf",
                count: { name: "F O L L O W E R S", number: 1044 },
                rating: { type: "increase", by: 99 }
            },
            {
                type: "Instagram",
                name: "@realnathanf",
                count: { name: "F O L L O W E R S", number: "11k" },
                rating: { type: "increase", by: 1099 }
            },
            {
                type: "YouTube",
                name: "Nathan F.",
                count: { name: "S U B S C R I B E R S", number: 8239 },
                rating: { type: "decrease", by: 144 }
            }
        ]
    }, [])

    return (
        <div className={styles.container} style={{ background: `linear-gradient(${colors.TopBGPattern} 50%, ${colors.BG} 50%)`}}>
            <Grid container spacing={2} className={styles.grid_container}>
                {
                    data && data.map((item) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ p: "0px" }} >
                            <Card {...item} />
                        </Grid>
                    ))
                }
                {/* <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ p: "0px" }} >
                        <Card type={"Facebook"} name={"@nathanf"} count={{ name: "F O L L O W E R S", number: 1987 }} rating={{ type: "increase", by: 12 }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ p: "0px" }} >
                        <Card type={"Facebook"} name={"@nathanf"} count={{ name: "F O L L O W E R S", number: 1987 }} rating={{ type: "increase", by: 12 }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ p: "0px" }} >
                        <Card type={"Facebook"} name={"@nathanf"} count={{ name: "F O L L O W E R S", number: 1987 }} rating={{ type: "increase", by: 12 }} />
                    </Grid> */}
            </Grid>
        </div>
    );
}

export default TopSection;
