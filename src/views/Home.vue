<template>
  <div class="grid grid-cols-12 p-5 absolute">
   <div class="col-span-6">
      <button class="btn bg-green-500 hover:bg-green-600 text-white" @click="about()">Press me</button>
   </div>
      <div class="col-span-6">
      <InputCustom id="nome" placeholder="Digite seu nome"  v-model="nome" />
   </div>

   <div class="col-span-12">
       <h1 class="text-red-600 mt-5">{{ name }}</h1>
    <table class="mt-5">
      <thead>
        <th>Projeto</th>
        <th>Progressão</th>
        <th>Etapa</th>
        <th>Jan</th>
        <th>Fev</th>
        <th>Mar</th>
        <th>Abr</th>
        <th>Mai</th>
        <th>Jun</th>
        <th>Jul</th>
        <th>Ago</th>
        <th>Set</th>
        <th>Out</th>
        <th>Nov</th>
        <th>Dez</th>
      </thead>

      <Projetos
        inicioDev="2020-01-01"
        fimDev="2020-07-01"
        inicioHom="2020-02-01"
        fimHom="2020-09-01"
        inicioPro="2020-06-01"
        fimPro="2020-12-01"
      >
      <div>
       asdasdasds
      </div>
      </Projetos>

      <Projetos
        inicioDev="2020-01-01"
        fimDev="2020-07-01"
        inicioHom="2020-02-01"
        fimHom="2020-05-01"
        inicioPro="2020-06-01"
        fimPro="2020-12-01"
      >
      </Projetos>

            <Projetos
        inicioDev="2020-01-01"
        fimDev="2020-07-01"
        inicioHom="2020-02-01"
        fimHom="2020-05-01"
        inicioPro="2020-06-01"
        fimPro="2020-12-01"
      >
      </Projetos>
    </table>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Projetos from '@/components/Projetos.vue'
import InputCustom from '@/components/InputCustom.vue'
import { namespace } from 'vuex-class'
const user = namespace('User')

@Component({
  components: {
    Projetos,
    InputCustom
  }
})
export default class Home extends Vue {
  private nome = '';

  @user.State
  public name!: string

  @user.Mutation
  public updateName!: (newName: string) => void

  @user.Mutation
  public setTransL!: (newName: string) => void

  @user.Mutation
  public setTransE!: (newName: string) => void

  about () {
    this.setTransE('animate__animated animate__slideInRight animate__faster')
    this.setTransL('animate__animated animate__slideOutLeft animate__faster')
    this.$router.push('/about')
  }

  @Watch('nome')
  newValue (newValue: string) {
    this.updateName(newValue)
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
    outline:none;
    cursor: pointer;
  }

</style>
