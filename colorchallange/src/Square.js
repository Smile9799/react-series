import React from 'react';

const Square = ({colorValue,hexValue, isDarkTest}) => {
    return (
        <section className="square"
                 style={{backgroundColor : colorValue, color : isDarkTest ? "white" : "black"}}>
            <p>
                {colorValue ? colorValue : "Empty value"}
            </p>
            <p>
                {hexValue ? hexValue : null}
            </p>
        </section>
    );
};
Square.defaultProps = {
    colorValue : "Empty Color Value"
}
export default Square;