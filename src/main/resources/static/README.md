# 🧠 MVC Project — Spring Boot + PostgreSQL + Render Deployment

A full-stack web application using Java, Spring Boot, and PostgreSQL, deployed to [Render](https://render.com). The app supports user login, post management, and is designed with a simple admin panel and responsive frontend.

---

## 🚀 Live Demo

🌍 [https://mvc-project-so20.onrender.com](https://mvc-project-so20.onrender.com)

---

## 📦 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Backend     | Java 17, Spring Boot, JPA      |
| Database    | PostgreSQL (via Render plugin) |
| Frontend    | HTML, CSS, JavaScript (Vanilla)|
| Deployment  | Render                         |
| Build Tool  | Maven + Maven Wrapper          |

---

## 🧑‍💻 Features

- ✅ User login (session-based)
- ✅ Admin dashboard to create/delete posts
- ✅ Public page to view posts
- ✅ Frontend and backend hosted together
- ✅ Automatic admin account on startup
- ✅ Protected admin route (redirects if not logged in)

---

## 🔐 Default Admin Credentials

| Username | Password |
|----------|----------|
| `admin`  | `password` |

> ⚠️ Change this in production or add hashing for security.

---

## 🗂 Project Structure

