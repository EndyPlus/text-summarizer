# Text Summarizer 🗒️

## Overview 🔎

A simple text summarization application that uses AI to condense user text. All summaries are saved to a database, allowing users to copy, edit, and delete their history.

## Features ✨

- **AI Summarization** - Fast and high-quality text condensation.
- **Convenient Authentication** - User-friendly registration and sign-in flow.
- **Accessibility (a11y)** - Built with inclusivity in mind, featuring focus management, keyboard navigation, and accessible modals.
- **All Devices Support** - Completely adapted for all screen sizes, from mobile phones to desktops.
- **Modern Design** - A clean, intuitive interface designed for the best user experience and readability.

## Tech Stack ⚙️

- **Next.js** - Framework (App Router).
- **Typescript** - Programming language with strict typing.
- **NextAuth.js** - Authentication library.
- **Supabase** - PostgreSQL database hosting.
- **Prisma** - ORM (Object-Relational Mapping) for database interaction.
- **Google Gemini AI** - Generative AI model used for text summarization.
- **Zustand** - State management library.
- **Tailwind CSS** - UI framework for utility-first styling.

## Architecture 🏗️

The project structure follows the SoC (Separation of Concerns) pattern and has 4 main layers to ensure maintainability and scalability:

1. `components/` — **UI-Layer** (React components).
1. `logic/` — **Business Logic Layer** (custom React hooks and Zustand stores).
1. `services/` — **Data Access Layer** (Server Actions, Prisma Client, API routes).
1. `helpers/` — **Support Layer** (utility functions, TS types, and mock data).

## Installation & Setup & Deploying 🛠️

1. Clone the project:

```
git clone https://github.com/EndyPlus/text-summarizer.git
cd text-summarizer
```

2. Execute `npm install`. This will also automatically trigger `prisma generate` thanks to the `postinstall` script.

- If for some reason Prisma client isn't generated, run `npx prisma generate` manually.

3. If you don't have `.env` file, create it by yourself. You need to store there 5 variables which you will find in `.env.example` file.
4. To not "burn" your Gemini API limit, move to `src/logic/hooks/features-hooks/useSummaryForm.ts`, and do this:

```

// 1. Comment out the real AI action
// import { getAiResponse } from "@/src/services/serverActions/genaiAction";
import mockAiResponse from "@/src/helpers/mock/mockAiResponse";

// 2. In the hook body, use the mock instead of the real call
// const { data: aiResponse, ... } = await getAiResponse(userText);

const {
success: isResponseSuccess,
error: aiError,
data: aiResponse,
} = await mockAiResponse();

```

5. While deploying on Vercel:

- Paste the raw values **without quotes**. Instead of `"postgresql://user:pass@host..."`, use `postgresql://user:pass@host...`. Adding quotes will cause connection strings to fail.
- Don't forget to add `NEXTAUTH_URL` (your production domain) and `NEXTAUTH_SECRET`.
