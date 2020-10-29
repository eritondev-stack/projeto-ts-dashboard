<template>
  <div class="container border-red-600">
     <div class="flex title-op">
    <span>{{ title }}</span>
  </div>
    <div class="bordar">
      <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        v-on:input="updateValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class InputCustom extends Vue {
  @Prop() id!: string;
  @Prop() placeholder!: string;
  @Prop() title!: string;

  updateValue (value: string) {
    this.$emit('input', value)
  }
}
</script>

<style scoped lang="scss">

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  color: #707070;
}

textarea,
input,
select {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  color: #707070;
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
  border-radius: 5px;
  background-color: #F3F6FB;
  font-weight: bold;
  border: 1px solid #D6D6D6;
}

.icone-tm {
  text-align: center;
  font-size: 25px;
  margin-top: 3px;
  margin-left: 6px;
  color: #707070;
}
.title-op{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #707070;
}
</style>
