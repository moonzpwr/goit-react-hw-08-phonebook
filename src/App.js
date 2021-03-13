
import { Suspense, lazy, Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
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
                <Route path={routes.home} exact component={HomeView} />
                <PrivateRoute path={routes.phonebook}  component={Phonebook} redirectTo={routes.login}/>
                <PublickRoute path={routes.registration}  component={Registration} restricted redirectTo={routes.phonebook}/>
                <PublickRoute path={routes.login}  component={Login} restricted redirectTo={routes.phonebook}/>
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