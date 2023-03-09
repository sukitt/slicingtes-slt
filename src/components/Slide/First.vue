
<script lang="ts" setup>
import { Navigation, Pagination } from 'swiper';

const props = defineProps({
  data: Object || Array<any>
});

// @ts-ignore
const renderBullets = function (index, className) {
  return '<span class="' + className + '">' + (index + 1) + '</span>';
};

</script>

<template>
  <Swiper
    :modules="[Pagination, Navigation]"
    :a11y="{
      slideLabelMessage: '0{{index + 1}} / {{ slidesLength }}'
    }"
    :navigation="{
      enabled: true,
      nextEl: '.slide-next-btn',
      prevEl: '.slide-prev-btn'
    }"
    :pagination="{
      type: 'fraction',
      enabled: true,
      formatFractionCurrent (numb) {
        return `0${numb}`
      },
      formatFractionTotal (numb) {
        return `0${numb}`
      }
    }"
  >

    <SwiperSlide v-for="item in props.data || [1]" :key="item">
      <div class="text-h4 text-blue">{{ item.title }}</div>

      <div class="text-h6 text-darken">{{ item.tag }}</div>

      <div class="text-body-1">{{ item.desc }}</div>
    </SwiperSlide>

    <div class="navigation-wrapper">
      <VBtn flat class="slide-prev-btn" color="blue" height="50">
        <VIcon icon="mdi-arrow-left" />
      </VBtn>

      <VBtn flat class="slide-next-btn" color="blue" height="50">
        <VIcon icon="mdi-arrow-right" />
      </VBtn>
    </div>
  </Swiper>
</template>

<style scoped lang="scss">
.swiper {
  padding-bottom: 35px !important;
}
.swiper-button-disabled {
  cursor: move !important;
  background: #F1F1F1 !important;
  color: #B6B6B6 !important;
}
.swiper-pagination-fraction {
  left: 0 !important;
  bottom: 0px !important;
  text-align: left !important;
}

.navigation-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
