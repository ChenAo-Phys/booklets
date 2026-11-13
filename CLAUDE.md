# 直抵前沿 · Frontier Bound

## Goal
Six interactive physics booklets that take beginners through the foundations of undergraduate physics in two years, so they can explore frontier physics on their own from year three.

## Principles
- Bilingual: Every page is in both Chinese and English, switchable with one click.
- Intuitive: HTML with animations and interactions — see it first, then calculate.
- Simple: No padding, only what matters.
- Mathematical: Teach all math beyond high school step by step, when it is first needed.
- Computational: Use formulas and software side by side, reaching all the way to frontier research.
- Practice: Every chapter ends with a large problem bank. A test draws 10 problems; 9 correct passes.

## Booklets
| # | Booklet | Prerequisites | Math taught inside |
|---|---|---|---|
| 1 | Classical Mechanics | — | Calculus, Linear Algebra, Complex Numbers |
| 2 | Waves and Optics | 1 | — |
| 3 | Quantum Mechanics | 2 | Group Theory |
| 4 | Electrodynamics | 2 | Partial Differential Equations |
| 5 | Thermodynamics and Statistical Physics | 3 | Mathematical Statistics |
| 6 | Advanced Quantum Mechanics | 5 | — |

## Conventions
- One folder per booklet; `<folder>/index.html` is its contents page, chapters are `NN-<slug>.html`.
- Shared styles and scripts live in `assets/` (`booklet.css`, `booklet.js`: language switch, KaTeX).
- Chapter pages: put text in `lang="zh"` / `lang="en"` elements. Home page: use `data-zh` / `data-en` attributes.
- When a booklet is ready, set `ready: true` in the `BOOKS` array in `index.html`.
- Avoid using too many ";" and ":" in the text.