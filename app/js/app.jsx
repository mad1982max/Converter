let ReactDOM = require('react-dom');
let React = require('react');

let Router = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Switch = require('react-router-dom').Switch;

import '../scss/main.scss';

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import CurrenciesContainer from './components/CurrenciesContainer.jsx';
import OtherChaptContainer from './components/otherChaptContainer.jsx';

import {dataConvert, navSectArr} from "./dataConvert.jsx";



class App extends React.Component {
    render() {

        return (
            <Router>
                <div className = 'container'>
                    <Header />
                    <Nav navSectArr = {navSectArr} />
                    <Switch>
                        <Route path="/currency" component={CurrenciesContainer} />
                        {navSectArr.map((item, i) => {
                            return <Route path = {'/'+ item} key = {item.concat(i)} render = {() => <OtherChaptContainer dataConvert = {dataConvert[item]} />} />
                        })}
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);