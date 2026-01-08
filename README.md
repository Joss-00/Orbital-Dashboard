# Orbital Dashboard

Orbital Dashboard is a web application built with React and TypeScript, inspired by space mission control interfaces. The project focuses on building a clean and scalable frontend architecture while integrating real-world space data from multiple public APIs.

The application aggregates and displays data from NASA, Hubble, JWST and Spaceflight News, with an emphasis on readability, performance and maintainable code structure.
Functional and stable application, designed to be extended with additional pages and features.

## Tech Stack
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Axios
- Lucide Icons
- shadcn/ui

## Features
- Multi-API integration (NASA APOD, Hubble, JWST, Spaceflight News)
- Client-side routing with React Router
- Responsive UI with reusable components
- Data fetching with loaders and error handling
- Grid-based layouts and dynamic content rendering
- Centralized utilities and typed API responses

## Project Structure (simplified)
```
src/
  assets/            # Images, icons, static files
  components/        # Reusable UI components
  lib/               # Shared modules / config
  pages/             # Application pages
  utils/             # Utility functions
  index.css          # Global styles
  main.tsx           # App entry point

public/              # Static assets
```
## Installation
```
npm install
npm run dev
```
Build
```
npm run build
```
