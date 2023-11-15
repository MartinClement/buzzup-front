<script setup lang="ts">
interface BaseButtonProps {
  kind?: "regular" | "positive" | "negative",
  full?: boolean,
}

withDefaults(defineProps<BaseButtonProps>(), {
  kind: "regular",
  full: false,
});
</script>

<template>
  <button
    type="button"
    class="flex items-center text-xl gap-2 px-4 border-none rounded-lg text-indigo-950 uppercase font-bold font-main shadow-button"
    :class="`${kind === 'regular' && 'bg-white hover:bg-purple-300'} ${$props.full && 'w-full'}`"
  >
    <slot name="before-slot"></slot>
    <div class="w-full text-center"><slot></slot></div>
  </button>
</template>