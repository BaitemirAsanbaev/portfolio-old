<template>
  <Title title="Me skills" />
  <div class="skills">
    <div v-for="i in skills" :key="i[0]">
      <Skill :skill= 'i'/>
    </div>
  </div>
</template>

<script>
import { skills } from './skills'
import Title from './Title.vue'
import Skill from './Skill.vue';
export default {
  name: "SkillsVue",
  data() {
    return {
      skills: skills,
    };
  },

  components: { Title, Skill }
}
</script>

<style lang="scss" scoped>

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  max-width: 1000px;

  div {
    margin: 10px;
  }


}
</style>