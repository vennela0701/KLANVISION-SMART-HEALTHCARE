# Smart Healthcare Appointment & Management System

Build patient registration, doctor management, doctor search, appointment booking, appointment views, cancellation, status updates and appointment history.

## Important scope note
This ZIP is a working MERN learning starter with account registration/login, JWT-protected record creation, search, record status changes, deletion and MongoDB persistence. It is **not yet the full domain-specific assignment**. You must implement and test all numbered requirements in the official Klanvision PDF before submitting.

## Requirements
- Node.js 20+ and npm
- MongoDB local or MongoDB Atlas
- Git and GitHub account

## Run backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and set MONGO_URI and a long JWT_SECRET
npm run dev
```
API: http://localhost:5000

## Run frontend in a second terminal
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Open http://localhost:5173

## Before GitHub upload
- Keep `.env` private; `.gitignore` excludes it.
- Never upload passwords, tokens or private database URLs.
- Add domain-specific models, forms, validation, dashboards and workflows from the PDF.
- Test each feature and add screenshots to README.
