<template>

    <div id="app">
        <form v-on:submit.prevent="add">
            <input placeholder="TODO" type="text" v-model="todo">
            <input type="submit" value="Add">
        </form>
        <todo-list v-bind:todos="filtered"></todo-list>
        <input placeholder="Filter" type="text" v-cloak v-show="todos.length" v-model="filter">
    </div>

</template>

<script>

    import TodoList from './TodoList.vue'

    export default {
        name: 'app',
        components: {
            'todo-list': TodoList
        },
        data() {
            return {
                filter: '',
                todo: '',
                todos: []
            }
        },
        computed: {
            filtered() {
                return this.todos.filter(todo => todo.indexOf(this.filter) > -1);
            }
        },
        methods: {
            add() {
                this.todos.push(this.todo);
                this.todo = '';
            }
        }
    }

</script>

<style>

</style>
