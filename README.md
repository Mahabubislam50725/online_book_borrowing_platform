# 📚 Online Book Borrowing Platform

A modern web application that digitizes the traditional library experience. Users can explore a collection of books, filter by categories, and borrow titles digitally with a secure authentication system.

## 🔗 Live URL

[https://your-live-url.vercel.app](https://your-live-url.vercel.app)

## ✨ Key Features

- Browse and search books by title
- Filter books by category (Story, Tech, Science)
- Borrow books digitally with borrow history tracking
- User authentication with Email/Password and Google OAuth
- Private routes for Book Details and Profile
- Update profile information (name & photo)
- Fully responsive on mobile, tablet, and desktop

## 🛠️ Tech Stack

- **Next.js** — React framework with App Router
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library
- **BetterAuth** — Authentication (Email/Password + Google OAuth)
- **MongoDB** — Database for users and borrow records
- **Swiper.js** — Touch slider for Featured Books section
- **React Hook Form** — Form handling and validation
- **React Toastify** — Toast notifications

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication |
| `mongodb` | Database |
| `swiper` | Book slider |
| `react-hook-form` | Form validation |
| `react-toastify` | Notifications |
| `next` | Framework |
| `tailwindcss` | Styling |

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/online-book-borrowing-platform.git
cd online-book-borrowing-platform
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/         # Login & Register pages
│   ├── (main)/         # Home, All Books, Book Details, Profile
│   ├── api/            # Auth & Borrow API routes
│   └── component/      # Shared components (Navbar, Footer, etc.)
├── lib/                # Auth config, DB connection, data fetching
└── middleware.js        # Protected route handling
```
