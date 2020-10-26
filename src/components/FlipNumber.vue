
<template>
  <div ref="numero" :class="classe">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Flip } from 'number-flip'
@Component
export default class FlipComponent extends Vue {
 @Prop({ default: 0 }) private numberProp!: number;
 @Prop() private classe!: string;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 private flip: any;
 private numberP = 0;

  $refs!: {
   numero: HTMLDivElement;
  }

  @Watch('numberProp')
  newValue (newValue: number, oldValue: number) {
    this.flipChange(oldValue, newValue)
  }

  mounted () {
    this.flipChange(0, this.numberProp)
  }

  flipChange (nOld = 0, nNew = 0) {
    // eslint-disable-next-line no-new
    this.$refs.numero.innerHTML = ''
    this.flip = new Flip({
      node: this.$refs.numero,
      from: nOld,
      to: nNew,
      duration: 0.5,
      separator: '.'
    })
  }
}
</script>
