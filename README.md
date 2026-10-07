# Daily News Reader

公开静态阅读页。初始数据为空，故页面会显示真实空状态，不虚构“今日新闻”。

部署：GitHub Pages，源为 `main` 分支根目录。

后续只更新 `data/` 中符合 [公开 schema](data/SCHEMA.md) 的 JSON。每次加入日期 JSON 后再更新 `data/index.json`；页面通过同源 fetch 手动刷新读取新数据，无需修改 HTML 或 JavaScript。
