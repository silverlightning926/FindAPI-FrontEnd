import React from "react";

const Card = ({url, title, description, auth, http, cors}) => {
    return (
        <a href={url} className="card-link">
            <div className="card">
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                    <div className="auth-div">
                        Auth: {auth}
                    </div>
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