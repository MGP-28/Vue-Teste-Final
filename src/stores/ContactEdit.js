import { defineStore } from 'pinia'
import Contact from '../models/Contact'
import { defineStore } from 'pinia'
import { useContactsStore } from './Contacts'

export const editedContactStore = defineStore('editedContactStore', {
    state: () => ({
        editedContact: new Contact()
    }),
    getters: {
        getSelectedContactData() {
            return this.selectedContact
        }
    },
    actions: {
        startEditing(contact){
            this.editedContact = new Contact(contact)
        },
        finishEditing(){
            try{
                const contactsStoreRef = useContactsStore()

                return contactsStoreRef.updateContact(this.editedContact)
            }
            catch{
                return false
            }
        },
        updateContactName(name){
            this.editedContact.name = name
        },
        updateContactCellphone(cellphone){
            this.editedContact.cellphone = cellphone
        },
        updateContactEmail(email){
            this.editedContact.email = email
        },
        updateContactAddress(address){
            this.editedContact.address = address
        },
    },
  })