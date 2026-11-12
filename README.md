# 直抵前沿 · Frontier Bound

写给物理初学者的九本互动手册。
Nine interactive booklets for beginning physicists.

## 理念 · Principles

| | 中文 | English |
|---|---|---|
| **双语 Bilingual** | 中英对照，页面上一键切换。 | English and Chinese, switchable on every page. |
| **直观 Intuitive** | 以 HTML 呈现，配合动画与交互：先看见，再计算。 | Written in HTML with animations and interactions: see it first, then calculate. |
| **简洁 Simple** | 不堆砌文字，只讲要点。 | No padding — only what matters. |
| **数学 Mathematical** | 超出高中的数学，都在用到时循序渐进地教。 | Every bit of math beyond high school is taught step by step, when it is needed. |
| **练习 Practice** | 每章配海量习题，每次抽一组 10 题，答对 9 题即通过测试。 | Every chapter has a large problem bank; each test draws 10 problems, and 9 correct passes. |

## 书目 · Booklets

| # | 手册 Booklet | 前置 Prerequisites | 顺带学习的数学 Math taught inside |
|---|---|---|---|
| 1 | 经典力学 Classical Mechanics | — | 微积分 Calculus, 线性代数 Linear Algebra, 复数 Complex Numbers |
| 2 | 热力学与统计物理 Thermodynamics and Statistical Physics | 1 | 数理统计 Mathematical Statistics |
| 3 | 波动与光学 Waves and Optics | 1 | — |
| 4 | 宇宙学 Cosmology | 1, 2 | — |
| 5 | 量子力学 Quantum Mechanics | 1, 3 | 群论 Group Theory |
| 6 | 电动力学 Electrodynamics | 1, 3 | 偏微分方程 Partial Differential Equations |
| 7 | 固体物理 Solid State Physics | 2, 5 | — |
| 8 | 计算物理 Computational Physics | 2, 5 | — |
| 9 | 高等量子力学 Advanced Quantum Mechanics | 2, 5 | — |

## 学习地图 · Learning Map

```mermaid
graph TD
  CM["1 经典力学<br/>Classical Mechanics"]
  SP["2 热力学与统计物理<br/>Thermodynamics and Statistical Physics"]
  WO["3 波动与光学<br/>Waves and Optics"]
  COS["4 宇宙学<br/>Cosmology"]
  QM["5 量子力学<br/>Quantum Mechanics"]
  ED["6 电动力学<br/>Electrodynamics"]
  SSP["7 固体物理<br/>Solid State Physics"]
  CP["8 计算物理<br/>Computational Physics"]
  AQM["9 高等量子力学<br/>Advanced Quantum Mechanics"]
  CM --> SP
  CM --> WO
  SP --> COS
  WO --> QM
  WO --> ED
  SP --> SSP
  QM --> SSP
  SP --> CP
  QM --> CP
  SP --> AQM
  QM --> AQM
```

图中省略了可由其他箭头推出的前置关系（例如经典力学 → 量子力学）。
Arrows implied by other arrows are omitted (e.g. Classical Mechanics → Quantum Mechanics).

## 目录结构 · Structure

```
booklets/
├── index.html               # 首页与交互式学习地图 · Home page with the interactive map
├── README.md
├── assets/                  # 各册共用 · Shared by all booklets
│   ├── booklet.css          #   样式 · Styles
│   └── booklet.js           #   中英切换、KaTeX 公式 · Language switch, KaTeX math
├── classical-mechanics/     # 每本手册一个文件夹 · One folder per booklet
│   ├── index.html           #   本册目录 · Contents of the booklet
│   └── 01-motion-and-derivative.html   # 第 1 章 · Chapter 1
├── thermodynamics-and-statistical-physics/
├── waves-and-optics/
├── cosmology/
├── quantum-mechanics/
├── electrodynamics/
├── solid-state-physics/
├── computational-physics/
└── advanced-quantum-mechanics/
```

各册文件夹在开始编写时创建，入口为 `<folder>/index.html`（本册目录），章节文件命名为 `NN-<slug>.html`。
在 [index.html](index.html) 的 `BOOKS` 数组中把对应条目设为 `ready: true`，首页上的“开始阅读”按钮就会生效。
章节页面中，中英文内容分别写在 `lang="zh"` 与 `lang="en"` 的元素里，由 `assets/booklet.js` 切换显示。

Each booklet's folder is created when writing starts, with `<folder>/index.html` (its contents page) as the entry point; chapters are named `NN-<slug>.html`.
Set `ready: true` for that entry in the `BOOKS` array in [index.html](index.html) to turn on its "Start reading" button.
In chapter pages, put Chinese and English text in elements with `lang="zh"` and `lang="en"`; `assets/booklet.js` shows the active one.

## 本地浏览 · View locally

直接用浏览器打开 `index.html`，或启动一个本地服务器：
Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# 然后访问 · then visit http://localhost:8000
```

## 进度 · Status

🚧 编写中 · Work in progress

- 第 1 册 经典力学：目录已建立，第 1 章待写。Vol. 1 Classical Mechanics: contents page in place, Chapter 1 not yet written.
