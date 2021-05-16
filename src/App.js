import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import CreatePet from './components/CreatePet/CreatePet';

import './App.css';

function App() {
    return (
        <div className="container">
            <Header />

            <Switch>
                <Route path="/" exact component={Categories} />
                <Route path="/categories/:category" exact component={Categories} />
                <Route path="/pets/create" component={CreatePet} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
