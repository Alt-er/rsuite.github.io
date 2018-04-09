# Slider 滑动输入控件

* `<Slider>` 滑动输入控件

## 获取组件

```js
import { Slider } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Slider>`

| 属性名称        | 类型`(默认值)`               | 描述                       |
| --------------- | ---------------------------- | -------------------------- |
| min             | number`(0)`                  | 滑动范围的最小值           |
| max             | number`(100)`                | 滑动范围的最大值           |
| step            | number`(1)`                  | 滑动一步的值               |
| value           | number                       | 值（受控）                 |
| defaultValue    | number                       | 默认值                     |
| className       | string                       | 自定义 class               |
| handleClassName | string                       | 自定义手柄的 class         |
| handleTitle     | React.Node                   | 自定义手柄内显示内容       |
| barClassName    | string                       | 自定义滑动条 class         |
| disabled        | boolean                      | 是否禁用                   |
| graduated       | boolean                      | 显示刻度                   |
| tooltip         | boolean`(true)`              | 滑动时候，是否显示 tooltip |
| progress        | boolean                      | 显示滑动的进度条           |
| vertical        | boolean                      | 垂直滑动                   |
| onChange        | (value: number) => void      | 数据发生改变的回调函数     |
| renderMark      | (mark: number) => React.Node | 自定义渲染标尺上的标签     |
