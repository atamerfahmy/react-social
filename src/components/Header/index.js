import React, { useContext } from 'react';
import Switch from '../Switch';
import styles from "./Header.module.css";
import { toggle } from '../../redux/slices/ColorTheme';
import { useDispatch } from "react-redux";
import { ThemeContext } from '../../context';

function Header() {

    const dispatcher = useDispatch();

    const handleToggle = (e) => {
        dispatcher(toggle());
    }
    
    const colors = useContext(ThemeContext);

    return (
        <div className={styles.container} style={{ backgroundColor: colors.TopBGPattern }}>
            <div>
                <h2 className={styles.title} style={{ color: colors.SecondaryText }}>Social Media Dashboard</h2>
                <p className={styles.total_followers} style={{ color: colors.Text }}>Total Followers: 24,004</p>
            </div>
            <div className={styles.switch_container}>
                <p className={styles.total_followers} style={{ color: colors.Text}}>Dark Mode</p>
                <Switch onChange={handleToggle} />
            </div>

        </div>
    );
}

export default Header;
