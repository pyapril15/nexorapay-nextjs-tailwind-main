<div align="center">
  <img src="./public/images/logo/logo.svg" alt="NexoraPay Logo" width="120" />
  <h1>NexoraPay 🚀</h1>
  <p><strong>Next.js 16 + Tailwind CSS marketing template with Markdown blog + auth UI</strong></p>
  <p>
    A modern starter template built with Next.js 16 (App Router), Tailwind CSS, and a collection of polished UI components. Includes a markdown-powered blog, login/signup UI, and documentation pages so you can ship your marketing site quickly.
  </p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

<br />

## 🌟 Key Features

- **Next.js 16 (App Router):** Fully updated App Router structure with server components and fast page transitions.
- **Tailwind CSS + Shadcn UI:** Utility-first styling with reusable component primitives.
- **Markdown Blog:** Build a blog using `.mdx` files stored under `markdown/blog`.
- **Auth UI (NextAuth-ready):** UI for sign in / sign up flows (NextAuth configuration not included).
- **Responsive Design:** Mobile-first layout with responsive components and dark mode support.
- **Animations:** Built-in Framer Motion and Lottie animation support for polished interactions.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **Auth UI:** NextAuth (UI only)
- **Markdown:** MDX + Gray Matter + Remark
- **Animations:** Framer Motion, Lottie-React

## 📂 Project Structure

```text
nexorapay-nextjs-tailwind-main/
├── markdown/              # Blog content (MDX files)
├── public/                # Static assets (images, logo, etc.)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # Auth UI pages (sign in / sign up)
│   │   ├── (site)/        # Marketing pages (home, docs, etc.)
│   │   ├── api/           # API routes (example: crypto price)
│   │   └── page.tsx       # Landing page entry point
│   ├── components/        # Reusable React components
│   ├── lib/               # Shared helpers and utilities
│   └── utils/             # Markdown parsing and helpers
```

## 💻 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nexorapay-nextjs-tailwind-main.git
cd nexorapay-nextjs-tailwind-main

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then visit `http://localhost:3000`.

> ✅ Optional: If you add NextAuth or other server-side services, create a `.env.local` file and add the required environment variables.

## 🚀 Deployment (Vercel)

This template works out of the box on Vercel.

- Deploy by connecting your repository to Vercel
- Build command: `npm run build`
- Output directory: `.next`

## 📄 License & Status

This project is licensed under the MIT License - see the `LICENSE` file for details.
