<script lang="ts" setup>
import BgFooter from "~/public/bg-footer.svg"
</script>

<template>
  <VFooter app absolute class="flex-column">
    <div class="logo-wrapper">
      <VImg
        src="logo-footer.svg"
        lazy-src="logo-footer.svg"
        width="14.25rem"
      />
    </div>

    <VSheet class="pa-6">
      <VSelect
        :items="[
          'TECHNOLOGY DEPARTMENT'
        ]"
      />

      <div class="text-blue text-caption">
        Jl. Lembong No 8
        Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
      </div>
    </VSheet>

    <VList color="transparent">
      <VListItem
        v-for="item of ['Who We Are', 'Our Values', 'The ']"
        :key="item"
        :title="item"
      />
    </VList>
  </VFooter>
</template>

<style lang="scss" scoped>
.v-footer {
  background: url('bg-footer.svg') !important;
}

.logo-wrapper {
  width: 100%;
  height: 45px !important;
  margin-bottom: 2.3125rem !important;
}
</style>
