import { defineStore } from 'pinia'
import Task from '../models/Task'

export const tasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [
            new Task({
                description: "Hi bruh",
                isCompleted: true,
                id: 0
            }),
            new Task({
                description: "Hello brother",
                isCompleted: false,
                id: 1
            }),
            new Task({
                description: "Sup",
                isCompleted: true,
                id: 2
            }),
        ],
        selectedId: -1,
        editing: -1
    }),
    getters: {
        //
    },
    actions: {
        getCompleted() {
            return this.tasks.filter(task => task.isTaskCompleted())
        },
        getIncompleted() {
            return this.tasks.filter(task => !task.isTaskCompleted())
        },
        getSelectedTask(){
            return this.tasks[this.getTaskIndexFromId(this.selectedId)]
        },
        getTaskIndexFromId(id) {
            return this.tasks.findIndex(task => task.id === id)
        },
        selectTask(id) {
            if (this.getTaskIndexFromId(id) != -1) this.selectedId = id
        },
        resetSelectedTask(){
            this.selected = -1
        },
        addTask(task){
            try{
                let newTask = new Task(task)
                newTask.id = getNextId()
                task.push(newTask)
                return true
            }
            catch{
                return false
            }
        },
        removeTask(task){
            try{
                const idx = getTaskIndexFromId(task.id)
                this.tasks.splice(idx, 1)
                return true
            }
            catch{
                return false
            }
        },
        updateTask(task){
            try{
                const idx = getTaskIndexFromId(task.id)
                this.tasks[idx].updateTask(task)
                return true
            }
            catch{
                return false
            }
        },
        getNextId(){
            return (this.tasks[this.tasks.length-1].id + 1)
        }
    },
  })