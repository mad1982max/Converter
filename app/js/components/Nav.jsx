import React from 'react';
import Link from 'react-router-dom/Link';
import '../../scss/modules/nav.scss';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.changeBorder = this.changeBorder.bind(this);
    }

    changeBorder(e) {
        let colorClass = e.target.className;
        let navCont = document.querySelector('nav');
        navCont.className = colorClass;
        navCont.style.borderTopWidth = '10px';
        navCont.style.borderBottomWidth = '10px';
    }

    render() {
        let navValArr = ['currency', ...this.props.navSectArr];
        let colorBGClass = 'color';
        return (
            <div>
                <nav>
                    {navValArr.map((item, i) => {
                        return <Link key = {item.concat(i)} to = {'/'+item} className = {colorBGClass + i} onClick={this.changeBorder}>{item}</Link>
                    })}

                </nav>
            </div>
        )
    }
}