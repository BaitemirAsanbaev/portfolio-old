<template>
  <div class="App">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jura&family=Macondo&display=swap');
body{
  margin: 0;
  padding: 0;
  background-color: #000;
}
*{
  box-sizing: border-box;
  font-family: 'Jura', sans-serif;
}

</style>
