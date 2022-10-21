export default class Task{
    constructor(task = null){
        if(task == null) return
        this.id = task.id
        this.description = task.description
        this.isCompleted = task.isCompleted
        if (task.createdAt) this.createdAt = task.createdAt
        else this.createdAt = new Date(Date.now())
    }
    updateTask(task){
        this.description = task.description
        this.isCompleted = task.isCompleted
    }
    taskCompleted(status = true){
        this.isCompleted = status
    }
    isTaskCompleted(){
        return this.isCompleted
    }
}