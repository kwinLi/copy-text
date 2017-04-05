## 简述

在浏览器端通过 JS 复制内容到剪贴板。

## 安装

```html
<script src="copy-text.js"></script>
```

## 使用

```js
let result = copyText('这里是需要复制的内容');
if(result) {
	alert('复制成功！');
} else {
	alert('复制失败！');
}
```
