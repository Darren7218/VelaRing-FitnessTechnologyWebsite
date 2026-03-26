Vēla Smart Ring Web App https://smartringvela.netlify.app/

A responsive and modern web application for Vēla Smart Ring – a wearable fitness and wellness solution. The platform provides product information, user dashboards, fitness tracking tools, and membership features in an intuitive, mobile-friendly interface.

##  Project Structure
/project-root
│
├── index.html                # Landing page with hero section & navigation
├── why-vela.html             # Why choose Vēla? – Features & benefits
├── how-it-works.html         # Explanation of Vēla's technology & usage
├── fitness-gadgets.html      # Additional fitness gadgets & API integrations
├── smart-ring-details.html   # Product details, gallery, and specs
├── login.html                # Login / Sign Up page
├── contact.html              # Contact form page
├── dashboard.html            # User dashboard with health metrics
├── workout-tracker.html      # BMI & workout tracking with Chart.js
├── profile.html              # User profile management
│
├── /images                   # Image assets for hero, features, gallery
├── /css                      # (Optional) External CSS if separated
├── /js                       # (Optional) External JS if separated

## ✨ Key Features

* **Modern Responsive UI** – Built with Bootstrap 5 and custom CSS.

* **Dark Mode Support** – Toggle between light and dark themes (stored in localStorage).

* **Landing Page** – Showcases Vēla Smart Ring with animations & CTA buttons.

## Product Pages:

* Why Vēla? – Benefits and unique selling points.

* How It Works – Step-by-step usage guide.

* Fitness Gadgets – Compatible devices and integration options.

* Smart Ring Details – Specifications, gallery, and purchase section.

* Authentication – Login/Sign-up form with password visibility toggle.

* Dashboard – Real-time health metrics display using Chart.js.

* Workout & BMI Tracker – Add workouts, calculate BMI, and visualize trends.

* Profile Page – Update personal details and preferences.

* Contact Page – Form to reach out for support.

* Mobile-Friendly – Optimized navigation with hamburger menus.

* Export Feature – Generate reports using jsPDF.

## 🛠 Technologies Used

* **HTML5** – Structure

* **CSS3 / Bootstrap 5** – Styling & layout

* **JavaScript (ES6)** – Interactivity & logic

* **Chart.js** – Graphs & health data visualization

* **jsPDF** – Export workout reports as PDF

* **jQuery** – Used in some pages for DOM manipulation

* **Google Fonts** – Typography

* **Font Awesome / Bootstrap Icons** – Icons for UI elements

## ▶️ How to Run

1. Download or Clone the repository:

```bash
  git clone https://github.com/your-repo/vela-smart-ring.git
```

2. Open the index.html file in your preferred browser.

3. Navigate through the pages via the navbar or links.

## 📱 Responsive Design

Works seamlessly on desktop, tablet, and mobile.

## Adaptive navigation:

Desktop → Sidebar for dashboards & trackers.

Mobile → Collapsible hamburger menu.

## 🔐 Authentication Notes

Currently frontend-only (no backend or database).

Future enhancements: Firebase Auth or Node.js/Express backend.

## 📊 Dashboard & Tracking

* Dashboard displays:

1. Heart rate

2. Steps

3. Sleep data

4. Weather info

* Workout Tracker:

1. Add exercises & track progress

2. BMI calculator with history

3. AI suggestion placeholder for future enhancement

## 🌙 Dark Mode

Implemented across all main pages.

Toggle button saves preference in localStorage.

## 🚀 Future Improvements

Integrate real API data (weather, fitness metrics).

Backend with database for user profiles & workout logs.

Progressive Web App (PWA) for offline support.

AI-based fitness recommendations.

## 👨‍💻 Developed By

Vēla Development Team
© 2025 VēlaRing Inc. | All Rights Reserved
