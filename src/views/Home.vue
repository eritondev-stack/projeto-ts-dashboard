<template>
  <div class="home">
    <button @click="verify()">Press me</button>
    <InputCustom id="nome" placeholder="Digite seu nome" v-model="nome" />
    <table>
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
        @testando="ir"
      >
      </Projetos>

            <Projetos
        inicioDev="2020-01-01"
        fimDev="2020-07-01"
        inicioHom="2020-02-01"
        fimHom="2020-09-01"
        inicioPro="2020-06-01"
        fimPro="2020-12-01"
        @testando="ir"
      >
      </Projetos>

    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Projetos from '@/components/Projetos.vue'
import InputCustom from '@/components/InputCustom.vue'

@Component({
  components: {
    Projetos,
    InputCustom
  }
})
export default class Home extends Vue {
  private nome = '';

  ir (value: string) {
    console.log(value)
  }

  verify () {
    this.$router.push('/about')
  }

   @Watch('nome')
  newValue (newValue: string, oldValue: string) {
    console.log('Novo Valor' + newValue)
    console.log('Antigo Valor' + oldValue)
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

.click {
  cursor: pointer;
}

.an {
  background-color: white;
  border: 1px solid rgb(151, 151, 151);
}

.ag {
  background-color: blueviolet;
  border-color: blueviolet;
}
.back {
  background: cover;
  background: #d9e3e7;
  padding: 30px;
  height: 100vh;
}

.box-dash {
  width: 100%;
  background-color: white;
}

.text-projeto {
  color: #3e9efa;
  font-weight: bold;
  font-size: 21px;
}

.text-capacity {
  color: #faba48;
  font-weight: bold;
  font-size: 21px;
}

.icon-more {
  top: -30px;
  position: relative;
  cursor: pointer;
}

.logout-icon {
  width: 40px;
  position: relative;
  top: -10px;
  cursor: pointer;
}
</style>
