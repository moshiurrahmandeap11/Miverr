# 🌐 Miverr - Freelance Marketplace Platform

Miverr is a professional freelance marketplace inspired by Fiverr, built to connect buyers and sellers of digital services across the globe. It enables users to create gigs, manage orders, communicate seamlessly, and build careers or businesses through freelancing.

---

## 🚀 Why Miverr?

In a world moving toward remote work, the need for a secure, streamlined, and scalable freelance platform is greater than ever. Miverr was created to:

- Empower freelancers by giving them a platform to showcase and sell their skills.
- Provide buyers a safe and easy way to find experts for their projects.
- Build a user-friendly experience with rich features like **Gig creation**, **Subscriptions**, **Project Briefs**, and **Miverr Go**.
- Offer a localized experience (e.g., multilingual, currency switch) with global accessibility.

---

## 🛠️ Tech Stack

### 🔹 Frontend

- **React.js** – Fast UI rendering and component-based structure
- **React Router DOM** – SPA routing
- **Tailwind CSS + DaisyUI** – Utility-first responsive UI and beautiful component library
- **React Icons** – Scalable vector icons
- **Axios** – HTTP client for API communication
- **React Hook Form & Zod (optional)** – Form handling and validation

### 🔹 Backend (assumed or future)

- **Node.js + Express** – REST API server
- **MongoDB** – NoSQL database for flexible schema design
- **JWT** – Authentication & authorization
- **Firebase (for auth & image hosting)** – Scalable and secure user management

---

## 📦 Features

### 🧑‍💼 For Sellers
- Create gigs with pricing tiers, extras, delivery time
- Offer custom offers, gig subscriptions, and project milestones
- Use "Miverr Go" to collaborate in real time
- Track orders, reviews, and performance

### 🛒 For Buyers
- Search and filter services easily
- Post project briefs and invite sellers
- Place orders securely
- Use wishlist, chat, and support

### 🔐 Authentication & Security
- Secure sign in/up with Firebase or custom JWT
- Role-based access (admin/seller/buyer)
- Session persistence & protected routes

### 📃 Pages

- ✅ Home Page  
- ✅ Gig Listing & Detail Page  
- ✅ Seller Dashboard  
- ✅ Orders Management  
- ✅ Terms & Conditions Page  
- ✅ Privacy Policy Page  
- ✅ Contact & Help Center  
- ✅ Responsive Navbar (Dynamic based on auth state)

---

## 📄 Project Structure

```bash
Miverr/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── hooks/
│   ├── services/
│   └── App.jsx
├── .env
├── tailwind.config.js
├── postcss.config.js
└── README.md
