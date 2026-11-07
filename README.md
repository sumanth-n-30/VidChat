# VidChat

A real-time video chat and messaging platform built with React, Node.js, and Socket.IO.

## Tech Stack

- **Monorepo:** pnpm workspaces
- **Frontend (`@vidchat/web`):** React 19, TypeScript, Vite, Socket.IO Client
- **Backend (`@vidchat/server`):** Node.js, Express, TypeScript, Socket.IO

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v9 or higher)

To install `pnpm` globally if you don't already have it:
```bash
npm install -g pnpm
```

## Getting Started

### 1. Install Dependencies

From the project root:
```bash
pnpm install
```

### 2. Run Development Servers

Start both frontend and backend concurrently:
```bash
pnpm dev
```

* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **Backend:** [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
pnpm build
```

## Environment Variables (Optional)

The frontend automatically defaults to `http://localhost:3000` for local development. If deploying to custom domains, you can configure:

* `PORT` (Backend port, default: `3000`)
* `VITE_API_URL` (Frontend Socket.IO connection URL, default: `http://localhost:3000`)
* `VITE_API_BASE_URL` (Frontend REST API URL, default: `http://localhost:3000`)
