<template>
  <button
    class="pbc-button" :class="`${props.colorSchema}`" @click="emits('btnEvent')"
  >
    <span class="pbc-button__text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    colorSchema: {
      type: String
    }
  });

  const emits = defineEmits(['btnEvent']);
</script>
