# Prescripto - Doctor Appointment Booking Platform

A user-friendly doctor appointment booking platform that bridges the gap between patients and healthcare providers by enabling seamless scheduling and management of visits, reducing waiting times, and offering an efficient, intuitive experience for patients, doctors, and administrators.
## 🌐 Live Demo

Experience Prescripto in action:

- **Live link**: [https://prescripto-frontend-hh0c.onrender.com](https://prescripto-frontend-hh0c.onrender.com)
- Admin Login : Email- admin@prescript.com , Password: doc43avi9

> **Note**: The application may take a moment to load initially as it's hosted on Render's free tier. please wait 

## 🚀 Features

### 👨‍⚕️ For Patients
-🔍 Browse and filter doctors by specialty and availability
-📋 View doctors detailed profiles including their qualifications and experience
-📅 Book appointments with real-time slot availability
-🔔 View, reschedule, or cancel appointments
-💳 Integrated payment gateway through Razorpay

### 🩺 For Doctors
- 👤 Complete professional profile with credentials
- 🕐 Set availability and appointment fee
- 📊 View appointment statistics and earnings
- ✅ Accept or decline appointment requests

### 🔐 For Administrators
- 👨‍⚕️ Add new doctors with complete profile details
- 📈 Monitor appointments, users, and doctors
- ❌ Cancel appointments directly from the admin panel
- 🔐 Secure admin authentication and protected access

### 🔒 Security Features
- 🔐 JWT-based authentication
- 🔑 Password encryption with bcrypt
- 🛡️ Role-based access control 
- 🎟️ Token-based session management
- ✅ Input validation and sanitization
- 🚫 Protected API endpoints

## 🛠️ Tech Stack

## Frontend
- **React.js** – UI library for building interactive and reusable user interfaces  
- **Redux Toolkit** – Centralized and scalable state management  
- **React Redux** – Connects React components with the Redux store  
- **React Router DOM** – Client-side routing and navigation  
- **Axios** – HTTP client for seamless API communication  
- **Tailwind CSS** – Utility-first CSS framework for responsive design  
- **React Toastify** – User-friendly toast notifications  
- **React Icons** – Icon library for enhanced UI experience  

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling

### Utilities
- **JWT (jsonwebtoken)** – Secure authentication and authorization
- **Bcrypt.js** – Password hashing and encryption
- **Multer** – File upload middleware
- **Cloudinary** – Cloud-based image storage
- **Validator** – Input validation and sanitization
- **CORS** – Enables secure cross-origin API requests
- **Razorpay SDK** – Online payment processing
- **Dotenv** – Environment variable management



## 🔄 Application Flow

1. **User Authentication**
   - Patients, doctors, and admins log in with secure authentication.

2. **Doctor Discovery**
   - Patients browse and filter doctors by specialty and availability.

3. **Appointment Booking**
   - Patients select a doctor, choose an available time slot, and book an appointment.

4. **Payment Processing**
   - Consultation fees are paid securely through the integrated payment gateway.

5. **Appointment Management**
   - Doctors accept, manage, and update appointment statuses.
   - Patients can view, reschedule, or cancel appointments.

6. **Admin Oversight**
   - Admin monitors platform activity, manages doctors, users, and appointments.

7. **Completion & Tracking**
   - Appointments are marked as completed and stored for future reference.
