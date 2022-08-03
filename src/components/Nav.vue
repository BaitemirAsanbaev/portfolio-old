<template>
  <nav>
    <ul>
      <li><a href="#">Projects</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavVue',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;

    li {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;
        transition: .3s ease-in;
      }

      a:hover {
        background: -webkit-linear-gradient(right, rgb(255, 0, 0), rgb(15, 79, 255));
        background-clip: text;
        color: transparent;
      }
    }

  }
}

@media (max-width: 400px) {
  nav {
    ul {
      li {
        a {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
