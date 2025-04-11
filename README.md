# GSAP 动画项目

这是一个使用 React、Vite 和 GSAP 构建的动画展示项目。项目采用现代前端技术栈，集成了 Tailwind CSS 用于样式管理，以及 ESLint 用于代码规范。

## 技术栈

- React - 用户界面构建
- Vite - 前端构建工具
- GSAP - 动画库
- Tailwind CSS - 样式框架
- ESLint - 代码规范

## 开始使用

### 环境要求

- Node.js 16.0.0 或更高版本
- npm 7.0.0 或更高版本

### 安装

```bash
# 克隆项目
git clone [项目地址]

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
```

服务器将在 http://localhost:3000 启动

### 构建

```bash
# 构建生产版本
npm run build
```

## 项目结构

```
├── public/          # 静态资源
│   └── images/      # 图片资源
├── src/             # 源代码
│   ├── assets/      # 项目资源
│   ├── App.jsx      # 应用入口
│   ├── main.jsx     # 主渲染文件
│   └── index.css    # 全局样式
├── vite.config.js   # Vite配置
└── eslint.config.js # ESLint配置
```

## 插件说明

项目使用了以下 Vite 官方插件：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - 使用 Babel 进行 Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - 使用 SWC 进行 Fast Refresh

## ESLint 配置

如果您正在开发生产应用，我们建议使用 TypeScript 并启用类型感知的 lint 规则。查看[TS 模板](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)以在您的项目中集成 TypeScript 和[`typescript-eslint`](https://typescript-eslint.io)。
