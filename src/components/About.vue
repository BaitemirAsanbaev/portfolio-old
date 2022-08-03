<template>
  <div id="about" class="about">
    <Line/>
    <Info/>
    <Skills/>
    <Line/>
  </div>
</template>

<script>
import Line from './Line.vue';
import Info from './Info.vue';
import Skills from './Skills.vue';
export default {
    name: "AboutVue",
    components: { Line, Info, Skills }
}
</script>

<style lang="scss" scoped>
</style>