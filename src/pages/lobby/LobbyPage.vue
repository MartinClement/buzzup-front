<script lang="ts" setup>
import { useRoute } from "vue-router";
import { getItem } from "../../utils/localStorage";

import BaseContainer from "../../components/container/BaseContainer.vue";
import PanesSelector from "../../components/panes/PanesSelector.vue";
import BaseButton from "../../components/button/BaseButton.vue";
import PlayIcon from "../../components/icons/PlayIcon.vue";
import BuzzupIcon from "../../components/icons/BuzzupIcon.vue";

const username = getItem('buzzup_username');

const users = [
  { username: "Clement", picture_url: "https://garticphone.com/images/avatar/5.svg" },
  { username: "pauline", picture_url: "https://garticphone.com/images/avatar/5.svg" },
]
</script>

<template>
  <BaseContainer>
    <BuzzupIcon :scale="0.5" class="m-auto mb-4"></BuzzupIcon>
    <div class="grid grid-cols-[auto_1fr] gap-4">
      <div class="flex flex-col gap-2 p-4 bg-purple-950 rounded-md bg-opacity-25">
        <h3 class="text-xl shadow-indigo-950 text-shadow text-emerald-300 font-bold text-center">Joueurs</h3>
        <div
          v-for="user in users"
          class="rounded-full flex flex-row gap-2 p-1 pr-4 items-center justify-start font-bold text-xl text-indigo-950"
          :class="`${user.username === username && 'bg-white bg-opacity-75'}`"
          :key="user.username"
        >
          <img class="h-[45px] w-[45px]" :src="user.picture_url">
          <div>{{ user.username }}</div>
        </div>
      </div>
      <div class="flex-col gap-4 hidden lg:flex">
        <PanesSelector :titles="['Mode']">
        <template #panes="{ selectedPane }">
          <div v-if="selectedPane === 0" class="px-4 pt-2 pb-4">
            <div class="grid grid-cols-[auto_auto_auto] gap-2 h-[450px] overflow-y-auto overflow-x-hidden">
              <div v-for="i in 14" class="h-[125px] w-[200px] rounded-md bg-white bg-opacity-75 flex items-center justify-center">
                Buzzer {{ i }}
              </div>
            </div>
          </div>
        </template>
        </PanesSelector>
        <div class="pb-4">
          <BaseButton class="m-auto">
            <template #before-slot><PlayIcon :scale="1.5"/></template>LezzGO !
          </BaseButton>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>