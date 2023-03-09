<script lang="ts" setup>
import Logo from "~icons/local-icons/logo";
</script>

<template>
  <VAppBar
  >
    <template #prepend>
      <Logo width="160" />
    </template>

    <template #append>
      <VAppBarNavIcon />
    </template>
  </VAppBar>
</template>

<style scoped></style>
