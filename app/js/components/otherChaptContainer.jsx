import React from 'react';

import ChaptContainer from './chapterContainer.jsx';
import '../../scss/modules/currencies.scss';

export default class OtherChaptContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {unit: '', val: ''};
        this.onChangeState = this.onChangeState.bind(this);
        this.findValArr = this.findValArr.bind(this);
        this.convert = this.convert.bind(this);
        this.round = this.round.bind(this);
    }

    round(val, decPlace) {
        let mult = Math.pow(10, decPlace);
        return Math.round(val*mult)/mult;
    }

    convert(initMeasure, mainMeasure, currentMeasure, val) {
        if (this.state.unit !== '') {
            let currRatObj = this.props.dataConvert;
            let ratio1 = currRatObj[initMeasure + '_' + mainMeasure];
            let ratio2 = currRatObj[initMeasure + '_' + currentMeasure];
            return this.round(val/ratio1*ratio2, 3);
        } else {return val}
    }

    findValArr() {
        let dataObj = this.props.dataConvert;
        let keysArr = Object.keys(dataObj);
        //let firstUnit = keysArr[0].slice(0, keysArr[0].search('_'));
        let unitsArr = [];

        keysArr.forEach(item => {
            unitsArr.push(item.split('_')[1])
        });
        //unitsArr = [firstUnit, ...unitsArr];
        return unitsArr;
    }

    onChangeState(num, unit) {
        this.setState({unit: unit, val: num})
    }

    render() {
        let valArr = this.findValArr();
        let val = this.state.val;
        let unit = this.state.unit;

        return(
            <div className = 'mainCont'>
                {valArr.map((item, i) => {
                    //console.log(unit, item);
                    let curVal = unit === item? val: this.convert(valArr[0], unit, item, val);
                    return <ChaptContainer key = {item + i} unit = {item} value = {curVal} onValChange = {this.onChangeState} />
                })}
            </div>


        )
    }

}