# stroke-text

一个方便设置多重文字描边的组件。

## 用法

```vue
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

```

## 参数说明

|参数名|参数类型|参数说明|
|-|-|-|
|text|string|文本内容
|strokes|array|多重描边的样式列表，由字符串组成的数组，每个字符串将作为-webkit-text-stroke属性的值。

## 效果
![image](https://github.com/Tickly/stroke-text/blob/master/public/demo.png)


## 原理

利用-webkit-text-stroke 属性生成描边样式，但是该属性只支持单个描边，所以组件里会自动生成多个 DOM 以实现多重描边效果
