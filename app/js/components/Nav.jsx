import React from 'react';
import Link from 'react-router-dom/Link';
import '../../scss/modules/nav.scss';
import '../../scss/main.scss';

export default class Nav extends React.Component {
    addNavItemColor(e) {
        let colorClass = e.target.className;
        let navCont = document.querySelector('nav');
        navCont.className = colorClass;
    }

    render() {
        let navValArr = this.props.navSectArr;
        return (
            <div>
                <nav>
                    {navValArr.map((item, i) => {
                        return <Link key = {item.concat(i)} to = {'/'+item} className = {'color_' + i} onClick={this.addNavItemColor}>{item}</Link>
                    })}
                </nav>
            </div>
        )
    }
}