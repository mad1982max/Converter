import React from 'react';
import InputList from './InputList.jsx';
import '../../scss/modules/inputUnit.scss';
import {currencyQueryObj} from '../dataConvert.jsx';

export default class ContainerForInputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: '', val: ''};

        this.round = this.round.bind(this);
        this.findValArr = this.findValArr.bind(this);
        this.convert = this.convert.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
    }
    round(val, decPlace) {
        let mult = Math.pow(10, decPlace);
        return Math.round(val * mult) / mult;
    }

    findValArr() {
        let dataObj = this.props.dataConvert;
        let keysArr = Object.keys(dataObj);
        let unitsArr = [];
        keysArr.forEach(item => {
            unitsArr.push(item.split('_')[1])
        });
        return unitsArr;
    }

    convert(initMeasure, mainMeasure, currentMeasure, val) {
        let separator = initMeasure === currencyQueryObj.mainCurrency ? '' : '_';
        if (this.state.unit !== '') {
            let ratioObj = this.props.currentChapter === 'currency'? this.props.dataConvert.quotes: this.props.dataConvert;
            let ratio1 = ratioObj[initMeasure + separator + mainMeasure];
            let ratio2 = ratioObj[initMeasure + separator + currentMeasure];
            return this.round(val / ratio1 * ratio2, 3);
        } else {
            return val
        }
    }

    onChangeState(num, unit) {
        this.setState({unit: unit, val: num})
    }

    render() {
        let valArr = this.props.currentChapter === 'currency' ? currencyQueryObj.currencies: this.findValArr();
        let initMeasure = this.props.currentChapter === 'currency' ? currencyQueryObj.mainCurrency: valArr[0];
        let val = this.state.val;
        let unit = this.state.unit;

        return (
            <div className='containerForInputs'>
                {valArr.map((item, i) => {
                    let curVal = unit === item ? val : this.convert(initMeasure, unit, item, val);
                    return <InputList key={item + i} unit={item} value={curVal} onValChange={this.onChangeState}/>
                })}
            </div>
        )
    }
}




