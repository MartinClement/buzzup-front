<script setup lang="ts">
import { computed } from 'vue';

interface BuzzupIconProps {
  height?: number,
  width?: number,
  scale?: number,
}

const props = withDefaults(defineProps<BuzzupIconProps>(), {
  width: 360,
  height: 180,
  scale: 1,
})

const w = computed(() => props.width * props.scale);
const h = computed(() => props.height * props.scale);
</script>

<template>
  <svg viewBox="0 0 500 257" :width="w" :height="h" class="animate-wiggle origin-center" xmlns="http://www.w3.org/2000/svg">
  <rect x="196.35" y="80.999" width="107.3" height="42.736" class="fill-indigo-950" style="stroke: rgb(255, 255, 255); stroke-width: 12px;"/>
  <path d="M 39.463 121.931 L 460.536 121.931 L 491.029 231.791 L 8.971 231.791 L 39.463 121.931 Z" class="fill-indigo-950" style="stroke-width: 12px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(255, 255, 255);"/>
  <path d="M 250 10 C 340.591 10 415.645 24.733 428.977 43.97 L 429.099 43.97 L 455.039 90.699 L 44.961 90.699 L 70.9 43.97 L 71.023 43.97 C 84.355 24.733 159.409 10 250 10 Z" class="fill-indigo-950 animate-bounce-litle" style="stroke-width: 12px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(255, 255, 255); paint-order: fill;"/>
  <text class="fill-indigo-950" style="font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="40.219" y="229.652">B</text>
  <text class="fill-indigo-950" style="font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="112.345" y="229.652">U</text>
  <text class="fill-indigo-950" style="font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="316.222" y="229.652">U</text>
  <path d="M 189.913 241.846 L 189.967 189.016 L 222.502 166.84 L 189.826 166.84 L 189.826 113.782 L 310.086 113.782 L 310.086 166.84 L 276.221 188.787 L 310.173 188.787 L 310.173 241.846 L 189.913 241.846 Z" class="fill-indigo-950" style="stroke-linejoin: round; fill-rule: nonzero; stroke: rgb(255, 255, 255); stroke-width: 20px; paint-order: stroke;"/>
  <path style="fill: rgba(216, 216, 216, 0); stroke-width: 12px; stroke: rgb(255, 255, 255); paint-order: stroke;" d="M 233.614 163.152 L 264.217 163.393 L 233.854 182.912 L 264.457 182.912"/>
  <text class="fill-indigo-950" style="font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="389.478" y="229.652">P</text>
</svg>
</template>