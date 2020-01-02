## waterMark组件使用文档：

### 说明
该组件是网页水印组件<br/>

---------------------------

### 使用说明

```js
    <waterMark :inputText="inputText" :inputAllowDele="flase" :inputDestroy="false"/>
```



### Component argument
|序号|Param|类型|说明|
|:-:|:-|:-|:-|:-|
|1|inputText|String|水印文字|
|1|inputColor|String|水印文字颜色|
|2|inputAllowDele|boolean|是否允许通过js或开发者工具等途径修改水印DOM节点|
|3|inputDestroy|boolean|是否在组件销毁时去除水印节点|

