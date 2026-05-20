# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TypeBlock is a typing practice app featuring an animated 3D block keyboard that reacts visually to keyboard events and mouse clicks. The project is being rewritten from vanilla JS (preserved in `archive/`) to a React + TypeScript SPA using Vite.

**Active development is in the root `src/`.** The `archive/` directory contains the original vanilla JS implementation for reference.

## Commands

Run from the project root:

```sh
npm run dev      # Vite dev server (HMR)
npm run build    # tsc type-check + Vite production build
npm run preview  # preview production build
```

## Architecture

Component tree: `main.tsx` → `App` → `Keyboard` → `Key`

- **`src/main.tsx`** — React entry point, mounts `<App>` into `#root`
- **`src/App.tsx`** — imports global SCSS (`Common.scss`, `App.scss`), renders `<Keyboard>`
- **`src/Keyboard.tsx`** — owns `KeyboardLayoutData` (the full key layout object with rows R4, R3, R2, R1, bR1), passes it as `layoutData` prop to `<Key>`
- **`src/component/Key.tsx`** — owns all keyboard interaction state; holds `pressedKeys: Set<string>` via `useState`, listens to `window` keydown/keyup/blur via `useEffect`, renders rows as `<div className={row}>` and keys as `<span>`

**Key layout data structure** — `KeyboardLayoutData` has 5 rows (`R4`–`R1`, `bR1`), each an array of `{ data, unit, code }`. `code` matches `KeyboardEvent.code` values (e.g. `"KeyA"`, `"Space"`).

**Key width unit system** — CSS variable `--u: 50px` is the base unit. Size classes `u1`, `u1h`, `u1tq`, `u2q`, `u5` are set on each `<span>` and styled in `Keyboard.scss`.

**Pressed state** — `.p` class on a `<span>` applies `translateY(11px)` to simulate a key press. Applied via both `pressedKeys.has(key.code)` (keyboard) and `onMouseDown`/`onMouseUp` event delegation on the parent row `<div>`.

**Theming** — `Keyboard.scss` drives the entire color palette from three CSS variables on `#freakinkeyboard`: `--keyboard-color-hue`, `--keyboard-color-saturation`, `--keyboard-color-lightness`. All other color tokens derive from these via `calc()`.

## Reference — Original Implementation

`archive/` preserves the webpack + vanilla JS version. Useful as logic reference:

- `archive/src/js/kbFunc.js` — keyboard/mouse event handling and `.p` class toggling
- `archive/src/js/tbFunc.js` — per-character `<c>` wrapping and typing verification stubs
