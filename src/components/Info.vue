<template>
  <div class="info">
    <Title title="About me"/>
    <p>I'm Baitemir and I'm web developer. I build web-sites using ReactJS and VueJS frameworkes. Also I'm always ready
      to learn new technologies and fields.
    </p>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
    name: "InfoVue",
    components: { Title }
}
</script>

<style lang="scss" scoped>
.info {
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 50px;
  p {
    font-size: 26px;
  }

  @media (max-width: 700px) {

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
}
@media (max-width: 450px) {
  .info{
    padding: 10px 20px;
  }
}
</style>