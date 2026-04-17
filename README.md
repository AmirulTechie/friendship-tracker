# 🤝 KeenKeeper — Keep Your Friendships Alive

<div align="center">

![KeenKeeper Banner](https://img.shields.io/badge/KeenKeeper-Keep%20Friendships%20Alive-6366f1?style=for-the-badge&logo=heart&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2.x-22c55e?style=flat-square)](https://recharts.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

**A relationship management app that helps you stay connected with the people who matter most.**

[🌐 Live Demo](#) · [📁 GitHub Repo](#)

</div>

---

## 📖 About The Project

**KeenKeeper** is a personal relationship manager built to help you never lose touch with the friends and people you care about. Life gets busy — KeenKeeper tracks who you've reached out to, when you last connected, and nudges you when it's time to check in again.

Whether it's a quick text, a phone call, or a video chat, every interaction is logged and visualized so your relationships stay healthy and intentional.

---

## ✨ Features

### 🔑 Core Features
- **Friend Dashboard** — View all your friends as cards with real-time contact status (`on-track`, `almost due`, `overdue`)
- **Friend Detail Page** — Deep-dive into any friend's profile, stats, goals, and interaction history
- **Quick Check-In** — Log a `Call`, `Text`, or `Video` interaction directly from the detail page with one click
- **Timeline Page** — A chronological feed of all your past interactions across every friend
- **Toast Notifications** — Instant feedback whenever you log a new check-in

### 📊 Analytics & Extras
- **Friendship Analytics (Stats Page)** — Recharts-powered pie chart breaking down your interaction types
- **Timeline Filtering** — Filter timeline entries by `Call`, `Text`, or `Video`
- **Loading Animations** — Smooth skeleton loaders while friend data is being fetched
- **404 Page** — A friendly error page for unknown routes

### 📱 Responsive Design
- Fully responsive across **mobile**, **tablet**, and **desktop** screen sizes

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router for routing & SSR |
| **Tailwind CSS** | Utility-first CSS for rapid, responsive styling |
| **Recharts** | Charts and data visualization (Stats page) |
| **React Hot Toast** | Toast notification system |
| **Lucide React** | Icon library used throughout the UI |
| **Local JSON** | `friends.json` as the mock data source |


---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Banner, summary cards, friends grid |
| Friend Detail | `/friends/[id]` | Profile, stats, quick check-in |
| Timeline | `/timeline` | Full interaction history with filters |
| Stats | `/stats` | Pie chart analytics |

---

## 🙋‍♂️ Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)

---

<div align="center">
  Made as part of a assignment · 2026
</div>