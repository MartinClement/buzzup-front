<script setup lang="ts">
interface BaseButtonProps {
  kind?: "regular" | "positive" | "negative",
}

withDefaults(defineProps<BaseButtonProps>(), {
  kind: "regular",
});
</script>

<template>
  <button
    type="button"
    class="w-full p-4 border-2 rounded-lg text-indigo-950 uppercase font-bold shadow-button"
    :class="`${kind === 'regular' && 'bg-white'}`"
  >
    <slot></slot>
  </button>
</template>