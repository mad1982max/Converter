import React from 'react';
import {currencyQueryObj} from "../dataConvert.jsx";
import ContainerForInputList from './ContainerForInputList.jsx'

export default class MiddlContCurrFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curExchObj: {}};
    }
    componentDidMount() {
        return fetch(currencyQueryObj.url)
            .then(res => res.json())
            .then(data => {
                this.setState({curExchObj: data})
            })
            .catch(error => console.error(error));
    }
    render() {
        return(
            <ContainerForInputList dataConvert = {this.state.curExchObj}
    currentChapter = {this.props.currentChapter}  />
        )
    }
}