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
const props = defineProps({
  background: String,
  number: String,
  title: String,
  texts: Array,
  icon: String,
  isActive: Boolean,
  isHoverMoveLeft: Boolean,
  buttonLabel: String,
  buttonUrl: String,
  buttonType: String,
});

defineEmits(["onMouseEnter", "onMouseLeaver"]);

const classObject = computed(() => ({
  "trusted-card--is-active": props.isActive,
  "trusted-card--is-hover": props.isHoverMoveLeft,
  [props.background]: true,
  "trusted-card": true,
}));
</script>

<style scoped lang="scss">
.trusted-card {
  padding: 40px;
  min-width: 70%;
  height: 650px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s;

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

  &--is-active {
    &::after {
      display: none;
    }
  }

  &--is-hover {
    &:hover {
      transform: translateX(calc(-60% + 20px));
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
  }

  &__title {
    margin-bottom: 50px;
  }

  &__actions {
    margin-top: auto;
    align-items: end;
  }

  &__button-icon {
    display: block;
    width: 20px;
    height: 11px;
  }
}
</style>
