<template>
  <div class="p-10 bg-gray-100 w-full h-full absolute">
    <div class="grid md:grid-cols-6 sm:grid-cols-2 gap-1">
     <div class="center">
      <vs-checkbox color="rgb(59,222,200)" v-model="option">
        <template #icon>
     <i class='bx bxl-vuejs'></i>
        </template>
      </vs-checkbox>
    </div>
      <div>
        <SearchCustom v-model="search" title="Nome Gestor" />
      </div>
      <div>
        <SelectCustom :opcoes="opcoes" title="Opções" v-model="select" />
      </div>
      <div>
        <InputCustom :opcoes="opcoes" title="Opções" v-model="select" />
      </div>
      <div>
        <button
          class="btn bg-red-500 hover:bg-red-600 text-white"
          @click="home()"
        >
          Button
        </button>
      </div>
      <div class="text-cetelem-black">
        <div v-if="covid == undefined">Não encontrado</div>
        <div v-else>
          <div v-for="(value, index) in covid.Countries" :key="index">
            {{ value.Country }}
          </div>
        </div>
        ,
      </div>
      <div class="text-blue-500">
        {{ name }}
      </div>
      <div
        class="col-span-2 border-gray-500 border flex flex-col justify-center items-center h-full"
      >
        <div
          @click="fechar()"
          class="h-4 relative w-full rounded-full overflow-hidden"
        >
          <div
            class="w-full h-full bg-gray-200 absolute flex justify-end"
          ></div>
          <div
            class="h-full transition-all duration-300 bg-green-500 absolute text-white text-xs flex justify-center"
            style="width: 50%"
          >
            50%
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <div class="grid grid-cols-12 bg-white rounded-lg p-1">
          <div
            class="col-span-3 h-16 w-16 rounded-full mt-auto mb-auto bg-gray-200 skeleton-box"
          ></div>
          <div class="col-span-9">
            <div class="grid grid-cols-6">
              <div class="col-span-6 text-gray-600 skeleton-box m-1 h-5"></div>
              <div
                class="col-start-1 col-span-5 text-gray-600 skeleton-box m-1 h-5"
              ></div>
              <div
                class="col-start-0 col-span-2 text-gray-600 skeleton-box m-1 h-5"
              ></div>
            </div>
          </div>
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
import { namespace } from 'vuex-class'
import { Covid } from '@/models/covidModel'
const user = namespace('User')
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
  private percent = 0;
  private search = null;
  private option = true
  @user.State
  public name!: string;

  @user.State
  public covid!: Covid;

  @user.Mutation
  public setCovid!: (newName: Covid) => void;

  @user.Getter
  public upperCase!: () => void;

  $refs!: {
    master: SVGSVGElement;
    devteste: HTMLDivElement;
  };

  @Watch('search')
  newValue (newValue: string) {
    console.log(newValue)
  }

  async mounted (): Promise<void> {
    setInterval(() => {
      this.numberC += 3000
      this.percent += 1
    }, 200)
  }

  home () {
    this.$router.push('/')
  }

  fechar () {
    console.log('Nada')
  }
}
</script>

<style lang="scss" scoped>
.teste-number {
  color: blueviolet;
  font-weight: 500;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.btn {
  width: 100%;
  border-radius: 9px;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-cetelem {
  background-color: theme("colors.cetelem.green");
  color: theme("colors.teal.100");
}

.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 3s infinite;
    content: "";
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

<!--     <FlipNumber :´numberProp="numberC" classe="teste-number"/>
    <FlipNumber :numberProp="numberC + 5000" classe="teste-number"/> -->
   <!--  <input type="number" v-model="percent">

      <SearchCustom v-model="search" title="Nome Gestor" />
       <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
       <p>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
       </p>

     <Oil :percent="percent" />

    <Termometro :percent="percent" />

       <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
       <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
       <SelectCustom :opcoes="opcoes" classe="mt-3" title="Opções" v-model="select"/>
          <button @click="svgVerify()" class="btn btn-block btn-success btn-sm mt-5 mb-5">Verificar</button>
          <button @click="remover()" class="btn btn-block btn-danger btn-sm mt-5 mb-5">Remover</button>
-->
