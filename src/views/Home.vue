<template>
  <div ref="content" class="grid grid-cols-12 p-5 bg-cetelem-background">
    <div class="col-span-12 flex justify-center">
      <div v-if="visible">
        <div class="flex flex-row">
          <div class="bg-gray-300 rounded-md pl-3 pr-3 pt-2 pb-5 mx-3">
            <div class="mb-3 text-gray-700">Categoria</div>
            <vs-select color="rgb(1,190,190)"  collapse-chips multiple placeholder="Filter" v-model="categoria">
              <vs-option label="Regulatórios" value="Regulatórios"> Regulatórios <div style="width: 8px; height: 8px; background-color: rgb(229,101,170); margin-left: 12px; border-radius: 100%;"></div> </vs-option>
              <vs-option label="IT4IT" value="IT4IT"> IT4IT  <div style="width: 8px; height: 8px; background-color: rgb(46,204,113); margin-left: 12px; border-radius: 100%;"></div>  </vs-option>
              <vs-option label="Manutenções" value="Manutenções"> Manutenções  <div style="width: 8px; height: 8px; background-color: rgb(26,188,156); margin-left: 12px; border-radius: 100%;"></div>  </vs-option>
              <vs-option label="Small Change" value="Small Change"> Small Change  <div style="width: 8px; height: 8px; background-color: rgb(26,188,156); margin-left: 12px; border-radius: 100%;"></div> </vs-option>
            </vs-select>
          </div>
          <div class="bg-gray-300 rounded-md pl-3 pr-3 pt-2 pb-5 mx-3">
            <div class="mb-3 text-gray-700">Etapa</div>
            <vs-select  color="rgb(1,190,190)" collapse-chips multiple placeholder="Filter" v-model="etapa">
              <vs-option label="Desenvolvimento" value="Desenvolvimento"> Desenvolvimento </vs-option>
              <vs-option label="Homologação" value="Homologação"> Homologação </vs-option>
              <vs-option label="Produção" value="Produção"> Produção </vs-option>
            </vs-select>
          </div>
        </div>
        <table class="mt-5">
          <thead class="bg-white">
            <th>Projeto</th>
            <th>Progressão</th>
            <th>Etapa</th>
            <th
              class="cab"
              v-for="(value, index) in arrayMonth"
              :key="index"
              :colspan="value.dayCount"
            >
              {{ value.month }}
            </th>
          </thead>
          <tr colspan="15" height="10"></tr>

          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(229,101,170)"
          >
            <div>Teste</div>
          </Projetos>

          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(229,101,170)"
          >
            <div>Teste</div>
          </Projetos>
          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(229,101,170)"
          >
            <div>Teste</div>
          </Projetos>

          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(46,204,113)"
          >
            <div>Teste</div>
          </Projetos>
          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(46,204,113)"
          >
            <div>Teste</div>
          </Projetos>
          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(26,188,156)"
          >
            <div>Teste</div>
          </Projetos>
          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(26,188,156)"
          >
            <div>Teste</div>
          </Projetos>

          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(26,188,156)"
          >
            <div>Teste</div>
          </Projetos>

          <Projetos
            idProject="1"
            inicioDev="2020-01-01"
            fimDev="2020-03-15"
            inicioHom="2020-03-15"
            fimHom="2020-07-15"
            inicioPro="2020-07-01"
            fimPro="2020-12-31"
            :arrayDate="arrayDate"
            color="rgb(26,188,156)"
          >
            <div>Teste</div>
          </Projetos>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Projetos from '@/components/Projetos.vue'
import InputCustom from '@/components/InputCustom.vue'
import moment from 'moment'
import { namespace } from 'vuex-class'
const user = namespace('User')
interface ModelDataStartAndEnd {
  id: number;
  dataRef: string;
}
interface ModelMonthCount {
  month: string;
  dayCount: string;
}

@Component({
  components: {
    Projetos,
    InputCustom
  }
})
export default class Home extends Vue {
  $refs!: {
    content: HTMLDivElement;
  };

  $vs!: {
    notification: (objeto: {}) => void;
    loading: (objeto: {}) => { close: () => void };
  };

  private nome = '';
  private visible = false;
  private arrayDate: ModelDataStartAndEnd[] = [];
  private arrayMonth: ModelMonthCount[] = [];
  private value = ['1', '2', '3'];
  private etapa = ['Homologação', 'Desenvolvimento', 'Produção'];
  private categoria = ['Regulatórios', 'IT4IT', 'Manutenções', 'Small Change'];

  @user.State
  public name!: string;

  @user.Mutation
  public updateName!: (newName: string) => void;

  about () {
    this.$router.push('/about')
  }

  created () {
    this.arrayDate.push({
      dataRef: '2020-01-01',
      id: 1
    })
    this.setMonth()
    this.fillArrayDate()
  }

  mounted () {
    const loading = this.$vs.loading({
      target: this.$refs.content,
      color: 'rgb(46,204,113)',
      type: 'circles'
    })
    setTimeout(() => {
      loading.close()
      this.visible = true
    }, 500)
  }

  setMonth () {
    for (let i = 0; i < 12; i++) {
      this.arrayMonth.push({
        month: this.getNameMonth(i + 1),
        dayCount: this.getDaysMonth(i + 1, 2020).toString()
      })
    }
  }

  getDaysMonth (month: number, year: number) {
    return new Date(year, month, 0).getDate()
  }

  getNameMonth (month: number): string {
    switch (month) {
      case 1:
        return 'Jan'
      case 2:
        return 'Fev'
      case 3:
        return 'Mar'
      case 4:
        return 'Abr'
      case 5:
        return 'Mai'
      case 6:
        return 'Jun'
      case 7:
        return 'Jul'
      case 8:
        return 'Ago'
      case 9:
        return 'Set'
      case 10:
        return 'Out'
      case 11:
        return 'Nov'
      case 12:
        return 'Dez'

      default:
        return 'Not found'
    }
  }

  fillArrayDate () {
    // Insert Date in array
    for (let i = 1; i < 366; i++) {
      const newDate = moment(this.arrayDate[0].dataRef)
        .add(i, 'days')
        .format('YYYY-MM-DD')
        .toString()
      this.arrayDate.push({
        dataRef: newDate,
        id: i + 1
      })
    }
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

.cab {
  border: 1px solid rgb(219, 219, 219);
  // padding: 0.5px;
  width: 50px;
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
