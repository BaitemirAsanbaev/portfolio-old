<template>
  <header>
    <Nav />
    <div class="title">
      <h1>YOUR LIMITATION - IT'S ONLY YOUR</h1>
      <h1 class="big-title">IMAGINATION</h1>
    </div>
  </header>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "HeaderVue",
  components: { Nav }
}
</script>

<style scoped lang="scss">
header {
  background-image: url(../assets/header.jpg);
  background-position: 50%;
  background-size: cover;
  height: 100vh;

  .title {
    margin-top: 30px;
    transition: .3s ease-in;
    h1 {
      color: #fff;
      font-family: 'Macondo', cursive;
      text-align: center;
      margin: 0;
      font-size: 64px;
      font-weight: normal;
      transition: .3s ease-in;
    }

    h1.big-title {
      font-size: 96px;
    }

    @media (max-width: 1100px) {
      h1 {
        font-size: 42px;
      }

      h1.big-title {
        font-size: 72px;
      }
    }

    @media (max-width: 700px) {
      h1 {
        font-size: 28px;
      }

      h1.big-title {
        font-size: 54px;
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 16px;
      }

      h1.big-title {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 700px) {
    .title {
      margin-top: 100px;
    }
  }
}
</style>
