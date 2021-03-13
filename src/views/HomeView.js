import { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import '../App.css';
// import { Link } from "react-router-dom";

// import routes from '../routes';


export default class HomeView extends Component {
    render() {
        return (
            <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="welcome">Welcome to our service.</h1>
          </CSSTransition>
           
        )
    }
    
}

