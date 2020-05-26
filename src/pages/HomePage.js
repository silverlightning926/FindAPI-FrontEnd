import React, {Component} from "react";

// Component Imports
import Header from "../components/Header";
import CardList from "../components/CardList";

class HomePage extends Component {

    state = {
        data: [],
        loading: true
    }

    async componentDidMount() {
        window.scrollTo(0,0);
        this.setState({loading: true});
        fetch('/all')
            .then(data => data.json()).then(data => this.setState({data, loading: false}));
    }

    render() {
        return (
            <>
                <Header title="Find API" subtitle="Find Your API"/>

                <div className="page-body">
                    {
                        this.state.loading ? <div style={{textAlign: "center"}}>Loading...<br/></div> : <CardList data={this.state.data}/>
                    }
                </div>
            </>
        )
    }
}

export default HomePage;