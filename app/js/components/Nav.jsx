import React from 'react';
import Link from 'react-router-dom/Link';
import '../../scss/modules/nav.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to = '/currency' className = "divCol_1 ">Currency</Link>
                    <Link to = '/length' className = "divCol_2 ">Length</Link>
                    <Link to = '/weight' className = "divCol_3 ">Weight</Link>
                    <Link to = '/volume' className = "divCol_4 ">Volume</Link>
                </nav>
            </div>
        )
    }
}