import React from 'react';
import '../../scss/modules/inputUnit.scss';

export default class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let val = e.target.value;
        let unit = this.props.unit;
        this.props.onValChange(val, unit);
    }

    render() {
        let unit = this.props.unit;
        const val = this.props.value;
        let colorClass = document.querySelector('nav').className;

        return(
            <div className = {`inputCont ` + colorClass}>
                <label><div className = 'labelName'>{unit}</div><input type = 'text' value={val} onChange={this.onChange}/></label>
            </div>
        )
    }
}