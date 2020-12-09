<template>
<div>
      <vs-input v-model="nome" v-mask="'##/##/####'"  placeholder="Digitar data"/>
</div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import InputCustom from '@/components/InputCustom.vue'
import { namespace } from 'vuex-class'
import { Covid } from '@/models/covidModel'
import httpService from '@/services/httpService'
const user = namespace('User')

@Component({
  components: {
    InputCustom
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

  about () {
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
