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
            try{
                const contactsStoreRef = useContactsStore()

                return contactsStoreRef.updateContact(this.editedContact)
            }
            catch{
                return false
            }
        }
    },
  })