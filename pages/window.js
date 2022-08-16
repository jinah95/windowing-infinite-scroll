import React, { useState } from "react";
import Window from "../components/Window";
import styles from "../styles/Home.module.css";

const window = () => {
    const [show, setShow] = useState(true);
    return (
        <div className={styles.windowMain}>
            {show && (
                <div style={{ height: "5000px", width: "100%" }}>
                    안녕하세요
                    안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                </div>
            )}
            <div
                style={{
                    top: 0,
                    left: 0,
                    height: "20vh",
                    width: "100%",
                }}
            >
                안녕하세요
                <button onClick={(e) => setShow((cur) => !cur)}>
                    클릭하세요!
                </button>
            </div>
            <Window show={show} />
        </div>
    );
};

export default window;
