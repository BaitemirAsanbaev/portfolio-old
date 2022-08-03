<template>
  <div class="info">
    <h1>About me</h1>
    <p>I'm Baitemir and I'm web developer. I build web-sites using ReactJS and VueJS frameworkes. Also I'm always ready
      to learn new technologies and fields.
    </p>
  </div>
</template>

<script>

export default {
  name: 'InfoVue'
}
</script>

<style lang="scss" scoped>
.info {
  color: #fff;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 50px;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: normal;
  }

  p {
    font-size: 26px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 48px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 38px;
    }

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