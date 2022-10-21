<template>
    <div class="w-full content-container">
        <div class="w-full flex-auto justify-end">
            <button class="btn btn-primary border" @click="submitEditedTask">Editar</button>
            <button class="btn btn-danger border" @click="deleteTask">Eliminar</button>
        </div>
        <ContentContainer>
            <span class="text-left m-2">{{task.description}}</span>
            <span class="text-left m-2" :class="taskIsCompletedCSS">{{taskIsCompletedText}}</span>
            <span class="text-left m-2">{{task.createdAt.toLocaleString()}}</span>
        </ContentContainer>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import Task from '../models/Task'
import { tasksStore } from '../stores/Tasks'
import ContentContainer from '../components/ContentContainer.vue'
    export default {
    name: "TaskView",
    data() {
        return {
            task: null
        };
    },
    computed: {
        taskIsCompletedText() {
            return this.task.isCompleted ? "Completa" : "Por concluir";
        },
        taskIsCompletedCSS() {
            return this.task.isCompleted ? "text-blue-500" : "text-red-500";
        }
    },
    methods: {
        ...mapActions(tasksStore, ["getSelectedTask"])
    },
    created() {
        this.task = new Task(this.getSelectedTask());
    },
    components: { ContentContainer }
}
</script>

<style scoped>

</style>