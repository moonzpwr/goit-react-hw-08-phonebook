
import { Suspense, lazy, Component } from 'react';
import { Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from './Components/Routes/PrivateRoute';
import PublickRoute from './Components/Routes/PublickRoute';
import './App.css';
import routes from './routes';
import authOperations from './redux/auth/auth-operations';


const Navigation = lazy(() => import('./Components/Navigation/Navigation' /* webpackChunkName: "navigation" */));
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home" */));
const Phonebook = lazy(() => import('./views/PhonebookView' /* webpackChunkName: "Phonebook" */));
const Registration = lazy(() => import('./views/RegistrationView' /* webpackChunkName: "Registration" */));
const Login = lazy(() => import('./views/LoginView' /* webpackChunkName: "Login" */));




class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }

  render() {
     return (
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <div className='container'>
             <Navigation />
             <Switch>
               <PublickRoute path={routes.home} exact>
                  <HomeView/>
               </PublickRoute>
               <PublickRoute path={routes.registration} exact restricted redirectTo={routes.phonebook}>
                 <Registration/>
               </PublickRoute>
               <PublickRoute path={routes.login} exact restricted redirectTo={routes.phonebook}>
                <Login/>
               </PublickRoute>
                <PrivateRoute path={routes.phonebook} redirectTo={routes.login}>
                  <Phonebook/>
                </PrivateRoute>
                
                <Redirect to={routes.home}  />
              </Switch>
          </div>
          
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurentUser
}

export default connect(null, mapDispatchToProps)(App)