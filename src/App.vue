<template>
  <div class="App">
    <Curtain />
    <Header />
    <Projects />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Projects from './components/Projects.vue'
import Curtain from './components/Curtain.vue'
export default {
  name: 'App',
  components: {
    Header,
    About,
    Footer,
    Projects,
    Curtain
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jura&family=Macondo&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: #000;
}

* {
  box-sizing: border-box;
  transition: .3s ease-in;
  font-family: 'Jura', sans-serif;
  scroll-behavior: smooth;
}
</style>
