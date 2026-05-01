# Balari Tech Landing Page

This repo now uses a simple `client/` + `server/` structure:
This project now uses a single Vercel deployment rooted at `client/`:

- `client/`: React + Vite frontend
- `server/`: Express API for the contact form using Resend
- `client/api/contact.js`: Vercel serverless function for the contact form

## Setup

1. Install the frontend packages:
1. Install the client packages:

```bash
npm run install:client
```

2. Install the server packages:
2. Copy `client/.env.example` to `client/.env.local` for local testing or add the same variables in Vercel Project Settings.

```bash
npm run install:server
```
Required email env values:

3. Create your env files:
- `RESEND_API_KEY=...`
- `RESEND_FROM_EMAIL=Balari Tech <your-verified-domain@example.com>`
- `RESEND_TO_EMAIL=your@email.com`

- Copy `client/.env.example` to `client/.env` if you want to point the frontend at a hosted API.
- Copy `server/.env.example` to `server/.env` and fill in your Resend values.
Optional:

Required server env values:
- `VITE_API_BASE_URL=`

- `PORT=5000`
- `CLIENT_URL=http://localhost:5173`
- `RESEND_API_KEY=...`
- `RESEND_FROM_EMAIL=Balari Tech <your-verified-domain@example.com>`
- `RESEND_TO_EMAIL=your@email.com`
Leave `VITE_API_BASE_URL` blank when the frontend and `/api/contact` are deployed together on the same Vercel project.

## Local Development

Run the client in one terminal:
Frontend only:

```bash
npm run dev:client
```

Run the server in a second terminal:
Full frontend + serverless function testing:

```bash
npm run dev:server
cd client
vercel dev
```

The client keeps using `/api/contact`. In local development, Vite proxies `/api/*` to `http://localhost:5000`.
`vercel dev` is the best way to test the form locally because the contact endpoint is now a Vercel Function instead of a separate Express server.

## Deploying to Vercel

Set the Vercel project's Root Directory to `client`.

The SPA rewrite lives in `client/vercel.json`, and the contact function lives in `client/api/contact.js`, so one Vercel project can serve both the landing page and the form endpoint.

## Contact Form Security

The server includes a few lightweight protections:
The serverless function includes a few lightweight protections:

- request validation and trimming
- allowed-option checks for the help dropdown
- a hidden honeypot field
- a minimum form-fill time check
- a simple in-memory rate limit per IP
- a best-effort in-memory rate limit per runtime instance