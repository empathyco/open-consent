<template>
  <div class="pbc-button-card" :class="cardClasses" @click="handleClick">
    <img
      v-if="hasIcon && pillSize" :class="{ 'pbc-button-card__icon': pillSize !== 'small' && !isMobile }" src="../../public/icons/cookie.svg" title="cookie"
    >
    <div class="pbc-button-card__content" :class="{ 'pbc-button-card__content--pill': isPill }">
      <Button
        v-if="isPill && pillSize !== 'small' && !isMobile" class="pbc-button-card__button"
        :class="{ 'pbc-button-card__button--pill': isPill }"
        :text="buttonText.toUpperCase()"
        :color-schema="props.colorSchema"
      />
      <Button
        v-if="!isPill" class="pbc-button-card__button" :class="{ 'pbc-button-card__button--pill': isPill }"
        :text="buttonText.toUpperCase()"
        :color-schema="props.colorSchema"
      />
      <span v-if="text && !isPill" class="pbc-button-card__text">
        {{ text }}
      </span>

      <span v-else-if="pillSize === 'big' && !isMobile" class="pbc-button-card__text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import type { PropType } from 'vue';
  import Button from './Button.vue';
  import type { PillPosition } from '@/enums/pillPosition';
  import type { PillSize } from '@/enums/pillSize';
  import type { ButtonType } from '@/enums/buttonType';

  type ContentDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

  const props = defineProps({
    type: String as PropType<ButtonType>,
    text: String,
    icon: {
      type: String,
      default: 'cookie'
    },
    isPill: Boolean,
    buttonText: {
      type: String,
      required: true
    },
    pillPosition: {
      type: String as PropType<PillPosition>,
      default: 'bottom'
    },
    pillSize: {
      type: String as PropType<PillSize>,
      default: 'small'
    },
    contentDirection: {
      type: String as PropType<ContentDirection>,
      default: 'column'
    },
    colorSchema: {
      type: String,
      required: true
    }
  });

  const emits = defineEmits(['configureCookies', 'rejectCookies', 'acceptCookies']);
  const isMobile = ref(window.innerWidth <= 767);

  const hasIcon = computed(() => {
    return props.isPill && props.icon;
  });

  const cardClasses = computed(() => {
    const classes = {
      'pbc-button-card--pill': props.isPill,
      [`pbc-button-card--pill-${props.pillPosition}`]: props.isPill,
      [props.colorSchema]: true
    };

    if (props.isPill) {
      classes[`pbc-button-card--pill-${props.pillSize === 'small' || isMobile.value ? 'small' : props.pillSize}`] = true;
    }

    return classes;
  });

  function handleClick() {
    if (props.isPill) {
      emits('configureCookies');
    } else {
      props.type === 'reject' ? emits('rejectCookies') : emits('acceptCookies');
    }
  }

  onMounted(() => {
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 767;
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  });
</script>
