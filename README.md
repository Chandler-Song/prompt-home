# ✨ Prompt Home - 提示词导航网站

一个现代化、优雅美观的提示词学习与收藏导航网站,采用 Apple 风格设计,支持一键部署到 GitHub Pages。

**🌐 在线预览**: [https://Chandler-Song.github.io/prompt-home](https://Chandler-Song.github.io/prompt-home)

## 📑 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
  - [本地开发](#本地开发)
  - [部署到 GitHub Pages](#部署到-github-pages)
- [数据配置指南](#数据配置指南)
  - [添加学习资源](#添加学习资源)
  - [添加提示词](#添加提示词)
  - [修改和删除](#修改和删除)
- [自定义样式](#自定义样式)
- [常见问题](#常见问题)
- [许可证](#许可证)

## 🎯 功能特性

### 第一部分:提示词学习资源导航
- 📚 **分类展示**: 按教程、工具、生成器等分类组织
- 🔍 **智能搜索**: 支持名称、描述、标签多维度搜索
- 🔗 **快捷跳转**: 一键访问外部资源网站
- 📱 **响应式设计**: 完美适配手机、平板、桌面端

### 第二部分:个人提示词收藏库
- 📝 **提示词管理**: 标题、描述、标签、分类完整信息
- 📋 **一键复制**: 点击即可复制提示词内容
- 🏷️ **标签筛选**: 支持多标签组合筛选
- 🔎 **实时搜索**: 快速定位所需提示词
- 📖 **使用说明**: 详细的场景说明和使用指南

## 🛠 技术栈

- **前端框架**: React 18 + Vite
- **图标库**: Lucide React
- **样式方案**: CSS Variables + CSS Modules
- **设计风格**: Apple Design Language
- **部署平台**: GitHub Pages
- **数据存储**: 本地 JSON 配置文件

## 📁 项目结构

```
prompt-home/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 部署配置
├── public/
│   └── data/
│       ├── resources.json          # 学习资源数据
│       └── prompts.json            # 提示词收藏数据
├── src/
│   ├── components/                 # 可复用组件
│   │   ├── Header.jsx/css          # 顶部导航栏
│   │   ├── Footer.jsx/css          # 页脚
│   │   ├── SearchBar.jsx/css       # 搜索栏
│   │   ├── TagFilter.jsx/css       # 标签筛选
│   │   ├── ResourceCard.jsx/css    # 资源卡片
│   │   └── PromptCard.jsx/css      # 提示词卡片
│   ├── pages/                      # 页面组件
│   │   ├── Resources.jsx/css       # 学习资源页
│   │   └── Prompts.jsx/css         # 提示词收藏页
│   ├── styles/                     # 全局样式
│   │   ├── variables.css           # CSS 变量
│   │   ├── global.css              # 全局样式
│   │   └── responsive.css          # 响应式断点
│   ├── App.jsx                     # 主应用
│   └── main.jsx                    # 入口文件
├── vite.config.js                  # Vite 配置
├── package.json                    # 项目依赖
└── README.md                       # 项目文档
```

## 🚀 快速开始

### 本地开发

#### 前置要求
- Node.js 18+ 
- npm 或 yarn
- Git

#### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/Chandler-Song/prompt-home.git
cd prompt-home
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问应用**
打开浏览器访问: `http://localhost:5173`

#### 构建生产版本
```bash
npm run build
```

构建产物将生成在 `dist` 目录。

#### 本地预览生产版本
```bash
npm run preview
```

### 部署到 GitHub Pages

项目已配置 GitHub Actions 自动化部署,推送到 main 分支即可自动部署。

#### 自动化部署(推荐)

1. **首次配置**

确保项目已推送到 GitHub 仓库:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:Chandler-Song/prompt-home.git
git push -u origin main
```

2. **启用 GitHub Pages**
   - 打开 GitHub 仓库页面
   - 进入 **Settings** → **Pages**
   - Source 选择 **GitHub Actions**
   - 系统会自动识别已配置的工作流

3. **触发部署**

每次推送到 main 分支都会自动触发部署:
```bash
git add .
git commit -m "更新说明"
git push origin main
```

或在 GitHub Actions 页面手动触发:
   - 进入 **Actions** → **Deploy to GitHub Pages**
   - 点击 **Run workflow** → **Run workflow**

4. **访问网站**

等待 1-2 分钟构建完成后,访问: `https://Chandler-Song.github.io/prompt-home`

#### 部署配置说明

项目使用 GitHub Actions 工作流 `.github/workflows/deploy.yml`:
- ✅ 监听 main 分支推送
- ✅ 支持手动触发
- ✅ 自动安装依赖(含缓存)
- ✅ 自动构建并部署
- ✅ 并发控制,避免重复部署
- ✅ 使用最新的 deploy-pages action

**工作流特点:**
- **缓存优化**: 使用 npm cache 加速依赖安装
- **权限控制**: 最小权限原则(pages write, id-token write)
- **并发管理**: 同一时间只运行一个部署任务
- **Node.js 20**: 使用稳定版本构建环境

#### 更新内容后部署

1. **修改数据文件**
   - 编辑 `public/data/resources.json` (学习资源)
   - 编辑 `public/data/prompts.json` (提示词收藏)

2. **提交并推送**
```bash
git add public/data/
git commit -m "更新提示词资源"
git push origin main
```

GitHub Actions 会自动构建并部署,1-2 分钟后生效。

#### 故障排查

如果部署失败,检查:
1. **GitHub Actions 日志**: 进入 Actions 标签页查看详细错误
2. **Node.js 版本**: 确保本地使用 Node.js 18+
3. **依赖安装**: 运行 `npm install` 确保所有依赖正确安装
4. **构建测试**: 本地运行 `npm run build` 确认构建成功
5. **Pages 设置**: 确认 Pages Source 设置为 GitHub Actions

## 📝 数据配置指南

所有数据都存储在 `public/data/` 目录下的 JSON 文件中,修改后即时生效(开发环境)或需要重新构建(生产环境)。

### 添加学习资源

编辑 `public/data/resources.json`:

```json
{
  "categories": [
    {
      "id": "tutorial",                    // 分类唯一标识
      "name": "提示词学习教程",             // 分类显示名称
      "icon": "BookOpen",                  // 图标名称(Lucide Icons)
      "resources": [
        {
          "name": "资源名称",              // 网站/资源名称
          "description": "资源简介",       // 简短描述
          "url": "https://example.com",    // 跳转链接
          "tags": ["标签1", "标签2"]       // 标签数组
        }
      ]
    }
  ]
}
```

**示例:添加新资源**
```json
{
  "name": "我的新资源",
  "description": "这是一个很棒的提示词工具",
  "url": "https://my-resource.com",
  "tags": ["工具", "AI", "免费"]
}
```

**可用图标**: BookOpen, Wrench, Sparkles, Library, Star, Code, FileText, Zap, Globe, Layers

更多图标查看: [Lucide Icons](https://lucide.dev/icons/)

### 添加提示词

编辑 `public/data/prompts.json`:

```json
{
  "prompts": [
    {
      "id": "9",                           // 唯一标识(数字或字符串)
      "title": "提示词标题",               // 显示标题
      "description": "简短描述",           // 用途说明
      "content": "完整提示词内容",         // 可复制的完整提示词
      "tags": ["标签1", "标签2"],          // 标签数组
      "category": "分类名称",              // 分类标识
      "usage": "使用说明"                  // 详细使用指南
    }
  ]
}
```

**示例:添加新提示词**
```json
{
  "id": "9",
  "title": "邮件写作助手",
  "description": "帮助撰写专业、得体的商务邮件",
  "content": "请帮我写一封邮件:\n\n收件人:[描述收件人]\n目的:[邮件目的]\n要点:[需要包含的要点]\n语气:[正式/友好/urgent]\n\n请提供:\n1. 邮件主题\n2. 完整邮件正文\n3. 关键表达建议",
  "tags": ["写作", "商务", "邮件"],
  "category": "内容创作",
  "usage": "填写收件人、目的、要点和语气要求"
}
```

### 修改和删除

#### 修改资源/提示词
直接在 JSON 文件中找到对应项,修改字段值即可。

#### 删除资源/提示词
从数组中删除对应的对象。

**注意**: 
- 确保 JSON 格式正确(使用 JSON 验证工具)
- 修改后在开发环境刷新即可看到效果
- 生产环境需要重新构建并部署

## 🎨 自定义样式

### 修改主题色

编辑 `src/styles/variables.css`:

```css
:root {
  --color-primary: #0071e3;           /* 主色调 */
  --color-primary-hover: #0077ed;     /* 悬停色 */
  --color-background: #fbfbfd;        /* 背景色 */
  --color-text: #1d1d1f;              /* 文字色 */
  /* ... 更多变量 */
}
```

### 修改圆角、阴影等
同样在 `variables.css` 中调整对应变量。

## ❓ 常见问题

### Q: 修改数据后没有生效?
**A**: 
- 开发环境:刷新浏览器(Ctrl/Cmd + R)
- 生产环境:需要重新 `npm run build` 并部署

### Q: 如何修改网站标题和描述?
**A**: 编辑 `index.html` 文件中的 `<title>` 和 `<meta>` 标签。

### Q: 如何添加自定义域名?
**A**: 
1. 在仓库根目录创建 `CNAME` 文件,写入域名
2. 在 GitHub Pages 设置中添加自定义域名
3. 配置 DNS 解析

### Q: 部署后图片/图标不显示?
**A**: 检查 `vite.config.js` 中的 `base` 路径是否正确,应为 `/仓库名/`。

### Q: 如何添加更多分类?
**A**: 在 `resources.json` 的 `categories` 数组中添加新对象,确保 `id` 唯一。

### Q: 复制功能不工作?
**A**: Clipboard API 需要 HTTPS 环境,GitHub Pages 默认支持。本地开发可能需要 localhost。

## 📄 许可证

MIT License

---

**Made with ❤️ using React + Vite**

如果这个项目对你有帮助,欢迎 ⭐ Star 支持!
