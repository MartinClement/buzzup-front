<script setup lang="ts">
import BuzzupIcon from "../../components/icons/BuzzupIcon.vue";
import BaseButton from "../../components/button/BaseButton.vue";
import BaseInput from "../../components/form/BaseInput.vue";
import UserIcon from "../../components/icons/UserIcon.vue";

import { ref } from "vue";

const username = ref('');
</script>

<template>
  <div class="border-4 border-gray-950 border-opacity-10 rounded-lg p-8 shadow-container bg-purple-950 bg-opacity-25 flex flex-col gap-2">
    <BuzzupIcon />
    <BaseInput v-model="username" name="username_input"/>
    <BaseButton class="m-auto">
      <template #before-slot><UserIcon /></template>Login
    </BaseButton>
  </div>
</template>