import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

//*Components
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import FullCrypto from './components/FullCrypto/FullCrypto';
import NewsContainer from './components/NewsContainer/NewsContainer';
import AllTheSlugs from './components/allSlugs/allSlugs';

const App:FC = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/crypto/:cryptoslug" component={FullCrypto}/>
                <Route path="/news" component={NewsContainer}/>
                <Route path="/daily" component={AllTheSlugs} exact/>
            </Switch>
        </Router>
    )
}

export default App;