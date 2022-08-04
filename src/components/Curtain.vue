<template>
  <div class="curtain">
    <a href="#nav"><img src="../assets/curtain.png" alt="curtain" /></a>
  </div>
</template>

<script>
export default {
  name: 'CurtainVue'
}
</script>

<style lang="scss" scoped>
.curtain {
  position: fixed;
  top: 200px;
  right: 50px;
}

@media(max-width: 800px) {
  .curtain {
    top: 50px;

    a {
      img {
        width: 100px
      }
    }
  }
}
</style>