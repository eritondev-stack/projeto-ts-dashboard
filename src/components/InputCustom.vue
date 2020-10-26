<template>
  <div class="main">
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

  updateValue (value: string) {
    this.$emit('input', value)
  }
}
</script>

<style scoped lang="scss">
.main {
  font-family: "Bitter", serif;
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
  border-radius: 10px;
  background-color: #e6e6e6;
  font-weight: bold;
}

.spanzin {
  font-size: 12px;
  color: red;
  height: 200px;
}

.icone-tm {
  text-align: center;
  font-size: 25px;
  margin-top: 3px;
  margin-left: 6px;
  color: #707070;
}
</style>
