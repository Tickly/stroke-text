<template>
  <div id="app">
    <stroke-text class="my-stroke-text" text="测试文字" :strokes="strokes" />
  </div>
</template>
<script>
import StrokeText from './StrokeText'

export default {
  name: 'App',
  components: {
    StrokeText,
  },
  data () {
    return {
      strokes: [
        '0.2em red',
        '0.4em green',
        '0.6em black',
      ]
    }
  },
}
</script>
<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.my-stroke-text {
  font-size: 4em;
  color: white;
}
</style>
