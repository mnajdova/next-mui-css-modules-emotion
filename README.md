This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The idea of the project

This project shows how we could implement Material UI components using CSS modules and still use @mui/system (Emotion) Tcustomize them. It uses a Header component (a test component that renders an h1 and appends a single CSS rule - color: blue defined in a CSS layer called mui-components).
This use-case does not require any special setup (apart for enabling CSS modules if it not by default support - Next.js comes with it enabled by default).
The adventage is that the Mateiral UI components comes with better pefromance as they don't use Emotion by default, but the customization adds some overhead as users opt in into using Emotion for customization.
