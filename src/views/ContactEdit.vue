<template>
    <div class="w-full content-container">
        <ContentContainer>
            <form action="" @submit.prevent="save($event)">
                <div class="input-container">               
                    <input v-model="this.editedContact.name" class="border rounded h-8 px-2" placeholder="Nome" type="text" name="name" required>
                    <input v-model="this.editedContact.cellphone" class="border rounded h-8 px-2" placeholder="Número de telemóvel" type="text" name="cellphone" >
                    <input v-model="this.editedContact.email" class="border rounded h-8 px-2" placeholder="Email" type="text" name="email" >
                    <input v-model="this.editedContact.address" class="border rounded h-8 px-2" placeholder="Morada" type="text" name="address" >
                </div>
                <div class="btn-container">
                    <button class="btn btn-danger border w-22" @click="cancel">Cancelar</button>
                    <button class="btn btn-primary border w-22" type="submit">Guardar</button>
                </div>
            </form>
        </ContentContainer>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia'
import { useContactsStore } from '../stores/Contacts'
import { editedContactStore } from '../stores/ContactEdit'
import ContentContainer from '../components/ContentContainer.vue';
import Contact from '../models/Contact';
import router from '../router';

    export default {
    name: "ContactEditView",
    computed: {
        ...mapWritableState(editedContactStore, ['editedContact'])
    },
    methods: {
        ...mapActions(useContactsStore, ['getContactById']),
        ...mapActions(editedContactStore, ['saveContact', 'startEditing']),
        save(){
            if(!this.editedContact.name) { alert("Nome é obrigatório"); return }
            this.saveContact()
            router.push('/contact/' + this.editedContact.id)
        },
        cancel(){

        }
    },
    created() {
        let contact = {}
        if (this.$route.params.id) contact = new Contact( this.getContactById( this.$route.params.id ) )
        else contact = new Contact()
        this.startEditing(contact)
    },
    components: { ContentContainer }
}
</script>

<style scoped>
form{
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: auto 15px 30px;
    padding: 10px;
}
.input-container{
    display: grid;
    gap: 20px;
    grid-row: span 2;
}
.btn-container{
    grid-row: span 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
}
</style>