import React from 'react';
import '../../scss/modules/currency.scss';

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.validateValue = this.validateValue.bind(this);
    }

    validateValue(val) {
        return !isNaN(parseFloat(val)) && isFinite(val);
    }

    onChange(e) {
        let val = e.target.value;
        let unit = this.props.unit;
        this.props.onValChange(val, unit);
    }

    render() {
        const unit = this.props.unit;
        const val = this.props.val;
        return (
            <div className = 'inputCont'>
                <label><div className = 'labelName'>{unit}</div><input type = 'text' value={val} onChange={this.onChange}/></label>
            </div>
        )
    }
}