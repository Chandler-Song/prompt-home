# 🚀 部署指南

## ✅ 部署已完成

网站已成功部署到 GitHub Pages!

**访问地址**: https://Chandler-Song.github.io/prompt-home

---

## 已完成的配置

### 1. Git 仓库初始化
- ✅ 初始化 Git 仓库
- ✅ 配置 SSH 远程仓库: `git@github.com:Chandler-Song/prompt-home.git`
- ✅ 推送到 main 分支

### 2. GitHub Pages 部署
- ✅ 安装 gh-pages 工具
- ✅ 配置部署脚本 (package.json)
- ✅ 配置 Vite base 路径: `/prompt-home/`
- ✅ 创建并推送 gh-pages 分支

### 3. SSH 认证
- ✅ SSH 密钥已配置并测试通过
- ✅ 使用 SSH 协议推送 (安全且无需重复输入密码)

---

## 后续更新流程

每次修改代码或数据后,按以下步骤更新:

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
