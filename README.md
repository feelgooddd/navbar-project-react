# Responsive Navbar Component (React)

## Overview
This project is a **modular, mobile-first responsive navbar** built with React. It demonstrates **best practices** in component design, responsive layouts, and modern CSS techniques.

The navbar adapts seamlessly between mobile and desktop screens:

- **Mobile:** Hamburger menu toggle with a vertical list of navigation items.  
- **Desktop:** Inline horizontal navigation links with the logo on the left.

---

## Live Demo
(https://netlify-project-react-ryan-goods.netlify.app/)

---

## Features
- **Fully responsive**, mobile-first design.  
- **Modular React components:**  
  - `Navbar` (wrapper)  
  - `MobileNav` & `DesktopNav` (separate layouts)  
  - `NavItem` (reusable link component)  
  - `Logo` (site branding)  
  - `Hamburger` (mobile toggle button)  
- **CSS variables** for consistent theming and color management.  
- **Smooth menu toggle** with CSS transitions.  
- **Right-aligned mobile nav items** and **inline desktop links**.  
- **Accessible**: hamburger button includes proper `aria-label`.

---

## Tech Stack
- React 18 (functional components & hooks)  
- Vite for development  
- CSS variables & media queries for styling  
- Modular component architecture for maintainability

---

## Getting Started
1. Clone the repo:  
```bash
git clone https://github.com/feelgooddd/navbar-project.git
