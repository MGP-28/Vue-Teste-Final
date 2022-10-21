<template>
    <div class="content-container">
        <div class="toolbar">
            <button class="btn btn-primary border" @click="createContact">Adicionar</button>
        </div>
        <ContentContainer>
            <ContactCard v-for="(contact, idx) in contacts" :contact="contact" :key="idx" />
        </ContentContainer>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useContactsStore } from '../stores/Contacts'
import ContentContainer from '../components/ContentContainer.vue';
import ContactCard from '../components/ContactCard.vue';
import router from '../router'
    export default {
    name: "ContactsView",
    computed:{
        ...mapState(useContactsStore, ['contacts'])
    },
    methods: {
        createContact(){
            router.push('/new')
        },
    },
    components: { ContentContainer, ContactCard }
}
</script>

<style scoped>
.toolbar{
    width: 100%;
    display: flex;
    justify-content: end;
}
</style>