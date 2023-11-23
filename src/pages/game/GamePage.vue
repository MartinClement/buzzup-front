<script lang="ts" setup>
import { onMounted } from 'vue';

/*
  This component will be used to register the socket event and to manage the game state.
  It should ease the view managment aswell
*/

onMounted(() => {
  console.log('GamePage Mounted')
});
</script>
<template>
  <router-view></router-view>
</template>