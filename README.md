# Full Stack App Starter Pack

**pnpm + Turborepo** monorepo: Next.js and NestJS with JWT authentication, workspaces, and transactional email hooks. No vector database or LLM dependencies—add your own modules as needed.

## Included

- **apps/web** — Next.js (App Router), React, TanStack Query
- **apps/backend** — NestJS, Prisma (PostgreSQL), Swagger, throttling
- **packages/** — shared UI and ESLint/TS config

## Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL

## Environment

- **Backend:** `cp apps/backend/.env.example apps/backend/.env` — set `DATABASE_URL`, `JWT_SECRET`, SMTP, etc. Match `APP_NAME` with the web app.
- **Web:** `cp apps/web/.env.example` → `apps/web/.env` — set `NEXT_PUBLIC_APP_NAME` and API base URL if needed.

## Database

```bash
cd apps/backend
pnpm db:migrate   # or db:push for prototyping
pnpm db:seed      # optional: see seed script for demo users
```

Run migrations after pulling so the database matches `schema.prisma`.

## Scripts

From the repo root:

```bash
pnpm install
pnpm dev
```

## Tech stack (summary)

- **Frontend:** Next.js, React, Tailwind, workspace UI packages
- **Backend:** NestJS, Prisma, Passport JWT, EventEmitter mail
