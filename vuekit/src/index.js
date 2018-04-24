import * as components from './components'

function Vuekit (Vue, args) {
  const Vuekit = components.Vuekit
  Vue.use(Vuekit, {components})
}

export default Vuekit
