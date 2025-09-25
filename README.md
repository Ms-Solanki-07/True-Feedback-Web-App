# True Feedback

True Feedback is a modern web application that enables users to send and receive anonymous feedback securely and effortlessly. The platform also features AI-powered feedback suggestions, making it easier for users to express their thoughts clearly and constructively.

## Tech Stack

- **Next.js** – React framework for server-side rendering and routing
- **TypeScript** – Type-safe JavaScript
- **Node.js** – Backend runtime environment
- **React** – Frontend UI library
- **MongoDB** – NoSQL database for storing users and messages
- **Shadcn/UI** – Modern, accessible React UI components
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Groq AI** – AI-powered feedback suggestion engine
- **NextAuth.js** – Authentication and session management
- **Zod** – TypeScript-first schema validation
- **Nodemailer** – Email sending for verification


## Features

- **Anonymous Messaging:** Send and receive feedback without revealing your identity.
- **AI-Powered Suggestions:** Get engaging, open-ended message suggestions powered by AI.
- **User Dashboard:** Manage your messages, control message acceptance, and copy your unique profile link.
- **Account Verification:** Secure sign-up and login with email/username and password.
- **Responsive UI:** Clean, mobile-friendly interface built with React and Tailwind CSS.
- **Next.js & TypeScript:** Built with the latest web technologies for performance and scalability.

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- MongoDB instance (local or cloud)
- [Groq API Key](https://console.groq.com/) for AI suggestions
- Gmail account for email verification (or update transporter for your provider)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ms-Solanki-07/True-Feedback-Web-App
   cd true-feedback
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app directory (routes, API, pages)
- `/src/components` - Reusable UI components
- `/src/model` - Mongoose models
- `/src/helpers` - Utility functions (e.g., email sending)
- `/src/schemas` - Zod validation schemas
- `/emails` - Email templates

## Usage

- **Sign Up:** Create an account and verify your email.
- **Share Your Link:** Copy your unique profile link from the dashboard and share it.
- **Receive Messages:** View anonymous messages in your dashboard.
- **Send Feedback:** Visit any user's public profile link to send them anonymous feedback.
- **AI Suggestions:** Click "Suggest Messages" for AI-generated message ideas.

## 🤝 Contributing

Contributions are welcome! 🎉
If you find a bug or have suggestions, please open an issue or create a pull request.

---

## 🎉 Connect with Me  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ms-solanki-07-ms/)  [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Ms_Solanki_07)  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ms-Solanki-07)  [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ms_solanki_07)  

---