# BaruaUI

A React component library built on [React Aria Components](https://react-spectrum.adobe.com/react-aria/) and [Tailwind CSS v4](https://tailwindcss.com/), with a three-layer design token system and light/dark theming out of the box.

> Status: early-stage. Public API is unstable and may change without notice.

## Packages

| Package | Description |
| --- | --- |
| [`@barua-ui/react-components`](./packages/react-components) | React component library — themed primitives with accessibility-first defaults |
| `@repo/eslint-config` | Shared ESLint flat config (React + TypeScript + Prettier) |
| `@repo/typescript-config` | Shared TypeScript presets (`base.json`, `vite.json`) |

## Components

Built one component at a time, starting with simple primitives and growing from there.

| Component | Status |
| --- | --- |
| Button | ✅ Implemented |
| Text | 🚧 In progress |
| Textarea | 📋 Planned (next) |
| Input / TextField | 📋 Planned |
| Label | 📋 Planned |
| Checkbox | 📋 Planned |
| Radio | 📋 Planned |
| Switch | 📋 Planned |
| Link | 📋 Planned |

Legend: ✅ shipped · 🚧 in progress · 📋 planned

## Tech stack

- **Monorepo** — pnpm workspaces + Turborepo
- **Components** — React 19, React Aria Components, `tailwind-variants`, `tailwind-merge`
- **Styling** — Tailwind CSS v4 with `@theme inline` token bridge
- **Dev environment** — Storybook 9, Vite, Vitest, TypeScript (strict)
- **Tooling** — ESLint flat config, Prettier, EditorConfig

## Requirements

- Node `>= 20`
- pnpm `9.x` (the repo pins `pnpm@9.1.2` via `packageManager`)

## Getting started

```sh
pnpm install
pnpm dev          # runs storybook for @barua-ui/react-components on :6006
```

## Scripts

Run from the repo root — Turbo fans the task out across workspaces.

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start Storybook for the components package |
| `pnpm build` | Build all packages |
| `pnpm test` | Run the test suites (Vitest) |
| `pnpm lint` / `pnpm lint:fix` | Lint with ESLint |
| `pnpm format` / `pnpm format:fix` | Check / write with Prettier |

## Project layout

```
.
├── configs/
│   ├── eslint-config/         # @repo/eslint-config
│   └── typescript-config/     # @repo/typescript-config
└── packages/
    └── react-components/      # @barua-ui/react-components
        ├── .storybook/
        ├── src/
        │   ├── button/
        │   ├── utils/
        │   ├── theme.css      # design tokens (primitives → semantic → @theme)
        │   └── tailwind.css   # tailwind entry
        └── stories/
```

## Design tokens

Tokens live in [`packages/react-components/src/theme.css`](./packages/react-components/src/theme.css) and follow a three-layer taxonomy:

1. **Primitives** — raw values (`--neutral-12`, `--accent-9`, …)
2. **Semantic** — role aliases that swap in dark mode (`--fg-default`, `--accent-bg`, …)
3. **Component** — per-component knobs (added on demand)

The `@theme inline { … }` block bridges the variables into Tailwind's utility namespace so utilities like `bg-accent`, `text-default`, and `ring-ring` are generated automatically.

Dark mode is opt-in via `.dark` or `[data-theme="dark"]` on an ancestor element.

## Contributing

This project follows **Trunk-Based Development** — short-lived branches, frequent merges to `main`. Keep PRs small and focused; releases are cut from trunk.

## License

TBD
