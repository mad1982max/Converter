import React from 'react';
import Currencies from "./Currencies.jsx";

export default class CurrenciesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curExchObj: {}};
    }


    componentDidMount() {
        return fetch('http://www.apilayer.net/api/live?access_key=5706b7d9e84a05cfaf5a763575cab5bb')
            .then(res => res.json())
            .then(data => {
                this.setState({curExchObj: data})
            })
            .catch(error => console.error(error));
    }

    render() {
        return <Currencies curExchObj = {this.state.curExchObj} />
    }
}