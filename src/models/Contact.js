export default class Contact{
    constructor(contact = null){
        if(contact == null) return
        this.id = contact.id
        this.name = contact.name
        this.cellphone = (contact.cellphone) ? contact.cellphone : null
        this.email = (contact.email) ? contact.email : null
        this.address = (contact.address) ? contact.address : null
    }
}