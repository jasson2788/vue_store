<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data: () => ({
        message: 'Hello world!!!'
    })
});
</script>