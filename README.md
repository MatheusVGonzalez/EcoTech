# EcoTech — Green Energy Landing

A simple, responsive landing page with a hero carousel, projects gallery, products page, and a contact form connected to EmailJS.

## Tech Stack
- React (CRA)
- Bootstrap 5 (CSS + JS bundle)
- React Router (Home, Products)
- EmailJS (contact form)

## Features
- Hero carousel with 3 slides (swipeable, indicators and arrows)
- Sections: About, Services, Projects, Testimonials, Contact
- Products page with CTAs that prefill the contact message
- Responsive navbar (collapses on mobile)
- EmailJS integration (no backend)

## Quick Start (Windows)
```powershell
cd c:\Canada\Tamwood\Github\eco-tech\my-app
npm.cmd install
npm.cmd start
```
Production build:
```powershell
npm.cmd run build
```

## Environment (.env)
Create a .env in the project root with your EmailJS values:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
Notes:
- Restart the dev server after changing .env.
- Template fields expected: user_name, user_email, message.

## EmailJS
- Initialized in src/index.js (emailjs.init with REACT_APP_EMAILJS_PUBLIC_KEY)
- Contact form uses emailjs.sendForm and shows a friendly alert on success/failure
- Prefills message if “?product=Name” is present

## Testing Checklist (Desktop/Tablet/Mobile)
- Navbar collapses and toggles on small screens
- Carousel: next/prev and dots work; swipe on mobile
- Products -> “Ask about this product” opens Contact with prefilled product
- EmailJS sends successfully (check your inbox/EmailJS dashboard)
- Images load (no 404s)

## Troubleshooting
- “The public key is required” → Set REACT_APP_EMAILJS_PUBLIC_KEY in .env and restart npm start
- “Module not found: Can’t resolve image” → Ensure the file exists in public/ and the path matches (e.g., /apart.jpg)
- Carousel not sliding → Ensure bootstrap/dist/js/bootstrap.bundle.min.js is imported in src/index.js

## Stage 3 Submission (Capstone)
- Push code to GitHub (main branch)
- Record 15–30 min video:
  - Show routes (/ and /products), carousel, responsiveness, and a real EmailJS send
- Slide deck: problem/solution, tech stack, design, responsiveness, demo screenshots, repo link, and (if deployed) live URL
- Upload video + slides to Moodle with the required naming convention
