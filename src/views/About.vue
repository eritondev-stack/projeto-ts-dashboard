<template>

<div class="container">
  <div class="row">

    <div class="col-md-6">
<!--     <FlipNumber :´numberProp="numberC" classe="teste-number"/>
    <FlipNumber :numberProp="numberC + 5000" classe="teste-number"/> -->
   <!--  <input type="number" v-model="percent"> -->
   <div class="mt-5">
       <SearchCustom v-model="search" title="Nome Gestor" />
       <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
       <p>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
       </p>
   </div>
    </div>

    <div class="col-md-4">
    <Oil :percent="percent" @click="opa()"/>

<!--           <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
          <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
          <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
          <button @click="svgVerify()" class="btn btn-block btn-success btn-sm mt-5 mb-5">Verificar</button>
          <button @click="remover()" class="btn btn-block btn-danger btn-sm mt-5 mb-5">Remover</button>
-->
 </div>

  <div class="col-md-5">
   <div style="width: 100px;" class="mt-5">
    <Termometro :percent="percent" />
  </div>
  </div>

  </div>
</div>

</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import FlipNumber from '@/components/FlipNumber.vue'
import SelectCustom from '@/components/SelectCustom.vue'
import InputCustom from '@/components/InputCustom.vue'
import Termometro from '@/components/Termometro.vue'
import Oil from '@/components/Oil.vue'
import SearchCustom from '@/components/SearchCustom.vue'
@Component({
  components: {
    FlipNumber,
    SelectCustom,
    InputCustom,
    Termometro,
    Oil,
    SearchCustom
  }
})
export default class About extends Vue {
 private numberC = 0;
 private select = null;
 private opcoes = ['Eriton', 'Juarez', 'Kadma', 'Marcelo', 'Camila', 'Nana'];
 private percent = 0
 private search = null

  $refs!: {
   master: SVGSVGElement;
  }

 @Watch('search')
  newValue (newValue: string) {
    console.log(newValue)
  }

 mounted () {
   setInterval(() => {
     this.numberC += 3000
     this.percent += 1
   }, 200)
 }
}
</script>

<style lang="scss" scoped>
.teste-number{
  color: blueviolet;
  font-weight: 500;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>
