<script setup lang="ts">
import BaseButton from "../../../components/button/BaseButton.vue";
import PlayIcon from "../../../components/icons/PlayIcon.vue";

interface LoginFormProps {
  onSubmit?: (username: string) => any,
}

withDefaults(defineProps<LoginFormProps>(), {
  onSubmit: () => ({}),
});

</script>

<template>
  <form @submit.prevent class="flex flex-col gap-8 p-8">
    <div class="flex flex-row gap-4 items-center">
      <img src="https://garticphone.com/images/avatar/5.svg" alt="avatar" class="h-[150px] w-[150px] rounded-full border-4 border-white"/>
      <div class="flex flex-col gap-2 flex-2 max-w-[300px]">
        <h3 class="text-2xl font-bold text-white text-center">Choisis un avatar et connecte toi</h3>
        <div class="text-white text-center">Seul les joueurs connectés peuvent accéder au lobby</div>
      </div>
    </div>
    <div class="flex flex-row gap-4 m-auto">
      <BaseButton>
        <template #before-slot><PlayIcon :scale="1.5"/></template>Google
      </BaseButton>
      <BaseButton>
        <template #before-slot><PlayIcon :scale="1.5"/></template>Discord
      </BaseButton>
    </div>
  </form>
</template>