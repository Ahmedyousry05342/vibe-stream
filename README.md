VibeStream
VibeStream is an AI-powered streaming platform designed to revolutionize how users discover movies. Leveraging GPT and natural language processing, VibeStream enables advanced, multilingual, and context-aware search capabilities — making movie browsing intuitive, personalized, and fun.

Features
AI-Powered Search: Find movies using natural language queries, character names, complex descriptions, or multiple languages.

Multilingual Support: Search movies in English, Hindi, Spanish, and more.

Responsive UI: Sleek design with smooth animations, glassmorphism effects, and mobile-first responsiveness.

Firebase Authentication: Secure user sign-up/sign-in.

Movie Browsing: Beautifully designed movie cards showcasing current, popular, top-rated, and upcoming movies.

Smart Recommendations: Context-aware suggestions based on user queries.

Robust Backend: Express.js server deployed on Railway, integrating TMDB API with retry and error handling.

Protected Routes & Seamless Navigation: Powered by React Router.

Tech Stack
Frontend: React.js, Redux Toolkit, Tailwind CSS, React Router, Lucide React Icons

Backend: Node.js, Express.js, Axios, axios-retry, CORS

Authentication & Hosting: Firebase

Deployment: Firebase Hosting (frontend), Railway (backend)

Getting Started
Prerequisites
Node.js (v14 or later)

Firebase CLI (for hosting)

TMDB API key (You can get one from The Movie Database)

Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/vibestream.git
cd vibestream
Create a .env file in the backend directory and add your TMDB API key:

ini
Copy
Edit
VITE_TMDB_API_KEY=your_tmdb_api_key_here
Install dependencies:

Frontend:

bash
Copy
Edit
cd frontend
npm install
Backend:

bash
Copy
Edit
cd backend
npm install
Run the backend server locally:

bash
Copy
Edit
node index.js
(Make sure to update index.js with your actual backend filename if different)

Run the frontend app locally:

bash
Copy
Edit
cd frontend
npm run dev
Usage
Use the search bar to find movies by character names, movie descriptions, or multilingual queries.

Browse through sections like Now Playing, Popular, Top Rated, and Upcoming movies.

Watch trailers fetched via the backend API.

Sign up or log in securely using Firebase Authentication.

API Endpoints (Backend)
GET /nowplaying — Fetches currently playing movies

GET /popular — Fetches popular movies

GET /toprated — Fetches top-rated movies

GET /upcoming — Fetches upcoming movies

GET /api/trailer/:id — Fetches trailer for a specific movie

GET /api/search/:query — Searches movies by query string


Challenges & Learnings
Implemented GPT-powered search with natural language understanding.

Built multilingual search support and character-to-movie mapping algorithms.

Overcame SPA routing and hosting challenges with Firebase and Railway.

Optimized backend API requests with retry logic and error handling.

Future Improvements
Add user profiles and watchlists.

Integrate real-time chat or social features for movie discussions.

Expand recommendation system using user behavior and preferences.

Support TV shows and documentaries.


Contact
Created by Mohammad Rehan - mohdrehan9122@gmail.com
GitHub: https://github.com/yourusername/vibestream
