<template>
  <div class="w-screen h-screen">
<!--     <transition
    :enter-active-class="transE"
    :leave-active-class="transL">
    <router-view />
    </transition> -->
       <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const user = namespace('User')

@Component
export default class AppMain extends Vue {
  @user.State
  public transE!: string

  @user.State
  public transL!: string
}
</script>

<style lang="scss">
</style>
