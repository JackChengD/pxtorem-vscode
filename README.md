# pxtorem

vscode插件将css文件的px转为rem

## 使用

`ctrl`+`shift`+`p` 后输入pxtorem

## 规则

按照postcss-pxtorem，暂不支持自定义

```js
{
    rootValue: 10,
    unitPrecision: 5,
    propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'padding', 'margin'],
	selectorBlackList: [],
	replace: true,
	mediaQuery: false,
	minPixelValue: 0,
}
```
