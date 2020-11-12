<template>
  <div class="grid grid-cols-12 p-5 absolute">
    <div class="col-span-6">
      <button
        class="btn bg-green-500 hover:bg-green-600 text-white"
        @click="about()"
      >
        Press me
      </button>
        <router-link class="btn bg-teal-400 hover:bg-teal-500 text-white block mt-3" to="/projects" tag="button">Projetcs</router-link>
    </div>
    <div class="col-span-6">
      <InputCustom id="nome" placeholder="Digite seu nome" v-model="nome" />
    </div>

    <div class="col-span-12">
      <h1 class="text-red-600 mt-5">{{ name }}</h1>
      <table class="mt-5">
        <thead>
          <th>Projeto</th>
          <th>Progressão</th>
          <th>Etapa</th>
          <th style="width: 50px;">Jan</th>
          <th style="width: 50px;">Fev</th>
          <th style="width: 50px;">Mar</th>
          <th style="width: 50px;">Abr</th>
          <th style="width: 50px;">Mai</th>
          <th style="width: 50px;">Jun</th>
          <th style="width: 50px;">Jul</th>
          <th style="width: 50px;">Ago</th>
          <th style="width: 50px;">Set</th>
          <th style="width: 50px;">Out</th>
          <th style="width: 50px;">Nov</th>
          <th style="width: 50px;">Dez</th>
        </thead>

        <Projetos v-for="(value, index) in 12" :key="index"
          inicioDev="2020-01-01"
          fimDev="2020-03-01"
          inicioHom="2020-03-01"
          fimHom="2020-04-01"
          inicioPro="2020-03-01"
          fimPro="2020-10-01"
        >
          <div>{{ index }}</div>
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
  public name!: string;

  @user.Mutation
  public updateName!: (newName: string) => void;

  about () {
    this.$router.push('/about')
  }

  @Watch('nome')
  newValue (newValue: string) {
    this.updateName(newValue)
  }
}
</script>

<style lang="scss" scoped>
thead {
  border: 1px solid rgb(211, 207, 207);
  color: rgb(66, 66, 66);
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
