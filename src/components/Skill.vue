<template>
  <div @mouseover="turn()" @mouseout="turn()">
    <img :src="hover ? skill[1] : skill[0]" alt="skill" />
  </div>
</template>

<script>
export default {
  name: "SkillVue",
  data() {
    return {
      hover: false
    }
  },
  methods: {
    turn() {
      this.hover = !this.hover
    }
  },
  props: {
    skill: Array
  }
}
</script>

<style lang="scss" scoped>
@keyframes turn {
  0% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

div:hover>img {
  animation-name: turn;
  animation-duration: .5s;
}
</style>