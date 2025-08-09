import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import axiosRetry from "axios-retry";

dotenv.config();
axiosRetry(axios, { retries: 3 });

const API_KEY = process.env.VITE_TMDB_API_KEY;
const TMDB_BEARER = process.env.TMDB_API_KEY; // For Authorization header

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// Movie routes
app.get("/nowplaying", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/populor", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/toprated", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/upcoming", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

// ✅ Single clean trailer route
app.get("/api/trailer/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_BEARER}`,
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching trailer:", err.message);
    res.status(500).json({ error: "Failed to fetch trailer" });
  }
});

// Search route
app.get("/api/search/:query", async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
