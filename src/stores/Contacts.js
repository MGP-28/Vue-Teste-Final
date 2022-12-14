import { defineStore } from 'pinia'
import Contact from '../models/Contact'

export const useContactsStore = defineStore('useContactsStore', {
    state: () => ({
        contacts: []
    }),
    getters: {
        //
    },
    actions: {
        getContactById(id){
            return this.contacts[this.getContactIndexFromId(id)]
        },
        getContactIndexFromId(id) {
            return this.contacts.findIndex( (contact) => contact.id == id )
        },
        addContact(contact){
            let newContact = new Contact(contact)
            let id = null
            if( newContact.id >= 0 ) {
                this.updateContact(newContact)
                id = newContact.id
            }
            else {
                newContact.id = this.getNextId()
                id = newContact.id
                this.contacts.push(newContact)
            }
            this.saveToLocalStorage()
            return id
        },
        removeContact(contact){
            const idx = this.getContactIndexFromId(contact.id)
            this.contacts.splice(idx, 1)
            this.saveToLocalStorage()
        },
        updateContact(contact){
            const idx = this.getContactIndexFromId(contact.id)
            this.contacts[idx] = new Contact(contact)
            console.log(this.contacts)
            this.saveToLocalStorage()
            return true
        },
        getNextId(){
            if(this.contacts.length == 0) return 0
            return (this.contacts[this.contacts.length-1].id + 1)
        },
        loadFromLocalStorage(){
            const contacts = JSON.parse(localStorage.getItem('contacts'));
            if(!contacts) return
            contacts.forEach(contact => {
                this.contacts.push(
                    new Contact(
                        contact
                    )
                )
            });
        },
        saveToLocalStorage(){
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        }
    },
  })