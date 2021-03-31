import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

//*Components
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import FullCrypto from './components/FullCrypto/FullCrypto';


const App:FC = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/crypto/:cryptoslug" component={FullCrypto} exact/>
            </Switch>
        </Router>
    )
}

export default App;