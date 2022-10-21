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
            try{
                let newContact = new Contact(contact)
                if( contact.id ) updateContact(contact)
                else {
                    newContact.id = getNextId()
                    contact.push(newContact)
                }
                this.saveToLocalStorage()
                return true
            }
            catch{
                return false
            }
        },
        removeContact(contact){
            try{
                const idx = getContactIndexFromId(contact.id)
                this.contacts.splice(idx, 1)
                this.saveToLocalStorage()
                return true
            }
            catch{
                return false
            }
        },
        updateContact(contact){
            try{
                const idx = getContactIndexFromId(contact.id)
                this.contacts[idx].updateContact(contact)
                this.saveToLocalStorage()
                return true
            }
            catch{
                return false
            }
        },
        getNextId(){
            if(!this.contacts) return 0
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