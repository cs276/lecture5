<template>

    <div id="app">
        <h1>Harvard Art Museums</h1>
        <p>
          <!-- use router-link component for navigation. -->
          <!-- specify the link by passing the `to` prop. -->
          <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
          <router-link to="/galleries">Galleries</router-link>
        </p>
        <router-view></router-view>
    </div>

</template>

<script>


    export default {
        name: 'app',
        data() {
            return {
            }
        }
    }

</script>

<style>

</style>
