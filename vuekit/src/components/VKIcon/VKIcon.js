import './_icon.styl'
export default {
  name: 'vkicon',
  props: {
    closeable: Boolean
  },
  render (h) {
    const content = [this.$slots.default]
    const props = {
      staticClass: 'vkicon'
    }
    if (this.closeable) {
      const self = this
      props.on = {
        click: () => self.$emit('vkicon-close')
      }
      props.class = ['closeable']
    }
    return h('div', props, content)
  }
}
