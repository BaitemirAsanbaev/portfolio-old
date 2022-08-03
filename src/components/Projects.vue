<template>
  <Title title="Projects" />
  <div class="projects">
    <div v-for=" el in projects" :key="el.title" class="card">
      <img :src="el.img" alt="alt" />
      <div class="title">{{ el.title }}</div>
      <div class="links">
        <div class="github"><a :href="el.github" target="_blank" rel="noreferrer">GitHub</a></div>
        <div class="link"><a :href="el.link" target="_blank" rel="noreferrer">Visit</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from './projects'
import Title from './Title.vue'
export default {
  name: "ProjectsVue",
  data() {
    return {
      projects: projects
    };
  },
  components: { Title }
}
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .card {
    background: linear-gradient(to bottom, #FD5353, #6B53FD);
    padding: 16px 12px;
    margin: 20px;

    .title {
      color: #fff;
      font-size: 32px;
      text-align: center;
      padding: 10px;
      margin: 5px;
      font-family: 'Macondo', cursive;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .links {
      display: flex;
      justify-content: space-between;
      align-items: center;

      >div {
        flex: 1 1 auto;
        font-size: 32px;
        text-align: center;
        padding: 10px 20px;
        margin: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        a {
          text-decoration: none;
          font-family: 'Macondo', cursive;
          color: #fff;
        }
      }
    }
  }

}
  @media (max-width: 380px) {
    .projects{
      .card{
        transform: scale(0.7);
        margin: -30px 0px;
      }
    }
  }
</style>