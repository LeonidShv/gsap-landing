<template>
  <nav class="navigation d-flex p-20 bg--red">
    <nuxt-icon name="logo" class="navigation__logo" filled />
    <ul class="navigation__list d-flex">
      <li
        v-for="({ label, url, offset }, i) in navigation"
        :key="i"
        class="navigation__item"
      >
        <a
          class="navigation__link font-s-base"
          :class="{ 'navigation__item--offset': offset }"
          :href="url"
        >
          {{ label }}
        </a>
      </li>
    </ul>

    <VButton class="navigation__button" type="dark" label="Book a call" to="#">
      <template #left>
        <nuxt-icon name="arrow" class="navigation__button-icon" filled />
      </template>
    </VButton>
  </nav>
</template>

<script setup>
defineProps({
  navigation: Array,
});
</script>

<style lang="scss" scoped>
.navigation {
  height: 86px;

  &__logo {
    width: 51px;
    height: 51px;
    margin-right: auto;
  }

  &__item {
    &--offset {
      margin-left: 232px;

      @media (max-width: 1600px) {
        margin-left: 100px;
      }
    }
  }

  &__link {
    color: var(--dark);
    line-height: 47px;
  }

  &__list {
    gap: 60px;
    margin-left: 8px;

    @media (max-width: 1600px) {
      gap: 36px;
    }
  }

  &__button {
    padding-left: 80px;
    margin-left: 118px;
    width: 330px;

    @media (max-width: 1600px) {
      margin-left: 40px;
    }
  }
}
</style>
