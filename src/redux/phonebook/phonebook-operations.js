import axios from 'axios'
import actions from './phonebook-actions'


const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactRequest())
    axios
        .get('/contacts')
        .then(res => dispatch(actions.fetchContactSuccess(res.data)))
        .catch(error => dispatch(actions.fetchContactError(error.message)))
}

const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest())
  
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)))
}

const removeContact = id => dispatch => {
    dispatch(actions.removeContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(actions.removeContactSuccess(id)))
        .catch(error => dispatch(actions.removeContactError(error.message)))


}

const phonebookOperations = {
    addContact,
    removeContact,
    fetchContacts
}

export default phonebookOperations