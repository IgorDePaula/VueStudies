import closeable from '../../mixins/closeable'
import VKIcon from '../VKIcon'
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
    const content = [h('div', this.$slots.default)]
    if (this.closable) {
      const self = this
      content.push(h(VKIcon, { props: { closeable: this.closable },
        on: {
          'vkicon-close': () => { this.closed = true }
        } }, 'X'))
    }
    const props = {
      staticClass: 'VKAlert'
    }
    if (!this.closed) {
      return h('div', props, content)
    }
  }
}
