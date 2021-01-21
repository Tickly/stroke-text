export default {
  name: 'StrokeText',
  props: {
    text: String,
    strokes: Array,
  },
  render (h) {
    return h('span', {
      style: {
        position: 'relative',
        zIndex: 0,
      }
    }, [
      this.text,
      this.renderTexts(h),
    ])
  },
  methods: {
    renderTexts (h) {
      return this.strokes.map((stroke, i) => {
        return this.renderText(h, stroke, i)
      })
    },
    renderText (h, stroke, i) {
      return h('span', {
        style: {
          position: 'absolute',
          left: 0,
          zIndex: -1 - i,
          '-webkit-text-stroke': stroke
        }
      }, this.text)
    }
  }
}