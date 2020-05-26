import React from "react";

const Header = ({title, subtitle}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default Header;