<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="header"></a-layout-header>
    <a-layout-content
      :style="{
        margin: '84px 16px 24px',
        padding: '24px',
        background: '#fff',
        minHeight: '280px'
      }"
      :class="
        !loading && teamCardsFilter.length == 0
          ? 'empty'
          : loading
          ? 'overflow-hidden'
          : ''
      "
    ></a-layout-content>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  components: {},
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters({})
  },
  watch: {
    // teamCards(cards) {}
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
</style>