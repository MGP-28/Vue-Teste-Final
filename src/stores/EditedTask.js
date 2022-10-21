import { defineStore } from 'pinia'
import Task from '../models/Task'
import { defineStore } from 'pinia'
import { tasksStore } from '../stores/Tasks'

export const editedTaskStore = defineStore('editedTask', {
    state: () => ({
        editedTask: new Task()
    }),
    getters: {
        getSelectedTaskData() {
            return this.selectedTask
        }
    },
    actions: {
        startEditing(task){
            this.editedTask = new Task(task)
        },
        finishEditing(){
            try{
                const tasksStoreRef = tasksStore()

                return tasksStoreRef.updateTask(this.editedTask)
            }
            catch{
                return false
            }
        },
        updateTaskDescription(description){
            this.editedTask.description = description
        },
        updateTaskStatus(status){
            this.editedTask.isCompleted = status
        }
    },
  })