<script lang="ts" setup>
import dividerList from "~icons/local-icons/divider-list"

const dataSlideFirst = ref([{
  title: "Who we are",
  tag: "Technology Company",
  desc: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}, {
  title: "What we do",
  tag: "Professional Brand Management",
  desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
}, {
  title: "How we do",
  tag: "Strategize, Design, Collaborate",
  desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur."
}]);

const dataSlideSecond = ref([{
  img: "slide-2.1.svg",
  title: "Accesories",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
}, {
  img: "slide-2.2.svg",
  title: "Speed Improvement",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
}, {
  img: "slide-2.3.svg",
  title: "Exhaust",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
}])

const dataList = ref([{
  label: "Dedication",
  text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
}, {
  label: "Intellectual Honesty",
  text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse."
}, {
  label :"Curiosity",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
}]);
</script>

<template>
  <VSheet>
    <!-- hero -->
    <VSheet tag="section" class="section-hero text-white">
      <VContainer>
        <div class="text-h3 mb-2">Discover Your Wonder</div>

        <div class="text-body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam.
        </div>
      </VContainer>
    </VSheet>

    <!-- btn floating -->
    <div class="group-relative">
      <VBtn icon="mdi-chevron-double-down" to="#section-main" />
    </div>

    <!-- slide / carousel -->
    <VSheet tag="section" id="section-main">
      <VContainer>
        <SlideFirst :data="dataSlideFirst" />
      </VContainer>
    </VSheet>

    <!-- core values -->
    <VSheet tag="section" color="#F8F8F8">
      <VContainer>
        <div class="text-h4 text-blue text-center mb-2">Our Core Values</div>

        <div class="text-body-1">
          Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et
          lectus etiam sit.
          <br/><br/>
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
        </div>

        <div class="group-list">
          <VList bg-color="transparent">
            <VListItem
              v-for="[idx, item] in dataList.entries()"
              :key="idx"
              :title="item.label"
              :subtitle="item.text"
              class="pa-0"
            >
              <template #prepend>
                <VIcon :icon="dividerList" />
              </template>
            </VListItem>
          </VList>
        </div>

        <VImg
          lazy-src="user-on-computer.svg"
          src="user-on-computer.svg"
        />
      </VContainer>
    </VSheet>

    <!-- speciality -->
    <VSheet tag="section" color="#509FDD">
      <VContainer class="pa-6">
        <VSheet class="pa-6">
          <div class="text-h4 text-blue mb-2">OUR SPECIALITY</div>

          <div class="text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
          </div>
          <SlideSecond
            :data="dataSlideSecond"
          />
        </VSheet>
      </VContainer>
    </VSheet>
  </VSheet>
</template>

<style scoped lang="scss">
.section-hero {
  padding-top: 17.9375rem;
  padding-bottom: 3.5625rem;
  background-image: url('hero.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.group-relative {
  display: block;
  position: relative;
  padding-bottom: 25px;

  a {
    position: absolute;
    top: -25px;
    right: calc(100vw / 2 - 20px);
  }
}
</style>
