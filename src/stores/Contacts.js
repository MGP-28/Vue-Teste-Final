import { defineStore } from 'pinia'
import Contact from '../models/Contact'

export const useContactsStore = defineStore('useContactsStore', {
    state: () => ({
        contacts: [
            new Contact({
                id: 0,
                name: "Hi bruh",
                cellphone: '909090909',
                email: 'eu@gmail.com',
                address: 'rua da perdiz 1'
            }),
            new Contact({
                id: 1,
                name: "Noice",
                email: 'tu@gmail.com',
                address: 'rua da perdiz 2'
            }),
            new Contact({
                id: 2,
                name: "Whaaaaa",
                cellphone: '090909090',
                address: 'rua da perdiz 3'
            }),
        ],
        selectedId: -1,
        editing: -1
    }),
    getters: {
        //
    },
    actions: {
        getCompleted() {
            return this.contacts.filter(contact => contact.isContactCompleted())
        },
        getIncompleted() {
            return this.contacts.filter(contact => !contact.isContactCompleted())
        },
        getSelectedContact(){
            return this.contacts[this.getContactIndexFromId(this.selectedId)]
        },
        getContactIndexFromId(id) {
            return this.contacts.findIndex(contact => contact.id === id)
        },
        selectContact(id) {
            if (this.getContactIndexFromId(id) != -1) this.selectedId = id
        },
        resetSelectedContact(){
            this.selected = -1
        },
        addContact(contact){
            try{
                let newContact = new Contact(contact)
                newContact.id = getNextId()
                contact.push(newContact)
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
                return true
            }
            catch{
                return false
            }
        },
        getNextId(){
            if(!this.contacts) return 0
            return (this.contacts[this.contacts.length-1].id + 1)
        }
    },
  })