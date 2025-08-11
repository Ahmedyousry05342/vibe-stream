import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import axiosRetry from "axios-retry";
import rateLimit from "express-rate-limit";

dotenv.config();

const API_KEY = process.env.VITE_TMDB_API_KEY;
if (!API_KEY) {
  console.error("❌ Missing TMDB API key in .env file");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Retry failed TMDB requests
axiosRetry(axios, { retries: 3 });

// Limit requests to prevent abuse (100/min per IP)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});
app.use(limiter);

// Only allow your frontend
app.use(cors({
  origin: "https://vibestream-ec6c6.web.app",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// Helper to reduce repetition
const fetchTMDB = async (url, res) => {
  try {
    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    console.error("Error fetching from TMDB:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
};

// Routes
app.get("/nowplaying", (req, res) =>
  fetchTMDB(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`, res)
);

app.get("/popular", (req, res) =>
  fetchTMDB(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, res)
);

app.get("/toprated", (req, res) =>
  fetchTMDB(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`, res)
);

app.get("/upcoming", (req, res) =>
  fetchTMDB(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`, res)
);

// Single clean trailer route
app.get("/api/trailer/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
    );
    const trailer = data.results.find((vid) => vid.type === "Trailer") || data.results[0];
    res.json(trailer || {});
  } catch (error) {
    console.error("Error fetching trailer:", error.message);
    res.status(500).json({ error: "Failed to fetch trailer" });
  }
});

// Search route
app.get("/api/search/:query", (req, res) =>
  fetchTMDB(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(req.params.query)}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
    res
  )
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
