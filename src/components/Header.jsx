import React from "react";

export const Header = ({ headerText, headerType }) => {
    const createHeader = () => {
        switch (headerType) {
            case "h1":
                return <h1>{headerText}</h1>;
            case "h2":
                return <h2>{headerText}</h2>;
            case "h3":
                return <h3>{headerText}</h3>;
            case "h4":
                return <h4>{headerText}</h4>;
            case "h5":
                return <h5>{headerText}</h5>;
            case "h6":
                return <h6>{headerText}</h6>;
            default:
                return <h1>headerText</h1>; 
        }
    };

    return createHeader();
};
