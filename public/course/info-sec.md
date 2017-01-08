# 信息安全工程

## 第一章 信息安全工程

* 研究如何建立能够面对错误、攻击和灾难的**可靠信息系统**。
* 采用SE的概念、原理、技术和方法，来研究、设计、开发、实施、管理、维护和评估信息系统的安全，是将实践流程、管理技术和当前能够得到的最好的技术方法相结合的过程。 

### 信息保障

* 信息安全的保护能力
* 入侵检测能力
* 事件响应能力
* 快速恢复能力

保护、检测、响应和恢复

安全机制，即PDRR安全模型。

### 信息安全保障体系的架构

* 组织要素
* 内容要素
* 技术要素

### 为什么需要信息安全工程

信息安全保障过程需要实施信息安全工程，这是由信息安全的特性决定的。 

* 社会性
* 全面性
* 必然性
* 过程性
* 动态性
* 相对性
* 层次性

## 第二章 ISSE过程

* 信息系统安全工程（ISSE）是对信息系统建设中涉及的多种要素按照系统论的科学方法来进行操作的一种安全工程理论，是系统工程学、系统采购、风险管理、认证和鉴定以及生命周期的支持过程的一部分，是作为系统工程过程的一个自然扩展而给出的。  


* ISSE的指导思想:将安全工程与信息系统开发集成。 

* ISSE 和 SE一一对应

### 发掘信息安全需求

确认系统用户的角色，责任和权利

### 定义信息安全系统

确定保护对象,描述安全系统边界和环境情况

信息安全保护的对象、需求和功能集合

### 设计信息安全系统

详细说明信息保护系统的信息安全设计方案。

### 实施信息安全系统

将满足信息安全需求的信息保护子系统中的各配置项购买或建造出来，然后组装、集成、检验、认证和评估其结果。

1. 采购系统
1. 建造系统
1. 测试系统

### 评估信息安全系统

主要指系统在

* 保密性
* 完整性
* 可用性
* 不可否认性

等安全特性方面的有效性。

### ISSE基本功能

* 安全规划与控制。
* 确定安全需求。
* 支持安全设计。 
* 分析安全操作。 
* 支持安全生命周期。 
* 管理安全风险。

## 第三章   SSE-CMM过程

### 是什么

SSE-CMM描述了一个组织的安全工程过程的本质特征

SSE-CMM重要用途在于**对信息安全工程能力进行评估**，因而该模型是信息安全工程实施的通用评估标准

### 作用

* 评估他们的安全工程实践和提出改进意见的工具
* 安全工程评估组织作为**建立基于组织能力信任度**的基础
* 用户作为评估产品提供商安全工程能力的标准机制

### 过程域

SSE-CMM是将通用的安全工程过程分为三个不同的基本单元

* 风险
* 工程
* 信任度

### 域维

包含了共同定义安全工程的实施活动，这些实施在SSE-CMM模型中称为“基本实践” 组件。

### 能力维

表示的实践代表了组织对过程的管理和制度化能力，它们称为“通用实践” 。通用实践是基本实践过程中**必须要完成**的活动。


### IDEAL方法模型

初始化（Initiating）、诊断（Diagnosing）、建立（Establishing）、执行（Acting）和学习（Learning）

周期性地评估系统的安全状态，不断改进组织的安全工程过程。

## 第四章   信息安全工程与等级保护

等级保护的核心观念是**保护重点、适度安全**。

### 基本方法

1. 分区域分等级安全保护
1. 内部保护与边界保护
1. 网络安全保护

### 等级划分

1. 用户自主保护级 - 用户自主控制资源访问
1. 系统审计保护级 - 访问行为需要被审计
1. 安全标记保护级 - 通过标记实现强制访问控制
1. 结构化保护级 - 可信计算机结构化
1. 访问验证保护级 - 所有的过程都需要验证


### 等级保护基本技术

#### 标识与鉴别技术：

1. 口令鉴别 
1. 生物特征鉴别 
1. 数字证书鉴别

#### 访问控制技术：

1. 自主访问控制 
1. 强制访问控制 

#### 存储和传输的数据完整性保护技术：

1. 包括一般的校验码机制（例如奇偶校验、海明校验等）、密码系统支持的校验机制、隐藏信息技术支持的纠错机制等。
1. 访问控制、身份鉴别、边界隔离与防护等实际上也都是与完整性保护有关的安全技术和机制。 

#### 存储和传输的数据保密性保护技术：

1. 包括密码系统支持的加密机制、隐藏信息技术支持的信息保护机制等。
1. 访问控制、身份鉴别、边界隔离与防护等实际上也都是与保密性保护有关的安全技术和机制 。

#### 边界隔离与防护技术：

包括防火墙、入侵检测、防病毒网关、非法外连检测、网闸、逻辑隔离、物理隔离、信息过滤等，用于阻止来自外部网络的各种攻击行为。

#### 系统安全运行及可用性保护技术：

安全审计技术、安全性检测分析技术、系统安全监控技术、信息系统容错备份与故障恢复技术 

#### 密码技术：

1. 包含对称密钥密码、非对称密钥密码和单向函数。
1. 密码技术可用于实现数据加密、数字签名、身份认证、权限验证、数据完整性验证等。

## 第五章   信息安全管理

信息安全管理是组织中用于指导和管理各种控制信息安全风险、一组**相互协调**的活动，有效的信息安全管理应该是在**有限的成本**下，尽量做到安全“滴水不漏”

### 信息安全管理内容

1. 落实安全管理机构及安全管理人员，明确职责，制定安全规划。
1. 开发安全策略。
1. 实施风险管理。
1. 制定业务持续性计划和灾难恢复计划。
1. 选择与实施安全措施。
1. 保证配置、变更的正确与安全。
1. 进行安全审计。
1. 保证维护支持。
1. 进行监控、检查，处理安全事件。
1. 安全意识与安全教育。
1. 人员安全管理等。

### 信息安全管理原则

1. 基于安全需求原则。
1. 主要领导负责原则。
1. 全员参与原则。
1. 系统方法原则。
1. 持续改进原则。
1. 依法管理原则。
1. 分权和授权原则。
1. 选用成熟技术原则。
1. 分级保护原则。
1. 管理与技术并重原则。
1. 自保护和国家监管结合原则。

### 信息安全管理实施要点

1. 加强审计管理。 
1. 加强行政管理。 
1. 加强人事管理。
1. 加强安全管理。

## 第六章   信息安全管理体系

信息安全管理体系（ISMS），是组织在一定范围内建立的**信息安全方针和目标**，以及为实现这些方针和目标所采用的**方法和文件**体系。 

### PDCA（戴明环）循环模型：

“规划（Plan）-实施（Do）-检查（Check）-处置（Act）”

### ISMS风险管理方法

1. 接受风险。
1. 避免风险。
1. 降低风险。
1. 转移风险。

## 第七章   信息安全风险评估

用于**了解信息系统的安全状况**，估计威胁发生的**可能性**，计算由于系统易受到攻击的脆弱性而引起的潜在损失。

帮助选择安全防护措施，将风险降低到可接受的程度，提高信息安全保障能力。

风险评估是信息安全管理体系的核心环节，是信息安全保障体系建设过程中的重要评价方法和决策机制。

### 信息安全风险评估的基本要素

* 信息系统中的**资产**
* 面临的可能**威胁**
* 存在的**脆弱性**
* **安全风险**及其对业务的**影响**
* 系统中已有的**安全控制措施**和**安全需求**


## 第八章  信息安全策略


### 分类

1. 总体安全策略（或企业信息安全策略）
1. 问题安全策略
1. 功能安全策略

### 制定原则

* 需求、威胁、风险与代价的平衡原则。
* 安全可靠性与业务灵活性的平衡原则。
* 完整性原则。
* 易操作性原则。
* 可评估性原则。
* 坚持动态性。