import Vue from 'vue'
import App from './TableHeaderSearch.vue'
import { Button, Col, DatePicker, Input, Option, Row, Select } from "element-ui"

Vue.use(Button)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Option)
Vue.use(Row)
Vue.use(Select)

new Vue({
  el: '#app',
  render: h => h(App)
})
