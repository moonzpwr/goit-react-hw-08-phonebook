import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Alert from '../Alert/Alert';
import phonebookOperations from "../../redux/phonebook/phonebook-operations";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import s from './ContactForm.module.css';


class ContactForm extends Component { 

    state = {
        name: '',   
        number: '',
        isExist: false
    }

    handleSubmit = e => { 
        if (this.props.contacts.filter(el => el.name === this.state.name).length === 0) {
            e.preventDefault()
            this.props.onAddContact(this.state)
            this.setState({ name: '', number: '' })
            return
        } 
        e.preventDefault()
        this.setState({ isExist: true })
        setTimeout(() => {
            this.setState({isExist: false})
        }, 4000)
    }

    handleChange = e => { 
        e.target.type === 'text' ?
        this.setState({
            name: e.target.value       
    }) :  this.setState({
            number: e.target.value       
    })
    }

    closeNotification = () => {
    this.setState({isExist: false})
  }

    render() {
        const { name, number } = this.state;


        return (
            <div className={s.container}>
                <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames='title'>
            <h1 className="title">Phonebook</h1>
          </CSSTransition>
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label>Name: 
                    <input type="text"
                    value={name}
                    onChange={this.handleChange} />
                </label>
                <label >Number: 
                    <input type="tel"
                    value={number}
                    onChange={this.handleChange}/>
                </label>
                <button
                    type='submit'
                    className={s.submitBtn}
                >Add contact</button>
            </form>
            <CSSTransition
            in={this.state.isExist}
            unmountOnExit
            timeout={250}
            classNames='notification'>
                <Alert onClickClose={this.closeNotification} />
            </CSSTransition>
            </div>
        )
        }
  
}

ContactForm.propTypes = {
    onAddContact: propTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    contacts: phonebookSelectors.getItems(state)
})


const mapDispatchToProps = dispatch => ({
    onAddContact: (contact) => dispatch(phonebookOperations.addContact(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)