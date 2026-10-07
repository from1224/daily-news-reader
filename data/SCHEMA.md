# 公开新闻数据约定

固定页面只读取同源的 `data/index.json` 和 `data/YYYY-MM-DD.json`，不使用 GitHub API、认证、令牌或后端。

`index.json`：

```json
{"schemaVersion":1,"updatedAt":"2026-10-07T08:00:00+08:00","dates":[{"date":"YYYY-MM-DD","label":"YYYY-MM-DD"}]}
```

每个日期文件：

```json
{"schemaVersion":1,"date":"YYYY-MM-DD","updatedAt":"2026-10-07T08:00:00+08:00","items":[{"id":"stable-public-id","section":"栏目","title":"标题","summary":"必要短摘要","eventTime":"事件时间（含时区或说明）","updatedAt":"2026-10-07T08:00:00+08:00","source":{"name":"来源名","url":"https://example.com/original"}}]}
```

只可写入经审核的公开新闻短摘要与原文链接。不得写入用户偏好、阅读历史、住址、健康信息、凭据、机器路径、原始全文、抓取缓存或未审核候选。`summary` 只保留必要事实，不复制原文。

添加日期时先提交对应日期 JSON，再把日期加入 `index.json` 的 `dates`。静态数据提交会触发 GitHub Pages 正常重新部署；阅读页 HTML/JS 无需修改。
