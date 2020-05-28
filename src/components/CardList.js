import React from "react";
import Card from "./Card";

const CardList = ({data, categories}) => {
    return (
        <>
            {
                categories.map((category, key) => (
                    <div key={key}>
                        <h1 className="card-list-title">{category.title}</h1>
                        <div className="card-list">
                            {
                                data[category.name].map((api, key) =>
                                    <Card
                                        key = {key}
                                        title={api.name}
                                        description={api.description}
                                        url={api.link}
                                        auth={api.auth}
                                        http={api.HTTPS}
                                        cors={api.CORS}
                                    />
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default CardList;