
# TeachNet

TeachNet is designed to offer students the opportunity to book personalized, real-time tutoring sessions with qualified tutors. Unlike recorded lectures, this platform emphasizes interactive learning experiences, ensuring students receive immediate feedback and guidance.

## Project Introduction

### **Overview**

TeachNet is built to offer an engaging educational experience by allowing students to book and attend live tutoring sessions. Tutors can create detailed profiles showcasing their expertise, and students can choose tutors based on their preferences and needs. The platform supports real-time interactions using video conferencing tools, enhancing the learning process through face-to-face communication and interactive tools.

### **Key Features**

- **Tutor Profiles**:
  - **Details**: Tutors can create comprehensive profiles, including their subjects, experience, qualifications, and availability.
  - **Ratings and Reviews**: Students can view ratings and reviews left by other students, helping them choose the best tutor.

- **Booking System**:
  - **Flexibility**: Students can browse available tutors and schedule sessions at convenient times. The system shows real-time availability, making it easy to find suitable time slots.
  - **Notifications**: Automated reminders and notifications are sent to both students and tutors to ensure no sessions are missed.

- **Live Sessions**:
  - **Real-Time Interaction**: Using video conferencing tools like Zoom or Google Meet, students can interact with tutors face-to-face in real-time.
  - **Interactive Tools**: Features such as shared whiteboards, screen sharing, and interactive Q&A enhance the learning experience, making sessions more engaging and effective.

- **Simple Dashboard**:
  - **User-Friendly Interface**: The dashboard provides a clean and intuitive interface where students can track their upcoming bookings, and tutors can manage their schedules efficiently.
  - **Session Management**: Users can access session history, notes, and follow-ups, ensuring continuity in the learning process.

## Technology Stack

### Front-End

- **React.js**:
  - Build interactive and dynamic user interfaces for browsing tutor profiles, booking sessions, and managing schedules.

### Back-End

- **Node.js with Express**:
  - Handle server-side logic and API endpoints for managing data and user interactions.

### Database

- **PostgreSQL**:
  - Store and manage all the data, including user accounts, tutor profiles, session bookings, and chat logs.

## Demo

Check out the live demo: [TeachNet Demo](https://teachnet.vercel.app)

### **User Registration and Login**

1. **Registration**:
   - New users can sign up by filling out a registration form with their name, email, and password.
   - After successful registration, a confirmation message is displayed.

2. **Login**:
   - Registered users can log in using their email and password.
   - Upon successful login, users receive a JWT token for authentication, which is stored in local storage.

### **Tutor Profiles**

- Tutors create and manage their profiles, providing details about their subjects, experience, and availability.
- Students can browse these profiles, view ratings and reviews, and select a tutor based on their needs.

### **Booking System**

- Students can view tutors' availability and book sessions at convenient times.
- The system sends automated reminders and notifications to both students and tutors to ensure sessions are not missed.

### **Live Sessions**

- Sessions are conducted using video conferencing tools like Zoom or Google Meet.
- Features such as shared whiteboards, screen sharing, and interactive Q&A enhance the learning experience.

### **Dashboard**

- Both students and tutors have access to a user-friendly dashboard where they can manage their bookings and sessions.
- Users can view session history, manage notes, and follow-up on previous sessions.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL installed and running

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/teachnet.git
   cd teachnet
