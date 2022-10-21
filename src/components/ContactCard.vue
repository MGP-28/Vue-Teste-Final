<template>
    <div class="contact-card-container border border-white rounded">
        <span class="text-left">{{contact.name}}</span>
        <button class="btn btn-primary border" @click="showDetails()">Ver</button>
    </div>
</template>

<script>
import router from '../router';

    export default {
        name: "ContactCard",
        props:[
            'contact'
        ],
        methods: {
            showDetails(){              
                const url = '/contact/' + this.contact.id
                router.push(url)
            }
        },
    }
</script>

<style scoped>
.contact-card-container{
    display: grid;
    align-items: center;
    grid-template-columns: auto 80px;
    gap: 10px;
    padding: 20px 20px 20px 40px;
}
</style>