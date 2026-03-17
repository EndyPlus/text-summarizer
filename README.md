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

1. `components/` — UI-Layer (React components).
1. `logic/` — Business Logic Layer (custom React hooks and Zustand stores).
1. `services/` — Data Access Layer (Server Actions, Prisma Client, API routes).
1. `helpers/` — Support Layer (utility functions, TS types, and mock data).

## Installation & Setup & Deploying 🛠️

_🚧 Documenting in progress ⚠️._

- npm install
- prisma generate
- .env variables
- useSummaryForm switch ai to mock.
