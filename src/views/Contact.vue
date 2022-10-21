<template>
    <div class="w-full content-container">
        <div class="w-full flex justify-end gap-2">
            <button class="btn btn-primary border w-24" @click="editContact">Editar</button>
            <button class="btn btn-danger border w-24" @click="deleteContact">Eliminar</button>
        </div>
        <ContentContainer>
            <span class="text-left m-2">{{contact.name}}</span>
            <span class="text-left m-2" :class="noDataCssClass('cellphone')">{{cellphoneText}}</span>
            <span class="text-left m-2" :class="noDataCssClass('email')">{{emailText}}</span>
            <span class="text-left m-2" :class="noDataCssClass('address')">{{addressText}}</span>
        </ContentContainer>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import Contact from '../models/Contact'
import { useContactsStore } from '../stores/Contacts'
import ContentContainer from '../components/ContentContainer.vue'
import router from '../router'
    export default {
    name: "ContactView",
    data() {
        return {
            contact: null
        };
    },
    computed:{
        cellphoneText(){
            return (this.contact.cellphone) ? this.contact.cellphone : 'Sem contacto telefónico'
        },
        emailText(){
            return (this.contact.email) ? this.contact.email : 'Sem email'
        },
        addressText(){
            return (this.contact.address) ? this.contact.address : 'Sem morada'
        }
    },
    methods: {
        ...mapActions(useContactsStore, ['getContactById', 'selectContact', 'removeContact']),
        noDataCssClass(key){
            return (this.contact[key]) ? '' : 'text-gray-500'
        },
        editContact(){
            const url = '/contact/' + this.contact.id + '/edit'
            router.push(url)
        },
        deleteContact(){
            this.removeContact(this.contact)
            router.push('/')
        }
    },
    created() {
        this.contact = new Contact( this.getContactById(this.$route.params.id) )
    },
    components: { ContentContainer }
}
</script>

<style scoped>

</style>