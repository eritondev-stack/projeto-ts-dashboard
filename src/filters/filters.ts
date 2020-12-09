/* eslint-disable */
import Vue from "vue"
import moment from 'moment'

  Vue.filter("dayBr", function(valor: string) {
     moment.locale()
      return moment(valor).format('DD/MM/YYYY')
  });
