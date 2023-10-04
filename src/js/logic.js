export default function logic() {
  return {
    init() {
      console.log('logic is loaded')
    },
    headerVisible: true,
    toggleHeaderState(state) {
      // this.headerVisible = !this.headerVisible
      if (state === 'enter') {
        this.headerVisible = true
        this.$refs.header.classList.remove('opacity-0')
      } else {
        this.headerVisible = false
      }
    },
  }
}
