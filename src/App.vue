<template>
  <CmpBanner
    class="router"
    :typography="customization?.typography[0]"
    :position="customization?.position[2]"
    :pill-size="customization?.pillSize[0]"
    :pill-position="customization?.pillPosition[0]"
    :direction="customization?.direction[0]"
    :company-name="customization?.companyName"
    :color-schema="customization?.colorSchema[2]"
    :cookie-policy-url="customization?.cookiePolicyUrl"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { BannerDirection } from '@/enums/bannerDirection';
  import type { PillPosition } from '@/enums/pillPosition';
  import type { PillSize } from '@/enums/pillSize';
  import type { BannerPosition } from '@/enums/bannerPosition';
  import CmpBanner from '@/components/CmpBanner.vue';

  //You can customize the banner with the following options, feel free to add more options

  const customization = {
    typography: ['inter', 'poppins', 'montserrat', 'arvo'],
    position: ['top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
    pillSize: ['small', 'medium', 'big'],
    pillPosition: ['bottom', 'bottom-left', 'bottom-right'],
    direction: ['Horizontal', 'Vertical'],
    colorSchema: ['red--theme', 'green--theme', 'yellow--theme', 'blue--theme', 'white--theme', 'black--theme'],
    companyName: 'Empathy',
    cookiePolicyUrl: 'https://www.empathy.co/cookie-policy/'
  };
</script>

<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
  }
</style>
