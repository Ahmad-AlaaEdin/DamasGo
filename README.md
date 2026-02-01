# DamasGo 🏛️

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)


[Live Demo](https://damas-go.vercel.app/) 

</div>

---

## 📄 Overview

**DamasGo** is a  full-stack web application designed to revitalize and modernize the tourism experience in Syria. By bridging the gap between global travelers and Syria's rich cultural heritage, DamasGo facilitates the exploration of ancient landmarks, from the bustling souqs of Damascus to the majestic ruins of Palmyra.

The platform offers a seamless, secure, and interactive interface for users to discover tours, book experiences, and connect with professional guides, serving as a digital ambassador for Syrian tourism.

## 🏗️ System Architecture

<div align="center">
  <img src="https://res.cloudinary.com/dczftmw9j/image/upload/v1769981550/system_vgaqhz.webp" alt="System Architecture" width="800"/>
</div>

## 🛠️ Tech Stack

### Client-Side
*   **Core:** React 18, TypeScript 5.6, Vite
*   **State & Routing:** React Router, Context API
*   **Styling:** TailwindCSS, Shadcn/UI
*   **Maps:** Leaflet, React-Leaflet
*   **Integrations:** Stripe Elements, Cloudinary SDK

### Server-Side
*   **Runtime:** Node.js (v22)
*   **Framework:** Express.js
*   **Database:** MongoDB with Mongoose ODM
*   **Authentication:** JWT (JSON Web Tokens)
*   **Security:** Helmet, Rate Limit, XSS-Clean, HPP
*   **Services:** Stripe API, Cloudinary, Brevo/Nodemailer

## ✨ Key Features

*   **Immersive Exploration**: Interactive maps and rich media galleries for virtual tour previews.
*   **Secure Booking Engine**: Integrated Stripe payments for safe and easy transactions.
*   **Role-Based Access**: Specialized interfaces for Administrators, Lead Guides, Guides, and Users.
*   **User Engagement**: Robust review and rating system to build community trust.
*   **Responsive Design**: Mobile-first architecture ensuring a flawless experience across all devices.
*   **Advanced Security**: Implementation of industry-standard security practices including data sanitization and rate limiting.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   **Node.js**: Version 22 is required.
*   **Package Manager**: NPM or Yarn.
*   **Database**: MongoDB instance (Local or Atlas).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Ahmad-AlaaEdin/DamasGo.git
    cd DamasGo
    ```

2.  **Set Node.js Version**
    Ensure you are using the correct Node.js version using NVM (Node Version Manager).
    ```bash
    nvm use node 22
    ```
    *If you don't have Node 22 installed, run `nvm install 22` first.*

3.  **Install Dependencies**

    *Server:*
    ```bash
    cd server
    npm install
    ```

    *Client:*
    ```bash
    cd ../client
    npm install
    ```

4.  **Environment Configuration**
    Create `.env` files in both `server` and `client` directories based on the provided examples.

    **Server (`server/.env`):**
    ```env
    # Server Configuration
    NODE_ENV=development
    PORT=3000

    # Database
    DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/damasgo?retryWrites=true&w=majority
    DATABASE_PASSWORD=your_mongodb_password

    # JWT Authentication
    JWT_SECRET=your-super-secret-jwt-key-min-32-chars
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90

    # Stripe Payment
    STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

    # Cloudinary (Image Upload)
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

    # Email Service (Production - Brevo)
    EMAIL_FROM=noreply@damasgo.com
    BREVO_HOST=smtp-relay.brevo.com
    BREVO_PORT=587
    BREVO_LOGIN=your_brevo_login
    BREVO_PASSWORD=your_brevo_password

    # Email Service (Development - Mailtrap)
    DEV_EMAIL_HOST=smtp.mailtrap.io
    DEV_EMAIL_PORT=2525
    DEV_EMAIL_USERNAME=your_mailtrap_username
    DEV_EMAIL_PASSWORD=your_mailtrap_password

    # Client URL
    CLIENT_URL=http://localhost:5173
    ```

    **Client (`client/.env`):**
    ```env
    # API Configuration
    VITE_API_URL=http://localhost:3000/api/v1

    ```

5.  **Run the Application**

    *Start Server:*
    ```bash
    # In server directory
    npm run dev
    ```

    *Start Client:*
    ```bash
    # In client directory
    npm run dev
    ```


---

<p align="center">
  Built with ❤️ for Syria
</p>
