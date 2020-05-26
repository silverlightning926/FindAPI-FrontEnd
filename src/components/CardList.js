import React from "react";
import Card from "./Card";

const CardList = ({data}) => {

    const categories =
        [
            {title: "Animals", name: "animals"},
            {title: "Anti-Malware", name: "anti-malware"},
            {title: "Art & Design", name: "art-design"},
            {title: "Books", name: "books"}
        ];

    return (
        <>
            {
                categories.map(category => (
                    <>
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
                                        http={api.HTTP}
                                        cors={api.CORS}
                                    />
                                )
                            }
                        </div>
                    </>
                ))
            }
        </>
    );
}

export default CardList;