import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => (
    <div style={style} className={index % 2 ? "ListItemOdd" : "ListItemEven"}>
        Row {index}
    </div>
);

const Window = (show) => {
    return (
        <>
            <List
                height={150}
                itemCount={1000}
                itemSize={300}
                width={300}
                style={{
                    width: "100%",
                    height: show ? "80vh" : "100vh",
                }}
            >
                {Row}
            </List>
        </>
    );
};

export default Window;
