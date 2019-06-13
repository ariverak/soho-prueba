import Vue from 'vue'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: { 
    xs : 0,
    sm: 450,
    md: 1000,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' 
})