import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });



dotenv.config(); // ✅ Load .env values

const API_KEY = process.env.VITE_TMDB_API_KEY;
const API_KEY_TMDB_LG = process.env.VITE_TMDB_KEY


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()); // ✅ This was missing

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/nowplaying", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    
    res.json(response.data); // ✅ send the data properly here

  } catch (error) {
    console.error("Error fetching movies:", error.message); // log the real error
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/populor", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    
    res.json(response.data); // ✅ send the data properly here

  } catch (error) {
    console.error("Error fetching movies:", error.message); // log the real error
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/toprated", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    
    res.json(response.data); // ✅ send the data properly here

  } catch (error) {
    console.error("Error fetching movies:", error.message); // log the real error
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/upcoming", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    
    res.json(response.data); // ✅ send the data properly here

  } catch (error) {
    console.error("Error fetching movies:", error.message); // log the real error
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});


app.get("/api/trailer/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
    );

    const videos = response.data.results;
    const trailer = videos.find((vid) => vid.type === "Trailer") || videos[0];

    res.json(trailer);
  } catch (error) {
    console.error("Error fetching trailer:", error.message);
    res.status(500).json({ error: "Failed to fetch trailer" });
  }
});


app.get("/api/trailer/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      {
        params: { language: "en-US", api_key: process.env.TMDB_API_KEY },
      }
    );

    const videos = response.data.results;
    const trailer = videos.find((vid) => vid.type === "Trailer") || videos[0];

    res.json(trailer);
  } catch (error) {
    console.error("Error fetching trailer:", error.message);
    res.status(500).json({ error: "Failed to fetch trailer" });
  }
});



// app.get("/api/trailer/:id", async (req, res) => {
//   const movieId = req.params.id;

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.TMDB_KEY}`,
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`TMDB API error: ${response.statusText}`);
//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error("Error fetching trailer:", err);
//     res.status(500).json({ error: "Failed to fetch trailer" });
//   }
// });


// 3️⃣ Using Bearer token


app.get("/api/trailer/bearer/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_KEY}`,
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
    console.error("Error fetching trailer with Bearer:", err.message);
    res.status(500).json({ error: "Failed to fetch trailer" });
  }
});


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
  console.log(`Server is running`);
});
