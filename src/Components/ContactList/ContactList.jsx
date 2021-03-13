import { TransitionGroup, CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import ContactItem from './ContactItem/ContactItem';
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import s from "./ContactList.module.css";




class ContactList extends Component { 
    componentDidMount() {
        this.props.fetchContacts()
    }


    render() {
        const {contacts, onRemoveContact} = this.props
        return (
        <div className={s.container}>
            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames='title'>
                <h2 className="title">Contacts</h2>
            </CSSTransition>
            <TransitionGroup component='ul' className={s.contactList}>
                {contacts.map(el => {
                    return (
                        <CSSTransition key={el.id} timeout={250} classNames={s}>
                            <ContactItem
                                id={el.id}
                                name={el.name}
                                number={el.number}
                                onClickRemove={onRemoveContact} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
        )
    }
    
}

ContactList.propTypes = {
    onRemoveContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.object).isRequired
}

const mapStateProps = state => ({
    contacts: phonebookSelectors.getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
    onRemoveContact: (id) => dispatch(phonebookOperations.removeContact(id)),
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})

export default connect(mapStateProps, mapDispatchToProps)(ContactList)