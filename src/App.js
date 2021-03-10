import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import './App.css';
import phonebookSelectors from './redux/phonebook/phonebook-selectors'


function App(props) {
  return (
   <div className="main-container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames='title'>
        <h1>Phonebook</h1>
      </CSSTransition>
      
      <ContactForm />

      <h2>Contacts</h2>
      <CSSTransition
        in={props.contacts.length > 1}
        unmountOnExit
        timeout={250}
        classNames='filter'
        >
        <Filter/>
      </CSSTransition>

      <ContactList/>
    </div>
  );
  }

const mapStateToProps = (state) => ({
    contacts: phonebookSelectors.getItems(state)
})

export default connect(mapStateToProps)(App);
