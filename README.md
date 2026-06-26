# 静夜聆雨 个人网站

## 描述

这是网站“静夜聆雨”的前端项目，使用 `Next.js` 编写

## 技术栈

- next.js v16.2.9
- typescript v5
- tailwindcss v4
- gsap

## 依赖说明

| 依赖        | 功能                                    |
| ----------- | --------------------------------------- |
| @gsap/react | GSAP 的 React 集成库                    |
| ahooks      | 一套高质量可靠的 React Hooks 库         |
| clsx        | 用于有条件地构造字符串 `className`      |
| dayjs       | 轻量级日期处理库                        |
| gsap        | 动画库                                  |
| swiper      | 轮播库                                  |
| lodash      | JavaScript 实用工具库                   |
| ulid        | 通用唯一词典分类标识符，用于生成唯一 ID |

## 项目设置

**环境要求**

- Node.js >= 18.18

**安装依赖**

```shell
pnpm install
```

## 编译和运行项目

```bash
pnpm dev
```

## 已知问题

### shadcn CLI 无法通过 `pnpm dlx` 运行

`pnpm dlx shadcn@latest` 会因为 `@modelcontextprotocol/sdk` 传递依赖的 `zod` 版本不兼容而报错：

```
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './v4' is not defined by "exports"
```

**解决方案**：使用 `npx` 代替 `pnpm dlx`：

```bash
# ❌ 不可用
pnpm dlx shadcn@latest add <component>

# ✅ 可用
npx shadcn@latest add <component>
```
