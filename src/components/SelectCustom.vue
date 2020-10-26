<template>
<div>
  <div class="d-flex title-op" :class="classe">
    <span>{{ title }}</span>
  </div>
    <div class="bordar d-flex">
      <select ref="select" v-on:input="updateValue($event.target.value)">
        <option selected disabled>Selecionar</option>
        <option v-for="value in opcoes" :key="value">{{ value }}</option>

      </select>
      <div @click="verificar()" class="formater-seta d-flex justify-content-center">
    <img  width="13" src="@/assets/chevron-down-v.svg">
      </div>
    </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SelectCustom extends Vue {
  @Prop() title!: string;
  @Prop() classe!: string;
  @Prop() opcoes!: string[];

  $refs!: {
    select: HTMLSelectElement;
  }

  updateValue (value: string) {
    this.$emit('input', value)
  }

  verificar () {
    // this.$refs.select.value = 'Selecionar'
    console.log('Clicado')
  }
}
</script>

<style scoped lang="scss">
.main {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
     -webkit-appearance: none;
      -moz-appearance: none;
}

textarea,
input,
select {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
     -webkit-appearance: none;
      -moz-appearance: none;
}

select {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(0, 250, 0, 0);
  color: #707070;
  margin: 2px 0px 2px 15px; /* top, left, bottom, rigth */
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 1000;
}

.bordar {
  border: none;
  border-radius: 5px;
  background-color: #F3F6FB;
  font-weight: bold;
  border: 1px solid #D6D6D6;
}

.formater-seta{
  background-color: #DCE3ED;
  width: 35px;
  height: 31px;
  border-radius: 0px 5px 5px 0px;
  position: absolute;
  z-index: 10;
  right: 16px;

}

.title-op{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #707070;
}

</style>
