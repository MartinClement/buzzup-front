<script lang="ts" setup>
import { ref } from "vue";

interface PanesSelectorProps {
  titles?: string[],
};

withDefaults(defineProps<PanesSelectorProps>(), {
  titles: () => [],
});

const selectedPane = ref(0);
</script>

<template>
  <div>
    <div class="flex flew-row">
      <button
        type="button"
        v-for="(t, ti) in titles"
        :key="t" class="rounded-tl-md rounded-tr-md py-2 px-8 flex-1 bg-purple-950 bg-opacity-25 text-xl font-bold"
        :class="`${ti === selectedPane ? 'text-emerald-300 shadow-indigo-950 text-shadow' : 'text-gray-400 scale-x-95 scale-y-90'}`"
        @click="selectedPane = ti"
      >{{ t }}</button>
    </div>
    <div class="bg-purple-950 bg-opacity-25 rounded-bl-md rounded-br-md">
      <slot name="panes" :selectedPane="selectedPane"></slot>
    </div>
  </div>
</template>