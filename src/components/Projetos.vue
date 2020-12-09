<template>
  <tbody>
    <tr ref="dev" class="bg-white">
      <td class="w-40 text-center cursor-pointer" :style="`border-left: 5px solid ${color};`" rowspan="3" @click="hidden()">
        Cartões
      </td>
      <td class="inf-table w-24 text-center" rowspan="3">
        15%
     <!--    <div class="" ref="chart"></div> -->
      </td>
      <td class="inf-table w-40">Desenvolvimento</td>
      <td
        class="td-custom"
        v-for="value in dev"
        :key="value.value"
        :colspan="value.colSpan"
      >
        <template v-if="value.colSpan === 1"></template>
         <vs-tooltip top v-else :color="color" border shadow>
        <div @click="active=!active"  class="col-span-2 flex flex-col justify-center items-center h-full cursor-pointer select-none" >
          <div class="h-4 relative w-full rounded-full overflow-hidden" >
            <div class="w-full h-full bg-gray-300 absolute flex justify-end"></div>
            <div class="h-full transition-all duration-300 absolute text-white text-xs flex justify-center" :style="`width: ${progressDev}%; background-color: ${color};`">
              {{ progressDev }}%
            </div>
          </div>
        </div>

      <template #tooltip>
         {{ inicioDev | dayBr }} até  {{ fimDev | dayBr  }}
       </template>

         </vs-tooltip>

      </td>
    </tr>

    <tr ref="hom" class="bg-white">
      <td class="inf-table w-40">Homologação</td>
            <td
        class="td-custom"
        v-for="value in hom"
        :key="value.value"
        :colspan="value.colSpan"
      >
        <template v-if="value.colSpan === 1"></template>
        <div @click="active=!active" v-else class="col-span-2 flex flex-col justify-center items-center h-full cursor-pointer" >
          <div class="h-4 relative w-full rounded-full overflow-hidden" >
            <div class="w-full h-full bg-gray-300 absolute flex justify-end"></div>
            <div class="h-full transition-all duration-300 bg-green-500 absolute text-white text-xs flex justify-center" :style="`width: ${progressHom}%; background-color: ${color};`">
              {{ progressHom }}%
            </div>
          </div>
        </div>
      </td>
    </tr>

    <tr ref="prod" class="bg-white">
      <td class="inf-table">Produção</td>
            <td
        class="td-custom"
        v-for="value in prod"
        :key="value.value"
        :colspan="value.colSpan"
      >
        <template v-if="value.colSpan === 1"></template>
        <div @click="active=!active" v-else class="col-span-2 flex flex-col justify-center items-center h-full cursor-pointer" >
          <div class="h-4 relative w-full rounded-full overflow-hidden" >
            <div class="w-full h-full bg-gray-300 absolute flex justify-end"></div>
            <div class="h-full transition-all duration-300 bg-green-500 absolute text-white text-xs flex justify-center" :style="`width: ${progressProd}%; background-color: ${color};`">
              {{ progressProd }}%
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="inf-table bg-white" v-show="visivel" colspan="369">
        <slot></slot>
      </td>
    </tr>
    <tr colspan="383" height="10"></tr>
     <vs-dialog blur overflow-hidden v-model="active">
          <div>
             <div>
               <span><i class='bx bxs-edit-alt text-4xl text-cetelem-blue'></i></span>
               <span class="text-2xl ml-2">Editar Data</span>
             </div>

          <div class="flex flex-col justify-center items-center w-full">
              <div class="mt-3 w-64">
                <span>Data Início</span>
                  <vs-input  v-model="dataInicio" v-mask="'##/##/####'"  placeholder="DD/MM/AAAA"/>
              </div>

              <div class="mt-3 w-64">
                <span>Data Fim</span>
                  <vs-input v-model="dataFim" v-mask="'##/##/####'"  placeholder="DD/MM/AAAA"/>
              </div>
    <div class="mt-4 w-64">
  <vs-button color="#0CA2F2" block > <span class="text-base">Salvar</span> </vs-button>
    </div>

          </div>
          </div>

      </vs-dialog>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import moment from 'moment'
import Progress from '@/components/Progress.vue'
/* import ApexCharts from 'apexcharts' */
const dateNow = '2020-05-15'
interface ModelDataStartAndEnd {
  id: number;
  dataRef: string;
}

@Component({
  components: {
    Progress
  }
})
export default class HelloWorld extends Vue {
  $refs!: {
    chart: HTMLDivElement;
  }

  private visivel = false;
  @Prop() inicioDev!: string;
  @Prop() fimDev!: string;
  @Prop() idProject!: string;
  @Prop() inicioHom!: string;
  @Prop() fimHom!: string;
  @Prop() inicioPro!: string;
  @Prop() fimPro!: string;
  @Prop({ default: 'rgb(190,190,190)' }) color!: string;
  @Prop() arrayDate!: ModelDataStartAndEnd[];
  private visible2 = false;
  private active = false
  private hom: { colSpan: number}[] = [];
  private dev: { colSpan: number}[] = [];
  private prod: { colSpan: number}[] = [];
  private progressDev = '';
  private progressHom = '';
  private progressProd = '';
  private dataInicio = ''
  private dataFim = ''

  hidden () {
    this.visivel = !this.visivel
  }

  mounted () {
    this.calculator()
    /*     const options = {
      series: [70],
      chart: {
        width: 130,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%'
          },
          dataLabels: {
            name: {
              show: false,
              offsetY: -10,
              color: '#fff',
              fontSize: '13px'
            },
            value: {
              color: '#fff',
              fontSize: '30px',
              show: false
            }
          }
        }
      },
      labels: ['']
    }

    const chart = new ApexCharts(this.$refs.chart, options)
    chart.render() */
  }

  close () {
    this.visible2 = false
  }

  calculator () {
    this.fillCalendar('dev', this.inicioDev, this.fimDev)
    this.fillCalendar('hom', this.inicioHom, this.fimHom)
    this.fillCalendar('prod', this.inicioPro, this.fimPro)
  }

  searchIdByMonth (date: string): number {
    for (let index = 0; index < this.arrayDate.length; index++) {
      if (this.arrayDate[index].dataRef === date) {
        return this.arrayDate[index].id
      }
    }
    return 9999
  }

  fillCalendar (etapa: string, dtInicio: string, dtFim: string) {
    const dayStarter = this.searchIdByMonth(dtInicio)
    const dayEnd = this.searchIdByMonth(dtFim)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const totColSpan = dayEnd - dayStarter
    // get total days complete project
    const totDiasComplete = moment(dtFim).diff(moment(dtInicio), 'days')

    let totDiasCurrent = 0

    if (moment(dateNow).toDate() > moment(dtInicio).toDate()) {
      totDiasCurrent = moment(dateNow).diff(moment(dtInicio), 'days')
    }

    const percentProject = (totDiasCurrent / totDiasComplete) * 100 > 100 ? 100 : (totDiasCurrent / totDiasComplete) * 100
    console.log(percentProject)

    for (let index = 0; index < 368; index++) {
      if (index === 0) {
        if (etapa === 'dev') {
          this.dev = []
          this.progressDev = percentProject.toFixed(0)
        }

        if (etapa === 'hom') {
          this.hom = []
          this.progressHom = percentProject.toFixed(0)
        }

        if (etapa === 'prod') {
          this.prod = []
          this.progressProd = percentProject.toFixed(0)
        }

        continue
      }

      if (index === dayStarter) {
        if (etapa === 'dev') {
          this.dev.push({
            colSpan: totColSpan
          })
        }

        if (etapa === 'hom') {
          this.hom.push({
            colSpan: totColSpan
          })
        }

        if (etapa === 'prod') {
          this.prod.push({
            colSpan: totColSpan
          })
        }
        continue
      }

      if (index < dayStarter || index > dayEnd) {
        if (etapa === 'dev') {
          this.dev.push({
            colSpan: 1
          })
        }

        if (etapa === 'hom') {
          this.hom.push({
            colSpan: 1
          })
        }

        if (etapa === 'prod') {
          this.prod.push({
            colSpan: 1
          })
        }
      } else {
      }
    }
  }
}
</script>

<style scoped lang="scss">

.vs-dialog-content.blur {
    -webkit-backdrop-filter: saturate(110%) blur(2px) !important;
    backdrop-filter: saturate(110%) blur(2px) !important;
}

tbody {
  color: rgb(66, 66, 66);
  transition: all 0.1s;
  font-size: 15px;
}

tr {
  border: 1px solid rgb(211, 207, 207);
}

.td-custom {
  // Only nothing
  padding: 0.5px;
}

tbody:hover {
  background-color: rgb(247, 245, 245);
}

.inf-table {
  border: 1px solid rgb(211, 207, 207);
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
