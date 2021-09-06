import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {StatPage} from './pages/StatPage';
import {ConfigPage} from './pages/ConfigPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/stat">
                        <StatPage/>
                    </Route>
                    <Route path="/config">
                        <ConfigPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
