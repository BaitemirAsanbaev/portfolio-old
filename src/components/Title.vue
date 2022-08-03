<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'TitleVue',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 64px;
  color: #fff;
  font-weight: normal;
}

@media (max-width: 700px) {
  h1 {
    font-size: 48px;
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 38px;
  }
}
</style>