# 哪一些开源许可证是商业友好的？

## 简明版

以下开原协议相对宽松，只需要保留许可文本即可

* Apache 2.0
* MIT
* BSD 2/3

需要特别注意是否有**附加协议**，特别是BSD 3的专利协议，例如React Native的[附加协议](https://github.com/facebook/react-native/blob/master/PATENTS)

## 详细原因

### 协议传递

由于协议的传递性，如果一个项目A使用了基于如下许可的开源项目，项目A也需要开源。

* GPL (GNU General Public License)
* Eclipse
* LGPL
* MPL(Mozilla  Public License 2.0)

### 限制商用

**不允许商业使用**

* CC-NC

### 开源协议权利与责任

| 开源协议                                     | 专利授权 | 公开源码 | 使用相同协议 |
| ---------------------------------------- | ---- | ---- | ------ |
| Apache  License 2.0                      | 授予   | 不需要  | 不需要    |
| BSD 2-clause  "Simplified" License       | 未说明  | 不需要  | 不需要    |
| BSD 3-clause  Clear License              | 未说明  | 不需要  | 不需要    |
| BSD 3-clause  "New" or "Revised" License | 不授予  | 不需要  | 不需要    |
| Eclipse  Public License 1.0              | 授予   | 需要   | 需要     |
| GNU General  Public License v2.0         | 未说明  | 需要   | 需要     |
| GNU General  Public License v3.0         | 授予   | 需要   | 需要     |
| MIT License                              | 未说明  | 不需要  | 不需要    |
| Mozilla  Public License 2.0              | 未说明  | 需要   | 需要     |