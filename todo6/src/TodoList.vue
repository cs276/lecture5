<template>

    <ul>
        <li v-for="(todo, index) in todos">
            {{ todo }}
        </li>
    </ul>

</template>

<script>

    export default {
        props: {
            todos: Array
        }
    }

</script>

<style>

</style>
