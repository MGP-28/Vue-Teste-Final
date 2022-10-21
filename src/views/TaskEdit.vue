<template>
    <div>
        <TaskCounter></TaskCounter>
        <div>
            <button class="btn btn-primary">Por concluir</button>
            <button class="btn btn-primary">Completas</button>
            <button class="btn btn-primary">Criar</button>
        </div>
    </div>
    <div>
        
    </div>
</template>

<script>
import { mapState } from 'pinia'
import TaskCounter from '../components/taskCounter.vue';
    export default {
    name: "TaskEditView",
    components: { TaskCounter }
}
</script>

<style lang="scss" scoped>

</style>