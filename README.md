<div align="center">
  <img src="./public/images/logo/logo.svg" alt="NexoraPay Logo" width="120" />
  <h1>NexoraPay 🚀</h1>
  <p><strong>Enterprise-Grade Next.js 16 SaaS Platform & Scalable SEO Architecture</strong></p>
  <p>
    NexoraPay is a highly-secure, performance-obsessed Next.js application featuring robust PostgreSQL backend configurations, NextAuth security pipelines, bleeding-edge TailwindCSS UI components, and a fully autonomous Programmatic AI SEO Engine capable of generating and serving millions of URLs.
  </p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

<br />

## 🌟 Key Features

- **Full-Stack Next.js 16 (App Router):** Leveraging React Server Components, Server Actions, Edge caching, and Turbopack for millisecond response times.
- **1 Million+ Page SEO Automation Engine:** Fully autonomous Vercel Cron architecture that ingests keywords, prompts GPT-4 Turbo to generate highly-semantic HTML content, logically silos pages into Hub-and-Spoke internal linking networks, and publishes via Incremental Static Regeneration (ISR).
- **Enterprise Authentication Pipeline:** Multi-tenant NextAuth integration supporting OAuth (Google/GitHub) and highly secure `bcryptjs` hashed Credentials. Includes transactional email verification and password-reset workflows via Resend.
- **Supabase Backend (Prisma ORM):** High-performance PostgreSQL database scaling millions of relational nodes seamlessly across `Users`, `GeneratedAIPages`, `KeywordClusters`, and `SeoMetrics`.
- **Strict OOP Security:** Globally orchestrated Server Action exception handling and strict `zod` schema validations guaranteeing 0% malformed payloads entering the database.
- **High-Traffic SEO Mastery:** Mathematically partitioned XML Sitemaps (40k chunks), natively injected JSON-LD Structured Data Schema graphs (`Organization`, `FAQPage`, `Article`), strictly enforced Content Security Policies (CSP), and automated Vercel OG Engine social card generators.
- **Cinematic UI:** Perfect Core Web Vitals (0 CLS) via strict `next/image` handling, Lottie animations, and sleek Framer Motion micro-interactions built on modern TailwindCSS.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **Database:** PostgreSQL (Supabase), Prisma ORM
- **Authentication:** NextAuth.js (Auth.js)
- **Email:** Resend
- **AI Engine:** OpenAI (GPT-4 Turbo) 
- **Forms & Validation:** React Hook Form, Zod
- **Animations:** Framer Motion, Lottie-React

## 📂 Project Structure

```text
nexorapay-nextjs-tailwind-main/
├── prisma/                 # PostgreSQL Database Schemas
├── src/
│   ├── app/                # Next.js App Router (Pages, API, SEO Nodes)
│   │   ├── (auth)/         # Protected Authentication Routes
│   │   ├── (site)/         # Public Facing Marketing & Dashboard
│   │   ├── (seo)/          # Abstracted 1M+ Programmatic SSG Hubs
│   │   ├── api/cron/       # Headless Automation Pipelines
│   │   └── sitemap.ts      # Chunked Large-Scale Sitemap Indexer
│   ├── components/         # Modular React Server & Client Components
│   └── lib/
│       ├── ai/             # GPT-4 Content & Keyword Generators
│       ├── seo/            # Metadata, JSON-LD schemas, Internal Linking Engines
│       └── db.ts           # Central Prisma Client
```

## 💻 Running Locally

To run the platform locally, you must first clone the `.env.example` file and fill it with your own database and OAuth keys.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nexorapay.git

# 2. Install dependencies
npm install

# 3. Establish environmental variables
cp .env.example .env.local

# 4. Push schema to PostgreSQL database
npx prisma db push

# 5. Run the development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

## 🚀 Deployment (Vercel)

NexoraPay is explicitly engineered for deployment zero-config on Vercel. 
- **Edge Caching:** Ensure you enable Vercel Edge caching to fully utilize the `export const revalidate = 43200` ISR functions inside the programmatic SEO hub.
- **Cron Jobs:** The background programmatic page builders require Vercel Cron. The configuration is already bound to your repository securely via `process.env.CRON_SECRET`.

## 📄 License & Status

This project is licensed under the MIT License - see the `LICENSE` file for details.
