
<template>
  <div class="h-4 relative w-full rounded-full overflow-hidden">
        <div class="w-full h-full bg-gray-200 absolute"></div>
        <div class="h-full transition-all duration-300 bg-green-500 absolute text-white text-xs flex justify-center" :style="'width: ' + n "> {{ n  }}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component
export default class Progress extends Vue {
 @Prop() private n!: string;

  @Watch('n')
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 newValue (newValue: number, oldValue: number) {
   console.log(newValue)
 }
}
</script>
