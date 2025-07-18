# Change Log

## [main] 0.1.6
- 针对 0.1.5 无法在 Windows 启动的紧急修复。
- 修复环境变量中添加 token 失效的问题。

## [main] 0.1.5
- 修复 gemini 获取模型列表时存在 models 前缀的问题
- 增加 web api 功能
- 修复无法在对话框中使用 mcp resource 的 bug
- 调试结果的工作区从 .vscode 迁移到 .openmcp，连接配置文件从 .vscode/openmcp_connection.json 迁移到 .openmcp/connection.json
- 技术栈更新：openmcp 全链路组件切换为 esm
- 优化引导界面文字布局。
- 文档和软件本体支持其他国家语言。

## [main] 0.1.4
- 重新实现 openai 协议的底层网络实现，从而支持 Google Gemini 全系列模型。
- 实现 index 适配器，从而支持 Grok3 全系列模型。
- 解决 issue#23 插件创建连接时报错“Cannot read properties of undefined (reading 'name')”
- 在填写 apikey 和 baseurl 的情况下，现在可以一键刷新模型列表，避免用户手动输入模型列表。

## [main] 0.1.3
- 解决 issue#21 点击按钮后的发送文本后不会清空当前的输入框。
- 修复暂停按键在多轮对话后消失的问题。
- 修复 issue#25 无法连接 streamable http 的问题。

## [main] 0.1.2
- 新特性：用户发送的信息增加「重新发送」按钮。
- 支持特性 issue#17 「关于左侧添加mcp服务器操作优化问题」：增加强制聚焦功能，用户创建mcp服务器连接的过程中不会让输入框失去焦点。
- 更新 MCP & OpenAI 协议内容。
- 解决 issue#21 vscode插件界面bug，在高度有限情况下无法通过滚动完全显示连接按钮。
- 解决 issue#21 最后一个标签页关闭并恢复默认页面。
- 解决 issue#22 工具模块UI异常，现在 openmcp 支持解析 pydantic 进行 typing 的 python mcp 了。
- 优化对象输入框，现在对象输入框具有语法高亮和受限度的自动补全了。
- 对于 trae 的所有默认主题进行额外支持。

## [main] 0.1.1
- 修复 SSH 连接 Ubuntu 的情况下的部分 bug
- 修复 python 项目点击 openmcp 进行连接时，初始化参数错误的问题
- 取消 service 底层的 mcp 连接复用技术，防止无法刷新
- 修复连接后，可能无法在欢迎界面选择调试选项的 bug

## [main] 0.1.0
- 新特性：支持同时连入多个 mcp server
- 新特性：更新协议内容，支持 streamable http 协议，未来将逐步取代 SSE 的连接方式
- impl issue#16：对于 uv 创建的 py 项目进行特殊支持，自动初始化项目，并将 mcp 定向到 .venv/bin/mcp 中，不再需要用户全局安装 mcp
- 对于 npm 创建的 js/ts 项目进行特殊支持：自动初始化项目
- 去除了 websearch 的设置，增加了 parallel_tool_calls 的设置，parallel_tool_calls 默认为 true，代表 允许模型在单轮回复中调用多个工具
- 重构了 openmcp 连接模块的基础设施，基于新的技术设施实现了更加详细的连接模块的日志系统.
- impl issue#15：无法复制
- impl issue#14：增加日志清除按钮

## [main] 0.0.9
- 修复 0.0.8 引入的bug：system prompt 返回的是索引而非真实内容
- 测试新的发布管线

## [main] 0.0.8
- 大模型 API 测试时更加完整的报错
- 修复 0.0.7 引入的bug：修改对话无法发出
- 修复 bug：富文本编辑器粘贴文本会带样式
- 修复 bug：富文本编辑器发送前缀为空的字符会全部为空
- 修复 bug：流式传输进行 function calling 时，多工具的索引串流导致的 JSON Schema 反序列化失败
- 修复 bug：大模型返回大量重复错误信息
- 新特性：支持一次对话同时调用多个工具
- UI：优化代码高亮的滚动条
- 新特性：resources/list 协议的内容点击就会直接渲染，无需二次发送
- 新特性：resources prompts tools 的结果的 json 模式支持高亮

## [main] 0.0.7
- 优化页面布局，使得调试窗口可以显示更多内容
- 扩大默认的上下文长度 10 -> 20
- 增加「通用选项」 -> 「MCP工具最长调用时间 (sec)」
- 支持富文本输入框，现在可以将 prompt 和 resource 嵌入到输入框中 进行 大规模 prompt engineering 调试工作了

## [main] 0.0.6
- 修复部分因为服务器名称特殊字符而导致的保存实效的错误
- 插件模式下，左侧管理面板中的「MCP连接（工作区）」视图可以进行增删改查了
- 新增「安装的 MCP 服务器」，用于安装全局范围的 mcp server
- 增加引导页面
- 修复无法进行离线 OCR 的问题
- 修复全局安装的 mcp 服务器 name 更新的问题

## [main] 0.0.5
- 支持对已经打开过的文件项目进行管理
- 支持对用户对应服务器的调试工作内容进行保存
- 支持连续工具调用和错误警告的显示
- 实现小型本地对象数据库，用于对对话产生的多媒体进行数据持久化
- 支持对于调用结果进行一键复现
- 支持对中间结果进行修改
- 支持 system prompt 的保存和修改

## [main] 0.0.4
- 修复选择模型后点击确认跳转回 deepseek 的 bug
- 修复 mcp 项目初始化点击工具全部都是空的 bug
- 修复无法重新连接的 bug
- 支持自定义第三方 openai 兼容的模型服务

## [main] 0.0.3

- 增加每一条信息的成本统计信息
- 修复初始化页面路由不为 debug 导致页面空白的 bug

## [main] 0.0.2

- 优化页面布局
- 解决更新标签页后打开无法显示的 bug
- 解决不如输入组件按下回车直接黑屏的 bug
- 更加完整方便的开发脚本

## [main] 0.0.1

- 完成 openmcp 的基础 inspector 功能
- 完成配置加载，保存，大模型设置
- 完成标签页自动保存
- 完成大模型对话窗口和工具调用
- 完成对 vscode 和 trae 的支持
