<script lang="ts" setup>
const drawer = ref(false)
</script>

<template>
  <VApp>
    <AppBar />
    <VMain>
      <slot />
    </VMain>
    <!-- <AppFooter /> -->
  </VApp>
</template>

<style scoped></style>
