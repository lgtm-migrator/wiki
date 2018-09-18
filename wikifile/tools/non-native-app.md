# 非Native的APP开发技术

除了Native的APP开发技术之外，开发人员可以利用现有的Web技术栈开发简单的应用。

## Overview

![](https://on-img.com/chart_image/5a3b1775e4b0909c1a9b9643.png)

## PWA - 渐进式应用

* 运行在浏览器，保存图标在桌面
* 调用标准WEB API
* 跨平台特性好，但是API的行为在浏览器之间有差异
* 对于native功能支持较少，并且无法通过开发扩展

## Hybrid - 混合应用

* 单独APP
* UI使用WebView，浏览器显示
* 将native api的句柄注入到JS运行时中，实现native调用
* 可以通过编写扩展（plugin），编写特定平台代码，实现支持新的native api

## React Native/NativeScript

* 单独APP
* 使用Web技术栈编写Native UI
* 可以通过编写特定平台代码实现扩展

## 对比

以下是各种技术的对比

![](http://on-img.com/chart_image/5a3c979ce4b0bf89b8536e54.png)

| 技术                      | 独立APP | UI     | API        | 扩展性 | 易用性 |
|:--------------------------|:--------|:-------|:-----------|:-------|:-------|
| PWA                       | 否      | Web    | Web API    | 差     | 差     |
| Hybrid (Cordova)          | 是      | Web    | Native API | 好     | 好     |
| React Native/NativeScript | 是      | Native | Native API | 好     | 差     |

* 基于Web的UI在不同性能的设备上表现不同 (差异很大)
* 基于React Native的应用学习曲线陡峭 (JS -> React -> React Native -> 特定组件库)
* Hybrid (Cordova) 可以自由选择UI框架
* PWA应用一定需要Web Host，以及HTTPS证书
* NativeScript技术尚不成熟，开发工作量很大，插件很少，API也少