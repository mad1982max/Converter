import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, Switch} from 'react-router-dom/';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import '../scss/main.scss';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import ContainerForInputList from './components/ContainerForInputList.jsx'
import MiddlContCurrFetch from './components/MiddlContCurrFetch.jsx'
import {dataConvert, navSectArr} from "./dataConvert.jsx";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = 'container'>
                    <Header />
                    <Nav navSectArr = {navSectArr} />
                    <Switch>
                        <Route path = '/currency' render = {() => <MiddlContCurrFetch currentChapter = 'currency' color = 'color_0' />} />
                        {navSectArr.map((item, i) => {
                            return item !== 'currency' && <Route path = {'/'+ item} key = {item.concat(i)}  render = {() => <ContainerForInputList dataConvert = {dataConvert[item]} currentChapter = {item} />}/>
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