let ReactDOM = require('react-dom');
let React = require('react');

let Router = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Switch = require('react-router-dom').Switch;

import '../scss/main.scss';

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Length from './components/Length.jsx';
import CurrenciesContainer from './components/CurrenciesContainer.jsx';

class App extends React.Component {
    render() {
        let opt = 5;
        return (
            <Router>
                <div className = 'container'>
                    <Header />
                    <Nav />
                    <Switch>
                        <Route path="/currency" component={CurrenciesContainer} />
                        <Route path="/length" render = {() => <Length num = {opt}/>} />

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