export default {
  name: 'closeable',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
