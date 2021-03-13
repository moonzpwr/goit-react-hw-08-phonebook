import { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import { lazy } from 'react';
import { connect } from 'react-redux';
import phonebookSelectors from '../redux/phonebook/phonebook-selectors'



const ContactForm = lazy(() => import('../Components/ContactForm/ContactForm' /* webpackChunkName: "ContactForm" */));
const ContactList = lazy(() => import('../Components/ContactList/ContactList' /* webpackChunkName: "ContactList" */));
const Filter = lazy(() => import('../Components/Filter/Filter' /* webpackChunkName: "filter" */))


 class Phonebook extends Component {
    render() {
        return (
          <div className="phonebook-container">
          <ContactForm />
          
          <ContactList />
            
          <CSSTransition
            in={this.props.contacts.length > 1}
            unmountOnExit
            timeout={250}
            classNames='filter'
            >
            <Filter/>
          </CSSTransition>
          </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    contacts: phonebookSelectors.getItems(state)
})

export default connect(mapStateToProps)(Phonebook);