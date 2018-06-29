import React from 'react';

import Currency from './Currency.jsx';
import '../../scss/modules/currencies.scss';

export default class Currencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: '', val: ''};
        this.onChangeState = this.onChangeState.bind(this);
        this.convert = this.convert.bind(this);
        this.round = this.round.bind(this);
    }

    round(val, decPlace) {
        let mult = Math.pow(10, decPlace);
        return Math.round(val*mult)/mult;
    }

    convert(mainCurr, currentCurr, val) {
        if (this.state.unit !== '') {
            console.log(this.props.curExchObj.quotes);
            let currRatObj = this.props.curExchObj.quotes;
            let ratio1 = currRatObj['USD'.concat(mainCurr)];
            let ratio2 = currRatObj['USD'.concat(currentCurr)];
            return this.round(val/ratio1*ratio2, 2);
        } else {return val}
    }

    onChangeState(num, unit) {
        this.setState({unit: unit, val: num})
    }

    render() {
        const arrCurr = ["USD", "UAH", "EUR", "CHF", "RUB", "JPY", "GBP"];
        const unit = this.state.unit;
        const val = this.state.val;

        return(
            <div className = 'mainCont'>
                {arrCurr.map((item, i) => {
                    let curVal = unit === item? val: this.convert(unit, item, val);
                    return <Currency key = {item.concat(i)} unit = {item} val = {curVal} onValChange = {this.onChangeState}/>
            })}
            </div>
        )
    }
}
