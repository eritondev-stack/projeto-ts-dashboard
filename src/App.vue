<template>
  <div class="w-screen h-screen bg-cetelem-background">
  <NavBar />
       <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/NavBar.vue'
import { namespace } from 'vuex-class'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = namespace('User')

@Component({
  components: {
    NavBar
  }
})
export default class AppMain extends Vue {
}
</script>

<style>

body {
  margin: 0;
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

main {
  display: block;
}

</style>
