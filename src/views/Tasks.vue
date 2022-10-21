<template>
    <div class="content-container">
        <div class="toolbar-container">
            <TaskCounter :tasksDone="getCompleted().length" :totalTasks="tasks.length" />
            <div class="toolbar">
                <button class="btn btn-primary border" :class="activeFilterCss(1)" @click="pendingTasks">Por concluir</button>
                <button class="btn btn-primary border" :class="activeFilterCss(2)" @click="completedTasks">Completas</button>
                <button class="btn btn-primary border" @click="createTask">Criar</button>
            </div>
        </div>
        <ContentContainer>
            <TaskCard v-for="(task, idx) in filteredTasks" :task="task" :key="idx"/>
        </ContentContainer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { tasksStore } from '../stores/Tasks'
import TaskCard from '../components/TaskCard.vue';
import TaskCounter from '../components/taskCounter.vue';
import ContentContainer from '../components/ContentContainer.vue';
    export default {
    name: "TasksView",
    data() {
        return {
            filteredTasks: [],
            filterStatus: 0
        }
    },
    computed:{
        ...mapState(tasksStore, ['tasks'])
    },
    created(){
        this.showAllTasks()
    },
    methods: {
        ...mapActions(tasksStore, ['getCompleted', 'getIncompleted']),
        activeFilterCss(filter){
            return (filter === this.filterStatus) ? 'text-blue-500 bg-white border-blue-500' : ''
        },
        showAllTasks(){
            this.filteredTasks = [...this.tasks]
        },
        showPendingTasks(){
            this.filteredTasks = [... this.getIncompleted()]
        },
        showCompletedTasks(){
            this.filteredTasks = [...this.getCompleted()]
        },
        setFilter(filter){
            this.filterStatus = filter
        },
        processFilter(filter){
            if (this.filterStatus == filter) this.setFilter(0)
            else this.setFilter(filter)
        },
        pendingTasks(){
            const filter = 1
            this.processFilter(filter)
        },
        completedTasks(){
            const filter = 2
            this.processFilter(filter)
        },
        createTask(){
            //
        },
    },
    watch: {
        filterStatus(){
            switch (this.filterStatus) {
                case 0:
                    this.showAllTasks()
                    break;
                case 1:
                    this.showPendingTasks()
                    break;
                case 2:
                    this.showCompletedTasks()
                    break;
                default:
                    break;
            }
        }
    },
    components: { TaskCard, TaskCounter, ContentContainer }
}
</script>

<style scoped>
.toolbar-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.toolbar{
    display: flex;
    gap: 10px;
}
</style>