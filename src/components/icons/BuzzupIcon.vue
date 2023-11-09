<script setup lang="ts">
interface BuzzupIconProps {
  height?: number,
  width?: number,
}

withDefaults(defineProps<BuzzupIconProps>(), {
  width: 360,
  height: 360,
})
</script>

<template>
  <svg viewBox="0 0 500 500" :width="width" :height="height" class="animate-wiggle origin-center" xmlns="http://www.w3.org/2000/svg">
    <rect x="196.35" y="209.029" width="107.3" height="42.736" class="fill-indigo-950" style="stroke: rgb(255, 255, 255); stroke-width: 12px;"/>
    <path d="M 39.463 249.961 L 460.536 249.961 L 491.029 359.821 L 8.971 359.821 L 39.463 249.961 Z" class="fill-indigo-950" style="stroke-width: 12px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(255, 255, 255);"/>
    <path d="M 250 138.03 C 340.591 138.03 415.645 152.763 428.977 172 L 429.099 172 L 455.039 218.729 L 44.961 218.729 L 70.9 172 L 71.023 172 C 84.355 152.763 159.409 138.03 250 138.03 Z" class="fill-indigo-950 animate-bounce-litle" style="stroke-width: 12px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(255, 255, 255); paint-order: fill;"/>
    <path d="M 189.913 369.876 L 189.967 317.046 L 222.502 294.87 L 189.826 294.87 L 189.826 241.812 L 310.086 241.812 L 310.086 294.87 L 276.221 316.817 L 310.173 316.817 L 310.173 369.876 L 189.913 369.876 Z" class="fill-indigo-950" style="stroke-linejoin: round; fill-rule: nonzero; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-width: 20px;"/>
    <path style="fill: rgba(216, 216, 216, 0); stroke-width: 12px; stroke: rgb(255, 255, 255);" d="M 233.614 291.182 L 264.217 291.423 L 233.854 310.942 L 264.457 310.942"/>
    <text class="fill-indigo-950" style="font-family: Impact; font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="40.219" y="357.682">B</text>
    <text class="fill-indigo-950" style="font-family: Impact; font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="112.345" y="357.682">U</text>
    <text class="fill-indigo-950" style="font-family: Impact; font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="316.222" y="357.682">U</text>
    <text class="fill-indigo-950" style="font-family: Impact; font-size: 130.6px; paint-order: stroke; stroke: rgb(255, 255, 255); stroke-linecap: round; stroke-linejoin: round; stroke-width: 20px; white-space: pre;" x="389.478" y="357.682">P</text>
  </svg>
</template>