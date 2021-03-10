import { createSelector } from "@reduxjs/toolkit";

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts;

const getItems = state => state.contacts.items;

// const getVisibleContacts = state => {
//     const filter = getFilter(state)
//     const contacts = getItems(state)
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
// }

const getVisibleContacts = createSelector(
    [getFilter, getItems],
    (filter, contacts) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
)

const selectors = {
    getFilter,
    getContacts,
    getItems,
    getVisibleContacts
}

export default selectors