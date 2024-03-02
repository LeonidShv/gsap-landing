<template>
  <div :class="classObject">
    <p class="c--light font-s-base">
      {{ number }}
    </p>
    <h3 class="trusted-card__title c--light font-s-block-title">
      {{ title }}
    </h3>

    <div class="trusted-card__info d-flex">
      <p v-for="(text, i) in texts" :key="i" class="c--light font-s-base">
        {{ text }}
      </p>
    </div>

    <div class="trusted-card__actions d-flex justify-s-b">
      <nuxt-icon class="trusted-card__icon" :name="icon" filled />
      <VButton :label="buttonLabel" :to="buttonUrl" :type="buttonType" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  background: String,
  isHover: Boolean,
  number: String,
  title: String,
  texts: Array,
  icon: String,
  buttonLabel: String,
  buttonUrl: String,
  buttonType: String,
});

const classObject = ref({
  "trusted-card--is-hover": props.isHover,
  [props.background]: true,
  "trusted-card": true,
});
</script>

<style scoped lang="scss">
.trusted-card {
  padding: 40px;
  min-width: 70%;

  &--is-hover {
    transition: transform 0.3s;
    position: relative;

    &:hover {
      transform: translateX(calc(-60% + 20px));

      &::after {
        opacity: 0;
      }
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--dark);
      opacity: 0.6;
    }
  }

  &__icon {
    display: block;
    width: 84px;
    height: 84px;
  }

  &__info {
    flex-direction: column;
    gap: 35px;
    margin-bottom: 106px;
  }

  &__title {
    margin-bottom: 50px;
  }

  &__actions {
    align-items: end;
  }

  &__button-icon {
    display: block;
    width: 20px;
    height: 11px;
  }
}
</style>
