import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import CreatePet from './components/CreatePet/CreatePet';
import PetDetails from './components/PetDetails/PetDetails';
import CustomErrorBoundary from './components/CustomErrorBoundary/CustomErrorBoundary';

import './App.css';

function App() {
    return (
        <div className="container">
            <Header />

            <CustomErrorBoundary>
                <Switch>
                    <Route path="/" exact component={Categories} />
                    <Route path="/categories/:category" exact component={Categories} />
                    <Route path="/pets/create" component={CreatePet} />
                    <Route path="/pets/details/:petId" component={PetDetails} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    {/* <Route path="/logout" render={() => {
                    auth.signOut();
                    return <Redirect to="/" />
                }} /> */}
                </Switch>
            </CustomErrorBoundary>


            <Footer />
        </div>
    );
}

export default App;
