<template>
    <div>
        <span class="text-2xl">Tarefas ({{tasksDone}}/{{totalTasks}})</span>
    </div>
</template>

<script>
    export default {
        name: "TaskCounter",
        props:[
            'tasksDone',
            'totalTasks'
        ]
    }
</script>

<style lang="scss" scoped>

</style>