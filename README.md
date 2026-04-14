# Digital Walk-In Closet App

A full-stack wardrobe management app built with Next.js, Prisma, and PostgreSQL. Organize your clothes, build outfits, and browse your wardrobe by category — all in one place.

## Live Demo

[musewardrobe-app-website.vercel.app](https://musewardrobe-app-website.vercel.app)

---

## Features

- Browse and filter wardrobe items by category, season, and occasion
- Add items with image URL, color, and metadata
- Build and save outfits from your wardrobe
- Category overview with item counts
- Fully responsive dashboard UI

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| ORM | Prisma 7 |
| Database | PostgreSQL (Neon) |
| Runtime | Node.js |
| Deployment | Vercel |

---

## Project Structure

```
├── app/
│   ├── dashboard/          # Wardrobe, outfits, categories pages
│   ├── api/                # REST API routes (items, outfits, categories)
│   └── page.tsx            # Landing page
├── components/
│   ├── dashboard/          # Dashboard UI components
│   └── ...                 # Landing page sections
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   └── demo-user.ts        # Demo user config
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Seed script
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (local or [Neon](https://neon.tech))

### Installation

```bash
git clone https://github.com/KeerthanaJagana/Wardrobe-app-Website.git
cd Wardrobe-app-Website
npm install
```

### Environment Setup

Create a `.env` file:

```env
DATABASE_URL="postgresql://your-user@localhost:5432/wardrobedb"
```

### Database Setup

```bash
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all wardrobe items (supports filters) |
| POST | `/api/items` | Add a new item |
| PATCH | `/api/items/:id` | Update an item |
| DELETE | `/api/items/:id` | Delete an item |
| GET | `/api/outfits` | Get all outfits |
| POST | `/api/outfits` | Create an outfit |
| GET | `/api/categories` | Get all categories |

---

## Deployment

Deployed on Vercel with Neon PostgreSQL. Environment variable required:

```
DATABASE_URL=your-neon-connection-string
```
