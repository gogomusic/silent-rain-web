---
title: MDX 语法示例
description: 一份覆盖常用 Markdown / MDX 语法的参考文档
---
# MDX 语法全面示例

这是一份涵盖常用 MDX 语法的参考页，包含标题、文本样式、列表、代码、表格、引用、脚注等。

---

## 1. 文本样式

普通正文段落。**加粗**、*斜体*、***加粗斜体***、~~删除线~~、`行内代码`、`<u>`下划线 `</u>`、H~2~O、X^2^。

`const`

---

## 2. 标题层级

### 2.1 三级标题

#### 2.1.1 四级标题

##### 五级标题

###### 六级标题

---

## 3. 引用

> 这是一段引用。
>
>> 这是嵌套引用。
>>
>
> —— 某位哲人

---

## 4. 列表

### 4.1 无序列表

- 苹果
- 香蕉
- 樱桃
  - 车厘子
  - 黑樱桃

### 4.2 有序列表

1. 第一步：准备材料
2. 第二步：开始编码
3. 第三步：测试运行

### 4.3 任务列表

- [X] 完成首页布局
- [X] 添加雨夜背景
- [ ] 实现深色模式切换
- [ ] 接入后端 API

---

## 5. 代码块

### JavaScript

```javascript
function greet(name) {
  const msg = `你好，${name}！`;
  console.log(msg);
  return msg;
}

greet("静夜聆雨");
```

### TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = { id: 1, name: "Admin" };
```

### Python

```python
def fibonacci(n: int) -> list[int]:
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
```

### CSS

```css
.rain-drop {
  position: absolute;
  top: 0;
  width: 1px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(186, 205, 235, 0.85)
  );
}
```

### Bash

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 代码检查
pnpm lint
```

---

## 6. 表格

| 特性 | 语法          | 说明         |
| ---- | ------------- | ------------ |
| 加粗 | `**text**`    | 强调文本     |
| 斜体 | `*text*`      | 轻微强调     |
| 代码 | `` `code` ``  | 行内代码引用 |
| 链接 | `[text](url)` | 超链接       |
| 图片 | `![alt](src)` | 嵌入图片     |

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 默认   |   居中   |   靠右 |
| 一     |    二    |     三 |

---

## 7. 链接与图片

- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- 内部链接：[回到顶部](#mdx-语法全面示例)

![占位图片](https://via.placeholder.com/600x200/1a2740/ffffff?text=静夜聆雨)

---

## 8. 分割线与脚注

这是一段需要注释的文本。[^1]

---

## 9. 定义列表

Next.js
: 基于 React 的全栈框架，支持 SSR 和 App Router。

Tailwind CSS
: 实用优先的 CSS 框架，v4 版本使用 CSS 原生配置。

TypeScript
: JavaScript 的超集，提供静态类型检查。

---

## 10. 数学公式（KaTeX）

行内公式：$E = mc^2$

块级公式：

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

$$
\begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{pmatrix}
$$

---

## 11. 标记与注音

这是一段 ==高亮文本==。

注音：`<ruby>`雨 `<rt>`yǔ `</rt></ruby>` `<ruby>`夜 `<rt>`yè `</rt></ruby>`

---

## 12. MDX 组件

> MDX 支持在 Markdown 中直接使用 React 组件。你可以在 `.mdx` 文件中导入并使用自定义组件。

```mdx
import MyComponent from "./components/my-component";

<MyComponent prop="value" />
```

---

*以上就是 MDX 中常用的语法，覆盖了大部分写作场景。*

[^1]: 这是对应的脚注内容，通常显示在页面底部。
