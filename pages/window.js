import React from "react";
import Window from "../components/Window";
import styles from "../styles/Home.module.css";

const window = () => {
    return (
        <div className={styles.main}>
            <Window />
        </div>
    );
};

export default window;
