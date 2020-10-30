<template>
  <div class="grid grid-cols-12 p-5 bg-cetelem-background w-full h-full">
    <h1>Page Projetcs</h1>
    <router-link to="/about">Projects</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Projetos from '@/components/Projetos.vue'
import { namespace } from 'vuex-class'
import { Covid } from '@/models/covidModel'
import httpService from '@/services/httpService'
const user = namespace('User')

@Component({
  components: {
    Projetos
  }
})
export default class Home extends Vue {
  private nome = '';

  @user.State
  public name!: string;

  @user.State
  public covid!: Covid

  @user.Mutation
  public setCovid!: (newName: Covid) => void;

  @user.Mutation
  public updateName!: (newName: string) => void;

  @user.Mutation
  public setTransL!: (newName: string) => void;

  @user.Mutation
  public setTransE!: (newName: string) => void;

  about () {
    this.setTransE('animate__animated animate__slideInRight- animate__faster')
    this.setTransL('animate__animated animate__slideOutLeft- animate__faster')
    this.$router.push('/about')
  }

  @Watch('nome')
  newValue (newValue: string) {
    this.updateName(newValue)
  }

  async created () {
    const data = await httpService.getAll()
    this.setCovid(data)
    console.log(this.covid)
  }
}
</script>

<style lang="scss" scoped>
th {
  border: 1px solid rgb(151, 151, 151);
}

td {
  border: 1px solid rgb(151, 151, 151);
}
.btn {
  width: 50%;
  border-radius: 9px;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
