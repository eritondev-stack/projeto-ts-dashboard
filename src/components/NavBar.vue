
<template>
  <nav class="w-full bg-white h-12 flex flex-row justify-center items-center">

      <router-link to="projects"  class="link text-center" tag="div">Orçamento</router-link>
      <router-link to="/"  class="link text-center" tag="div">Projetos</router-link>
      <router-link to="/About"  class="link text-center" tag="div">Capacity</router-link>

  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
}
</script>
<style scoped>
.link{
  background-color: white;
  margin: 15px;
  cursor: pointer;
  height: 27px;
  color: rgb(78, 78, 78);
  padding: 0px 15px;
  border-radius: 10px;
  font-weight: bold;
}
.link.router-link-exact-active.router-link-active{
  background-color:  theme('colors.cetelem.blue');
  margin: 15px;
  cursor: pointer;
  height: 27px;
  color: white;
  padding: 0px 15px;
  border-radius: 10px;
}
</style>
