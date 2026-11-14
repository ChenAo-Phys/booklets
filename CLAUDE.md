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
| I | Classical Mechanics | — | Calculus, Linear Algebra, Complex Numbers |
| II | Waves and Optics | I | — |
| III | Quantum Mechanics | II | Group Theory |
| IV | Electrodynamics | II | Partial Differential Equations |
| V | Statistical Physics | III | Mathematical Statistics |
| VI | Advanced Quantum Mechanics | V | — |

## Conventions
- One folder per booklet; `<folder>/index.html` is its contents page, chapters are `NN-<slug>.html`.
- Shared styles and scripts live in `assets/` (`booklet.css`, `booklet.js`: language switch, KaTeX). Every booklet page loads only these two in `<head>`. Put anything all pages need into them, not into single pages.
- Chapter pages: put text in `lang="zh"` / `lang="en"` elements. Home page: use `data-zh` / `data-en` attributes.
- When a booklet is ready, set `ready: true` in the `BOOKS` array in `index.html`.
- Animations always play at normal speed. Do not pause or slow them for `prefers-reduced-motion`.
- Avoid using too many ";" and ":" in the text.