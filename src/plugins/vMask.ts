/* eslint-disable */
import Vue from 'vue'
// @ts-ignore
import { VueMaskDirective } from 'v-mask'
Vue.use(VueMaskDirective)
Vue.directive('mask', VueMaskDirective);