# Template for PROGDEV new projects in Next.js (delete this code after start)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Aplicar Cambios API DEV

```
cd EdCo-API/
git pull
make dev-app-up
```

## Aplicar Cambios API REAL

```
cd EdCo-API/
git pull
make dev-app-up
```

## Aplicar Cambios WEB

```
screen -ls
#Saldrá un listado parecido a este  2274.EdcoTax    (01/24/2024 12:59:08 PM)        (Detached)

screen -R 2274
#Hay que usar el numero antes de EdcoTax. Esto abrira el terminal assignado a next y evita que se cierre el servidor aunque cierres la connexión

Ctrl+c
git pull
npm run build
npm run start

```
