import VKIcon from '../VKIcon'
import './_alert.styl'

export default {
  name: 'vkalert',
  props: {
    closable: Boolean
  },
  data () {
    return {
      closed: false
    }
  },
  render (h) {
    const content = [this.$slots.default]
    if (!this.closed) {
      if (this.closable) {
        content.push(h(VKIcon, {
          props: {closeable: this.closable},
          on: { 'vkicon-close': () => { this.closed = true } }
        }, 'X'))
      }
      const props = {
        staticClass: 'VKAlert'
      }

      return h('div', props, content)
    }
  }
}
