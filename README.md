🏋️ Elite Edge Fitness – Gym Landing Page

A modern and responsive gym landing page built using React and JavaScript, designed to showcase workout programs, pricing plans, and fitness utilities.
The project focuses on clean UI, responsive layout, and basic real-world features like email contact and BMI calculation.

📌 Overview

Elite Edge Fitness is a front-end focused project that simulates a real gym website.
It includes multiple sections such as workout sessions, pricing plans, a BMI calculator, and a working contact form that sends emails directly to the admin.

This project was built to practice:

Responsive layout design

Component-based architecture in React

Frontend–backend communication

Handling real user input and feedback

✨ Features

Responsive Gym Landing Page

Hero section with call-to-action

Workout sessions & bootcamps

Pricing plans

Image gallery

BMI Calculator

Takes height, weight, and gender as input

Calculates BMI and displays result using alerts

Contact Form with Email Integration

Users can send messages directly from the website

Messages are delivered to the admin’s email using NodeMailer

User Feedback

Toast notifications and loaders for better UX

🛠️ Tech Stack
Frontend

React (Vite)

JavaScript

CSS

React Router DOM

Axios

Lucide React (icons)

React Toastify

React Spinners

Backend

Node.js

Express.js

NodeMailer

CORS

Dotenv

📂 Project Structure

```
Frontend/
 ├─ public/
 ├─ src/
 │   ├─ components/
 │   │   ├─ Hero.jsx
 │   │   ├─ Navbar.jsx
 │   │   ├─ WorkoutSessions.jsx
 │   │   ├─ Gallery.jsx
 │   │   ├─ Pricing.jsx
 │   │   ├─ BMIcalculator.jsx
 │   │   ├─ Contact.jsx
 │   │   └─ Footer.jsx
 │   ├─ App.jsx
 │   ├─ App.css
 │   └─ main.jsx
 ├─ index.html
 ├─ vite.config.js
 └─ package.json
```

```
Backend/
 ├─ utils/
 │   └─ sendEmail.js
 ├─ app.js
 ├─ config.env
 └─ package.json
```

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/elite-edge-fitness.git

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

3️⃣ Backend Setup
cd backend
npm install
npm start


Create a config.env file in the backend directory and add:

PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

📸 Screenshots

Add screenshots of:

Hero section

Workout sessions

Pricing plans

Contact form

BMI calculator

🚧 Challenges Faced

Fixing layout scaling issues across different screen sizes

Managing responsive typography and spacing

Integrating frontend form submission with backend email service

Maintaining clean component structure as the project grew

🚀 Future Improvements

Add authentication for users

Store contact form messages in a database

Improve BMI calculator with detailed health feedback

Add animations and transitions

Deploy frontend and backend

👤 Author

Designed & Developed by Tanmoy
