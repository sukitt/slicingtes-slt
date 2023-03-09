<script lang="ts" setup>
import { Navigation, Pagination } from 'swiper';

const props = defineProps({
  data: Object || Array<any>
});

let title = ref("");
let desc = ref("");

const onSlideChange = (args: any) => {
  // @ts-ignore
  const dataActive = props.data[args.activeIndex]!
  title.value = dataActive.title;
  desc.value = dataActive.desc
};

const onAfterInit = (args: any) => {
  // @ts-ignore
  const dataActive = props.data[args.activeIndex]!
  title.value = dataActive.title;
  desc.value = dataActive.desc
}
</script>

<template>
  <div>
    <Swiper
      slides-per-view="auto"
      :centered-slides="false"
      :space-between="25"
      :modules="[Pagination, Navigation]"
      :navigation="{
        enabled: true,
        prevEl: '.slide-prev-btn',
        nextEl: '.slide-next-btn'
      }"
      :pagination="{
        enabled: true,
        clickable: true
      }"
      @slide-change="onSlideChange"
      @after-init="onAfterInit"
    >

      <SwiperSlide v-for="item in props.data || [1]" :key="item">
        <VImg
          :lazy-src="item.img"
          :src="item.img"
          class="mx-auto"
          width="118"
        />
      </SwiperSlide>

      <div>
        <div class="slide-title text-center text-h5 mb-3">{{ title }}</div>
        <div class="slide-desc text-body-1">{{ desc }}</div>
      </div>
      <div class="navigation-wrapper">
        <VBtn flat text icon="mdi-arrow-left" class="slide-prev-btn" />
        <VBtn flat text icon="mdi-arrow-right" class="slide-next-btn" />
      </div>
    </Swiper>

  </div>
</template>

<style scoped>
</style>

<style scoped lang="scss">
.swiper {
  --swiper-pagination-color: #3D46A2;
  padding-bottom: 40px;
}
::v-deep .navigation-wrapper {
  display: flex;
  justify-content: space-between;
  .slide-prev-btn, .slide-next-btn  {
    z-index: 20 !important;
  }

  .swiper-button-disabled {
    .v-icon {
      color: #D2D2D2 !important;
    }
  }
}
</style>
