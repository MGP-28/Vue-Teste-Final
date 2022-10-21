<template>
    <div class="task-card-container border border-white rounded">
        <div class="border w-5 h-5 rounded-full task-card-status" :class="taskStatusCSSClass"></div>
        <span class="text-left">{{task.description}}</span>
        <button class="btn btn-primary border" @click="showDetails">Detalhe</button>
    </div>
</template>

<script>
import router from '../router';
import { mapActions } from 'pinia'
import { tasksStore } from '../stores/Tasks'

    export default {
        name: "TaskCard",
        props:[
            'task'
        ],
        computed:{
            taskStatusCSSClass(){
                return this.task.isCompleted ? "bg-primary" : ""
            }
        },
        methods: {
            ...mapActions(tasksStore, ['selectTask']),
            showDetails(){
                this.selectTask(this.task.id)

                const url = '/task/' + this.task.id
                router.push(url)
            }
        },
    }
</script>

<style scoped>
.task-card-container{
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    padding: 20px 20px 20px 40px;
}
</style>