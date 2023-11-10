<script setup lang="ts">
import BuzzupIcon from "../../components/icons/BuzzupIcon.vue";
import AnonymousForm from "./components/AnonymousForm.vue";

</script>

<template>
  <div class="border-4 border-gray-950 border-opacity-10 rounded-lg p-8 shadow-container  flex flex-col gap-2">
    <BuzzupIcon class="m-auto"/>
    <AnonymousForm :onSubmit="() => ({})"></AnonymousForm>
  </div>
</template>