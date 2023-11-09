<script lang="ts" setup>
import { ref } from "vue";

interface IBaseInputProps {
  name: string;
  modelValue: string;
  type?: "text" | "password";
  valid?: boolean;
  invalid?: boolean;
}

const nativeInput = ref<HTMLElement>();
const isFocus = ref<boolean>(false);
const forwardClick = () => {
  nativeInput.value && nativeInput.value.focus();
};
const handleFocus = (event: FocusEvent) => {
  isFocus.value = event.type === "focusin";
};

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const handleInput = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

withDefaults(defineProps<IBaseInputProps>(), {
  type: "text",
  modelValue: "",
  valid: false,
  invalid: false,
  disabled: false,
  placeholder: "...",
});
</script>

<template>
  <div
    class="align-center flex w-full flex-row gap-2 rounded-md border-2 border-gray-200 px-2 py-1 bg-gray-200 bg-opacity-30"
    :class="`${valid && 'border-green-400'} ${invalid && 'border-red-400'}`"
    @click="forwardClick"
  >
    <slot name="before-input"></slot>
    <input
      class="border-none focus:border-none m-0 grow p-0 bg-transparent focus:outline-none text-2xl text-gray-200 uppercase font-bold font-main align-middle"
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      ref="nativeInput"
      @focusin="handleFocus"
      @focusout="handleFocus"
      @input="handleInput"
    />
    <slot name="after-input"></slot>
  </div>
</template>