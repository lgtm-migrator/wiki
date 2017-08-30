# HTTP Over TLS

## HTTP

Note: 超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。所有的WWW文件都必须遵守这个标准。设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。1960年美国人Ted Nelson构思了一种通过计算机处理文本信息的方法，并称之为超文本（hypertext）,这成为了HTTP超文本传输协议标准架构的发展根基。Ted Nelson组织协调万维网协会（World Wide Web Consortium）和互联网工程工作小组（Internet Engineering Task Force ）共同合作研究，最终发布了一系列的RFC，其中著名的RFC 2616定义了HTTP 1.1。

HTTP是互联网的基础，是一个应用层协议，它最大的问题在于明文传输，所以数据很容易被窃取，应用开发者不得不在应用层的基础之上再实现自己的加密协议

## TLS

Note: 安全传输层协议（TLS）用于在两个通信应用程序之间提供保密性和数据完整性。
该协议由两层组成： TLS 记录协议（TLS Record）和 TLS 握手协议（TLS Handshake）。

传输层协议

## HTTPS

HTTP外面套了一层TLS，所有数据被加密

除了在查询DNS时，域名信息被泄露

## 为什么要写这篇文章？

在我使用wireshark抓了TLS的包之后，我明白了HTTPS本身是不会泄露信息的，无论是http报文，亦或是http的url param(这一点是之前我一直存疑的)，当tls包传出去之后，只有IP信息是暴露出来的