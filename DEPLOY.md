# 🚀 快速部署指南

## 部署到 GitHub Pages (3 步完成)

### 步骤 1: 安装部署工具
```bash
cd prompt-home
npm install --save-dev gh-pages
```

### 步骤 2: 初始化 Git 并推送
```bash
git init
git add .
git commit -m "Initial commit: Prompt Home website"
git branch -M main
git remote add origin https://github.com/Chandler-Song/prompt-home.git
git push -u origin main
```

### 步骤 3: 部署网站
```bash
npm run deploy
```

### 启用 GitHub Pages
1. 访问: https://github.com/Chandler-Song/prompt-home/settings/pages
2. Source 选择: **Deploy from a branch**
3. Branch 选择: **gh-pages** 
4. 点击 **Save**

### 访问网站
等待 1-2 分钟后访问:
👉 **https://Chandler-Song.github.io/prompt-home**

---

## 更新网站

每次修改数据或代码后:

```bash
# 1. 提交更改
git add .
git commit -m "更新提示词数据"

# 2. 推送到 GitHub
git push

# 3. 重新部署
npm run deploy
```

---

## 修改数据文件

### 添加学习资源
编辑: `public/data/resources.json`

### 添加提示词
编辑: `public/data/prompts.json`

修改后重新构建和部署即可。

---

## 常见问题

**Q: 部署后访问 404?**
- 等待 1-2 分钟让 GitHub Pages 构建完成
- 检查仓库 Settings → Pages 是否正确配置

**Q: 样式丢失?**
- 检查 `vite.config.js` 中的 `base: '/prompt-home/'` 是否与仓库名一致

**Q: 如何绑定自定义域名?**
1. 在仓库根目录创建 `CNAME` 文件
2. 写入你的域名: `your-domain.com`
3. 在 GitHub Pages 设置中添加自定义域名
4. 配置 DNS CNAME 记录指向 `Chandler-Song.github.io`

---

**需要帮助?** 查看完整文档: [README.md](README.md)
