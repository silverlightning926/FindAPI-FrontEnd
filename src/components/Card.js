import React from "react";

const Card = ({url, title, description, auth, http, cors}) => {

    function getAuth() {
        if(auth === "apiKey")
        {
            return <p>API Key</p>
        }

        else if(auth === "OAuth")
        {
            return <p>OAuth</p>
        }

        else {
            return <p>None</p>
        }
    }

    return (
        <a href={url} className="card-link">
            <div className="card">
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                    <p style={{fontSize: "13.5px", marginLeft: "10px"}}>
                        Auth: {getAuth()}
                    </p>
                    <div className="card-tags">
                        {http? <p>HTML</p> : null}
                        {cors? <p>CORS</p> : null}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card;