import { defineStore } from 'pinia'
import Contact from '../models/Contact'
import { useContactsStore } from './Contacts'

export const editedContactStore = defineStore('editedContactStore', {
    state: () => ({
        editedContact: new Contact()
    }),
    getters: {
        //
    },
    actions: {
        startEditing(contact){
            this.editedContact = new Contact(contact)
        },
        saveContact(){
            const contactsStoreRef = useContactsStore()
            return contactsStoreRef.addContact(this.editedContact)
        }
    },
  })