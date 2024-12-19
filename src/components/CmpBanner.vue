<template>
  <TransitionGroup name="pbc-banner--animation">
    <div v-if="(isCookieBannerVisible && noCookieValue) || changePreferences" class="pbc-dark-mask" />
    <div
      v-if="(!rejectButtonClicked && !acceptButtonClicked && noCookieValue) || changePreferences"
      :class="bannerClasses" class="pbc-banner"
    >
      <h1 class="pbc-banner__text pbc-banner__text--title">
        {{ t('message.banner.title') }}
      </h1>
      <p class="pbc-banner__text">
        {{ t('message.banner.text', { companyName }) }}
      </p>
      <p class="pbc-banner__text" v-html="t('message.banner.policyText', { cookiePolicyUrl })">
      </p>
      <div
        :class="{ 'pbc-banner__button-card-container--vertical': isMobile || props.direction === 'Vertical' }"
        class="pbc-banner__button-card-container"
      >
        <ButtonCard
          :button-text="rejectButtonClicked ? t('message.pill.configure') : t('message.button.reject')"
          :color-schema="colorSchema"
          :is-pill="rejectButtonClicked"
          :text="rejectButtonClicked ? t('message.pill.disabled') : t('message.button.rejectInfo')"
          type="reject"
          @rejectCookies="handleClickRejectCookies"
        />
        <ButtonCard
          :button-text="t('message.button.accept')"
          :color-schema="colorSchema"
          :is-pill="acceptButtonClicked"
          :text="t('message.button.acceptInfo')"
          type="accept"
          @acceptCookies="handleAcceptCookies"
        />
      </div>
    </div>
  </TransitionGroup>
  <TransitionGroup name="pbc-banner--animation">
    <div v-if="((rejectButtonClicked || acceptButtonClicked || !noCookieValue) && !changePreferences)">
      <ButtonCard
        :button-text="t('message.pill.configure')"
        :color-schema="colorSchema"
        :pill-position="props.pillPosition"
        :pill-size="props.pillSize"
        :text="preference ? t('message.pill.accepted') : t('message.pill.disabled')"
        icon="cookie"
        is-pill
        type="configure"
        @configureCookies="handleConfigureCookies"
      />
    </div>
  </TransitionGroup>
</template>

<script lang="ts" setup>
  import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
  import type { PropType } from 'vue';
  import { useI18n } from 'vue-i18n';
  import ButtonCard from './ButtonCard.vue';
  import type { BannerDirection } from '@/enums/bannerDirection';
  import type { BannerPosition } from '@/enums/bannerPosition';
  import type { PillPosition } from '@/enums/pillPosition';
  import type { PillSize } from '@/enums/pillSize';
  import CookieService from '@/services/CookieService.js';

  const props = defineProps({
    position: {
      type: String as PropType<BannerPosition>
    },
    pillSize: {
      type: String as PropType<PillSize>
    },
    pillPosition: {
      type: String as PropType<PillPosition>
    },
    companyName: {
      type: String,
      required: true
    },
    typography: {
      type: String,
      required: true
    },
    colorSchema: {
      type: String,
      required: true
    },
    direction: {
      type: String as PropType<BannerDirection>
    },
    cookiePolicyUrl: {
      type: String,
      required: true
    }
  });

  const emits = defineEmits(['rejectCookies', 'acceptCookies', 'configureCookies']);

  const { t } = useI18n();
  const cookieValue =CookieService.getCookieValue('BCConsent');
  const preference = ref(cookieValue === 'true' ? true : false);
  const rejectButtonClicked = ref(false);
  const acceptButtonClicked = ref(false);
  const isCookieBannerVisible = ref(cookieValue !== 'true' && cookieValue !== 'false');
  const changePreferences = ref(false);
  const isMobile = ref(window.innerWidth <= 767)

  const bannerClasses = computed(() => {
    return {
      [`pbc-banner--${isMobile.value ? 'center' : props.position}`]: true,
      [props.typography]: true,
      [props.colorSchema]: true,
      'pbc-banner--vertical': isMobile.value || props.direction === 'Vertical'
    };
  });


  const noCookieValue = computed(() => {
    return cookieValue !== 'true' && cookieValue !== 'false';
  });

  function handleClickRejectCookies() {
    rejectButtonClicked.value = true;
    isCookieBannerVisible.value = false;
    changePreferences.value = false;
    preference.value = false;
    CookieService.rejectCookies();
    emits('rejectCookies');
  }

  function handleAcceptCookies() {
    acceptButtonClicked.value = true;
    isCookieBannerVisible.value = false;
    changePreferences.value = false;
    preference.value = true;
    CookieService.acceptCookies();
    emits('acceptCookies');
  }

  function handleConfigureCookies() {
    rejectButtonClicked.value = false;
    acceptButtonClicked.value = false;
    isCookieBannerVisible.value = true;
    changePreferences.value = true;
    emits('configureCookies');
  }
  onMounted(() =>{
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 767;
    };
    window.addEventListener('resize', handleResize);
  });
</script>
