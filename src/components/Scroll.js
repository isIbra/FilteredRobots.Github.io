import React from "react";

const Scroll = (porps) => {
    return (
        <div style={{ overflow: 'scroll', border: '2px solid black', height: '500px' }}>
            {porps.children}
        </div>
    );
};

export default Scroll;