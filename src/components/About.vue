<template>
  <div class="about">
    <Line/>
    <Info/>
    <Line/>
  </div>
</template>

<script>
import Line from './Line.vue';
import Info from './Info.vue';
export default {
    name: "AboutVue",
    components: { Line, Info }
}
</script>

<style lang="scss" scoped>
</style>