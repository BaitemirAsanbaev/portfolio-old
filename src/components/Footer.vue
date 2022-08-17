<template>
  <footer id="contacts">
    <Title title="Contact me"/>
    <ul>
      <li>
        <a href="baitemir1706@gmail.com"><img src="../assets/email-icon.svg" alt="email" /></a>
      </li>
      <li>
        <a href="https://github.com/BaitemirAsanbaev"><img src="../assets/github-icon.svg" alt="github" /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/baitemir/"><img src="../assets/linkedin-icon.svg" alt="linkedin" /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/baitemir_dev/"><img src="../assets/instagram-icon.svg" alt="instagram" /></a>
      </li>
      <li>
        <a href="https://t.me/baitemir17"><img src="../assets/telegram-icon.svg" alt="telegram " /></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import Title from './Title.vue';
export default {
    name: "FooterVue",
    components: { Title }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 20px 50px;
  ul {
    margin: 100px 0px;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    li {
      a {
        img {
          filter: invert(100%);
          width: 100px;
          margin: 20px;
        }
        img:hover{
          transform: rotate(-30deg) scale(1.1);
        }
      }
    }
  }
}
</style>