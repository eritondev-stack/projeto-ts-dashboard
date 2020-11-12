<template>
  <div class="main">
      <div class="flex title-op">
    <span>{{ title }}</span>
  </div>
    <div ref="div" class="bordar flex">
           <input
        ref="input"
        type="text"
         @blur="verifyBlur()"
        :id="id"
        @click="updateValue()"
        v-debounce:500ms="updateValue"
      />
    <div class="formater-seta flex justify-center">
    <img  width="13" src="@/assets/search.svg">
      </div>

      <div v-show="visible" ref="divF" class="abs" @mouseleave="verifyLeave()" @mouseenter="verifyEnter()">
      <div class="item-c" @click="selecionado('Eriton')">Eriton</div>
      <div class="item-c" @click="selecionado('Marcos')">Marcos</div>
      <div class="item-c" @click="selecionado('Juarez')">Juarez</div>
      <div class="item-c" @click="selecionado('Camilo')">Camilo</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchCustom extends Vue {
  @Prop() id!: string;
  @Prop() title!: string;
 private visible = false
 private mouse = true

  $refs!: {
    div: HTMLDivElement;
    divF: HTMLDivElement;
    input: HTMLInputElement;
  }

  updateValue () {
    this.$refs.divF.style.width = String(this.$refs.div.offsetWidth) + 'px'
    if (this.$refs.input.value === null || this.$refs.input.value === '') {
      this.visible = false
      this.$refs.div.style.borderRadius = '10px 10px 10px 10px'
    } else {
      this.visible = true
      this.$refs.div.style.borderRadius = '10px 10px 0px 0px'
    }
  }

  verifyBlur () {
    if (this.mouse) {
      this.visible = false
      this.$refs.div.style.borderRadius = '10px 10px 10px 10px'
    }
  }

  verifyLeave () {
    this.mouse = true
  }

  verifyEnter () {
    this.mouse = false
  }

  selecionado (value: string) {
    this.$emit('input', value)
    this.$refs.input.value = value
    this.visible = false
    this.$refs.div.style.borderRadius = '10px 10px 10px 10px'
  }

  mounted () {
    window.addEventListener('resize', this.onChange)
  }

  onChange () {
    this.$refs.divF.style.width = String(this.$refs.div.offsetWidth) + 'px'
  }

  destroyed () {
    window.removeEventListener('resize', this.onChange)
  }
}
</script>

<style scoped lang="scss">
.main {
  font-family: "Bitter", serif;
}

.title-op{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #707070;
}

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

textarea,
input,
select {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

input {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0);
  color: #707070;
  margin: 2px 0px 2px 15px; /* top, left, bottom, rigth */
}

.bordar {
  border: none;
  border-radius: 10px 10px 10px 10px;
  background-color: #F3F6FB;
  font-weight: bold;
  border: 1px solid #D6D6D6;
}

.spanzin {
  font-size: 12px;
  color: red;
  height: 200px;
}
.abs{
  margin-top: 33px;
  position: absolute;
  background-color: #F3F6FB;
  border-radius: 0px 0px 10px 10px;
  z-index: 3000;
    border: 1px solid #D6D6D6;
}

.item-c{

 color: #707070;
  cursor: pointer;
    font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
}

.formater-seta{
   background-color: #dce3ed00;
  width: 35px;
  height: 31px;
  border-radius: 0px 10px 10px 0px;
}

</style>
