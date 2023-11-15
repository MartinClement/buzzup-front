<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../../../components/button/BaseButton.vue";
import BaseInput from "../../../components/form/BaseInput.vue";
import PlayIcon from "../../../components/icons/PlayIcon.vue";

interface AnonymousFormProps {
  onSubmit?: (username: string) => any,
}

withDefaults(defineProps<AnonymousFormProps>(), {
  onSubmit: () => ({}),
});

const username = ref('');
</script>

<template>
  <form @submit.prevent class="flex flex-col gap-8 p-8">
    <div class="flex flex-row gap-4 items-center">
      <img src="https://garticphone.com/images/avatar/5.svg" alt="avatar" class="h-[150px] w-[150px] rounded-full border-4 border-white"/>
      <div class="flex flex-col gap-2 flex-2 max-w-[300px]">
        <h3 class="text-2xl font-bold text-white text-center">Choisis un surnom et un avatar</h3>
        <BaseInput v-model="username" name="username_input"/>
      </div>
    </div>
    <BaseButton class="m-auto" @click="onSubmit(username)">
      <template #before-slot><PlayIcon :scale="1.5"/></template>DEMARRER
    </BaseButton>
  </form>
</template>