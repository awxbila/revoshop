# 🛍️ RevoShop — Next.js App Router Project

This project is built using **Next.js App Router** and bootstrapped with  
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

RevoShop is a simple e-commerce-style application that displays a list of products, supports category filtering, and provides product data through API routes.

---

## 🚀 Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- API Routes (Route Handlers)
- Incremental Static Regeneration (ISR)
- next/font (Geist Font)

---

## 📂 Project Structure

src/
├── app/
│ ├── api/
│ │ └── products/
│ │ ├── route.ts # GET all products
│ │ └── [id]/route.ts # GET product by id
│ ├── layout.tsx # Root layout
│ └── page.tsx # Homepage
│
├── components/
│ ├── ProductList.tsx
│ ├── ProductCard.tsx
│ └── CategoryTabs.tsx
│
├── lib/
│ └── products.ts # Server-side product logic
│
├── types/
│ └── product.ts # Product type definition
│
└── public/
└── images/ # Product images

---

## ✨ Features

- ✅ Product listing
- ✅ Category filtering
- ✅ API endpoint for products
- ✅ API endpoint for product detail
- ✅ Server Components
- ✅ ISR with revalidation
- ✅ Type-safe with TypeScript

---

## 🔗 API Endpoints

### Get All Products

GET /api/products

### Get Product by ID

## GET /api/products/{id}

## 🧠 Data Fetching Strategy

- **Server Components** fetch data directly from server functions (`lib/products.ts`)
- **API Routes** are used for client-side access or external usage
- Avoids calling `fetch("/api/...")` inside Server Components to prevent build errors

---

## ▶️ Getting Started

First, install dependencies:

Then, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your browser and navigate to: http://localhost:3000
You can start editing the homepage by modifying: app/page.tsx

🧪 Build & Production

To check production build locally:

npm run build
npm start

🎨 Fonts

This project uses next/font
to automatically optimize and load Geist, a font family by Vercel.

📘 Learn More

To learn more about Next.js, check out the following resources:

Next.js Documentation

Learn Next.js

Next.js GitHub Repository

☁️ Deploy on Vercel

The easiest way to deploy this Next.js app is using Vercel, the platform created by the makers of Next.js.

👉 Deploy on Vercel
Deploy URL: https://revoshop-9vpz.vercel.app/

For more details, see the official documentation:

Next.js Deployment Docs

👩‍💻 Author

Created with ❤️ by Nabilah Nur Hazimah
