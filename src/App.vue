<template>
  <div>
    <div>{{ message }}</div>
    <button v-on:click="changeMessage()">asdasd</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data: () => ({
        cpt: 1,
        message: 'Hello world!!!'
    }),
    methods: {
        changeMessage: function(): void {
            this.message = `asdasdasd ${++this.cpt}`;
        }
    }
});
</script>