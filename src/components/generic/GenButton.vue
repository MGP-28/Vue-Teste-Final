<template>
    <button class="btn border" :class="cssType, cssClasses" @click="this.btnClicked($event)">{{text}}</button>
</template>

<script>
    export default {
        name: "GenButton",
        props:[
            'text',
            'eventName',
            'btnType',
            'classes'
        ],
        computed: {
            cssType: () => {
                return (btnType) ? btnType : ''
            },
            cssClasses: () => {
                if(!classes) return ''
                return classes.reduce( (returnString, value) => { returnString + ' ' + value, '' } )
            }
        },
        methods: {
            btnClicked(){
                this.$emit(eventName, $event)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>