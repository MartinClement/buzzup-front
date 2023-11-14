<script setup lang="ts">
import BuzzupIcon from "../../components/icons/BuzzupIcon.vue";
import AnonymousForm from "./components/AnonymousForm.vue";
import LoginForm from "./components/LoginForm.vue";
import PanesSelector from "../../components/panes/PanesSelector.vue";
import BaseContainer from "../../components/container/BaseContainer.vue";

</script>

<template>
  <BaseContainer>
    <BuzzupIcon :scale="0.6" class="m-auto"/>
    <h3 class="font-bold text-center text-white shadow-indigo-950 text-shadow mb-4 animate-scale-up">Stéphanie de Monaco !</h3>
    <div class="flex flex-row gap-4">
      <PanesSelector :titles="['Anonymous', 'Authentification']">
        <template #panes="{ selectedPane }">
          <AnonymousForm v-if="selectedPane === 0" :onSubmit="() => ({})"></AnonymousForm>
          <LoginForm v-if="selectedPane === 1" :onSubmit="() => ({})"></LoginForm>
        </template>
      </PanesSelector>
      <div class="hidden lg:block border-4 border-purple-950 border-opacity-25 rounded-md px-8 py-4">
        <h3 class="text-xl shadow-indigo-950 text-shadow text-emerald-300 font-bold text-center">Comment jouer ?</h3>
        <ul class="text-white font-bold mt-8 flex flex-col gap-4">
          <li>1 - Rejoins un lobby</li>
          <li>2 - Attends tout le monde</li>
          <li>3 - Lance la partie</li>
          <li>4 - Buzzz !!!</li>
        </ul>
      </div>
    </div>
  </BaseContainer>
</template>