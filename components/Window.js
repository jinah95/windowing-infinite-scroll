import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const Window = () => {
    return (
        <>
            <List height={150} itemCount={1000} itemSize={300} width={300}>
                {Row}
            </List>
        </>
    );
};

export default Window;
