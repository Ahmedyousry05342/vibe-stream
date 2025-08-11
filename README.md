# VibeStream

AI-powered streaming platform with natural language, multilingual search, and smart recommendations.

---

## Features

- GPT-powered advanced search by character, description, or language  
- Multilingual queries (English, Hindi, Spanish, etc.)  
- Responsive UI with animations and glassmorphism  
- Firebase Authentication (Sign up / Sign in)  
- Browse Now Playing, Popular, Top Rated, Upcoming movies  
- Movie trailers via backend API  
- Secure routing and mobile-first design  

---

## Tech Stack

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS, React Router  
- **Backend:** Node.js, Express, Axios, axios-retry  
- **Hosting & Auth:** Firebase (frontend), Railway (backend)  

---

## API Endpoints

- `GET /nowplaying` - Current movies  
- `GET /popular` - Popular movies  
- `GET /toprated` - Top rated movies  
- `GET /upcoming` - Upcoming movies  
- `GET /api/trailer/:id` - Movie trailer  
- `GET /api/search/:query` - Search movies  

---

## Setup

1. Clone repo  
2. Add `.env` with `VITE_TMDB_API_KEY`  
3. Install dependencies in frontend & backend  
4. Run backend (`node index.js`)  
5. Run frontend (`npm run dev`)  

---

## Future Plans

- User profiles & watchlists  
- Social features & chat  
- Enhanced personalized recommendations  

---


## Contact

Mohammad Rehan - mohdrehan@gmail.com
Live Link - https://vibestream-ec6c6.web.app
