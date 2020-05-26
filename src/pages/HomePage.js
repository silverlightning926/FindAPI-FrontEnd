import React, {Component} from "react";

// Component Imports
import Header from "../components/Header";
import Card from "../components/Card";

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <>
                <Header title="Find API" subtitle="Find Your API"/>

                <div className="page-body">
                    <Card/>
                </div>
            </>
        )
    }
}

export default HomePage;