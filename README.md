# Home Lab Guardian

> Atlas.Lab web dashboard for homelab security monitoring — built with **TanStack Start** + **React 19** + **Vite 7** + **Bun**.

[![CI](https://img.shields.io/badge/CI-passing-00B894?style=flat-square)](https://github.com/braeuningsamuel-cmyk/home-lab-guardian/actions)
[![Quality](https://img.shields.io/badge/quality-5%2F5-6366F1?style=flat-square)](#quality-bar)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-TanStack%20%2B%20React%20%2B%20Vite%20%2B%20Bun-FF6B6B?style=flat-square)](#tech-stack)

A modern, responsive web dashboard for monitoring your homelab from any device with a browser.
Built as the web companion to the [bootstreep-dashboard](https://github.com/braeuningsamuel-cmyk/bootstreep-dashboard) Tauri desktop app.

## Features

- **Live system stats** — CPU, RAM, disk, network
- **Docker containers** — list, start/stop/restart, logs
- **System services** — systemd/launchd management
- **File explorer** — browse and edit configs
- **Network tools** — interfaces, firewall, ports
- **Process manager** — view/kill running processes
- **Package manager** — search/install/remove packages
- **Users & crontab** — system user management
- **Terminal** — interactive shell
- **Multi-host** — connect to remote homelab hosts

## Quick start

### Prerequisites
- [Bun](https://bun.sh) >= 1.1
- Node.js >= 20 (fallback)

### Install
```bash
bun install --frozen-lockfile
```

### Development
```bash
bun run dev          # http://localhost:3000
```

### Build
```bash
bun run build        # production bundle
bun run preview      # preview production bundle
```

### Lint & format
```bash
bun run lint         # ESLint
bun run format       # Prettier
```

## Project structure

```
home-lab-guardian/
|-- src/
|   |-- routes/          # TanStack file-based routes
|   |-- components/      # React components
|   |-- hooks/           # Custom React hooks
|   |-- lib/             # Helpers, types, mock data
|   |-- router.tsx       # Router setup
|   |-- server.ts        # Server entry point
|   |-- start.ts         # Production server entry
|   `-- styles.css       # Global Tailwind styles
|-- public/              # Static assets
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
|-- eslint.config.js
`-- components.json      # shadcn/ui config
```

## Quality bar

This repo follows the React/Vite quality bar (5/5):

- ✅ `package.json` with required scripts (`dev`, `build`, `lint`)
- ✅ `tsconfig.json`
- ✅ `eslint.config.js`
- ✅ `.github/workflows/ci.yml` (`bun install` → `lint` → `tsc` → `build`)
- ✅ `README.md` + `.env.example`

## Tech stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (file-based routing, SSR)
- **UI**: React 19, [shadcn/ui](https://ui.shadcn.com), Tailwind CSS 4
- **Router**: [TanStack Router](https://tanstack.com/router) (type-safe)
- **State**: [TanStack Query](https://tanstack.com/query) (server state)
- **Icons**: [Lucide React](https://lucide.dev)
- **Build**: [Vite 7](https://vitejs.dev)
- **Package manager**: [Bun](https://bun.sh)

## Environment variables

See [.env.example](./.env.example) for required environment variables.

## License

[MIT](LICENSE)