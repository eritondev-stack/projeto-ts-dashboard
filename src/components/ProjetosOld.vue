<template>
  <tbody>
    <tr ref="dev" class="bg-white">
      <td class="inf-table w-24 text-center" rowspan="3" @click="hidden()">Cartões</td>
      <td class="inf-table w-24 text-center" rowspan="3">98%</td>
      <td class="inf-table w-40" >Desenvolvimento</td>
    </tr>

    <tr ref="hom" class="bg-white">
      <td class="inf-table w-40">Homologação</td>
    </tr>

    <tr ref="prod" class="bg-white">
      <td class="inf-table">Produção</td>
    </tr>
    <tr>
        <td class="inf-table bg-white" v-show="visivel" colspan="369">
          <slot></slot>
        </td>
    </tr>
    <tr colspan="383" height="10"></tr>
    <div v-if="visible2" :style="`top: ${position.top}px; left: ${position.left}px`" class="deslocar">
     <button @click="close()">Fechar</button>
    </div>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import moment from 'moment'
import Progress from '@/components/Progress.vue'
const dateNow = '2020-07-03'
interface ModelDataStartAndEnd {
  id: number;
  dataRef: string;
}

interface ModelPosition {
  top: number;
  left: number;
}

@Component({
  components: {
    Progress
  }
})
export default class HelloWorld extends Vue {
  private visivel = false;
  @Prop() inicioDev!: string;
  @Prop() fimDev!: string;
  @Prop() idProject!: string;
  @Prop() inicioHom!: string;
  @Prop() fimHom!: string;
  @Prop() inicioPro!: string;
  @Prop() fimPro!: string;
  @Prop() arrayDate!: ModelDataStartAndEnd[]
  private position: ModelPosition = { top: 0, left: 0 }
  private visible2 = false;

  $refs!: {
    dev: HTMLTableRowElement;
    hom: HTMLTableRowElement;
    prod: HTMLTableRowElement;
  };

  hidden () {
    this.visivel = !this.visivel
  }

  mounted () {
    this.calculator()
    // insert event in methodes vuejs
    const btn = document.querySelectorAll(`.event-call-${this.idProject}`)
    btn.forEach((e) => {
      e.addEventListener('click', this.allProgress)
    })
  }

  close () {
    this.visible2 = false
  }

  // Call events click Progress
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allProgress (e: any) {
    const element: DOMRect = e.target.getBoundingClientRect()
    this.position.top = element.top
    this.position.left = element.left
    this.visible2 = true
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
    console.log('Cheguei aqui, por isso tem um erro')
    return 9999
  }

  fillCalendar (etapa: string, dtInicio: string, dtFim: string) {
    let tr!: HTMLTableRowElement

    // eslint-disable-next-line eqeqeq
    if (etapa === 'dev') {
      tr = this.$refs[etapa]
    }

    // eslint-disable-next-line eqeqeq
    if (etapa === 'hom') {
      tr = this.$refs[etapa]
    }

    // eslint-disable-next-line eqeqeq
    if (etapa === 'prod') {
      tr = this.$refs[etapa]
    }

    const monthStarter = this.searchIdByMonth(dtInicio)
    const monthEnd = this.searchIdByMonth(dtFim)
    const totColSpan = monthEnd - monthStarter
    // get total days complete project
    const totDiasComplete = moment(dtFim).diff(moment(dtInicio), 'days')

    // Compare day number
    let totDiasCurrent = 0

    if (moment(dateNow).toDate() > moment(dtInicio).toDate()) {
      totDiasCurrent = moment(dateNow).diff(moment(dtInicio), 'days')
    }
    // console.log(totDiasCurrent)

    const percentProject = ((totDiasCurrent / totDiasComplete) * 100) > 100 ? 100 : ((totDiasCurrent / totDiasComplete) * 100)

    const attr = tr.attributes[0].nodeName
    for (let index = 0; index < 368; index++) {
      // eslint-disable-next-line eqeqeq
      if (index == 0) {
        continue
      }
      if (index === monthStarter) {
        const tdCustom = tr.insertCell(-1)
        tdCustom.setAttribute(attr, '')
        tdCustom.setAttribute('id', etapa)
        tdCustom.setAttribute('colspan', String(totColSpan))
        const progress = `
        <div idProject="${etapa}" class="h-4 relative w-full rounded-xl overflow-hidden cursor-pointer event-call-${this.idProject}">
        <div idProject="${etapa}" class="w-full h-full bg-indigo-200 absolute"></div>
        <div idProject="${etapa}" class="h-full transition-all duration-300 bg-indigo-500 absolute text-white text-xs flex justify-center" style="width: ${percentProject.toFixed(0)}% "> ${percentProject < 5 ? '' : percentProject.toFixed(0) + '%'} </div>
        </div>
        `
        tdCustom.insertAdjacentHTML('afterbegin', progress)
      }
      if (index < monthStarter || index > monthEnd) {
        if (index === monthEnd + 1) {
          if (etapa === 'prod') {
            const tdCustom = tr.insertCell(-1)
            tdCustom.setAttribute(attr, '')
          } else {
            const tdCustom = tr.insertCell(-1)
            tdCustom.setAttribute(attr, '')
            tdCustom.setAttribute('class', 'td-custom')
          }
        } else {
          const tdCustom = tr.insertCell(-1)
          tdCustom.setAttribute(attr, '')
          tdCustom.setAttribute('class', 'td-custom')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.deslocar {
  width: 300px;
  height: 200px;
  background-color: rgba(112, 20, 199, 0.658);
  position: absolute;
  color: rgb(255, 255, 255);
  transition: all 1s;
  z-index: 10000;
}
tbody{
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

tbody:hover{
  background-color: rgb(247, 245, 245);
}

.inf-table{
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
