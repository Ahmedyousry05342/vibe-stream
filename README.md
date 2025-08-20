[![Releases](https://img.shields.io/badge/Releases-v1.0.0-blue?style=for-the-badge&logo=github)](https://github.com/Ahmedyousry05342/vibe-stream/releases)

Vibe Stream — AI Streaming Platform with Multilingual Search

<img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" alt="Vibe Stream hero" style="width:100%;max-width:1000px;border-radius:8px;margin:16px 0" />

AI-powered streaming platform with natural language, multilingual search, and smart recommendations. Built with React, Node, Express, Redux, Tailwind CSS, GPT integration, and Firebase. Stream media. Search by plain language. Serve users in multiple languages.

Badges
- Topics: ai-integration · api · express · firebase · frontend · gpt · javascript · jsx · lucide-react · multilingual · natural-language-processing · nlp · nodejs · performance · react · redux · tailwindcss
- Tech: JavaScript · React · Node.js · GPT
- License: MIT

Why Vibe Stream? 🎧
- Let users find content using natural language queries.
- Support multiple languages out of the box.
- Serve personalized recommendations with context-aware signals.
- Ship a fast, responsive web UI with Redux and Tailwind CSS.
- Integrate GPT for semantic search and smart assistants.

Features ✨
- Natural language search that understands intent.
- Multilingual indexing and query translation.
- Smart recommendations that combine behavior signals with content embeddings.
- Live preview, adaptive streaming, and low-latency playback.
- Role-based Firebase auth and simple user management.
- REST API powered by Express and Node.js.
- Frontend built with React, JSX, lucide-react icons, and Tailwind CSS.
- Client-side state with Redux toolkit and performance-focused selectors.
- Server-side caching and streaming optimizations.

Screenshots
- Browse and search UI
  ![Browse screenshot](https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)
- Player and recommendations
  ![Player screenshot](https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

Architecture Overview
- Frontend: React + Redux + Tailwind CSS. Single-page app that calls the backend API and streams media.
- Backend: Node.js + Express. API routes for search, recommendations, playback tokens.
- Data: Firestore for metadata and user data. Optional S3-compatible storage for media.
- AI: GPT-based embeddings and semantic search. Multilingual translation pipelines.
- Recommendations: Hybrid engine using collaborative filtering, content embeddings, and heuristics.
- Cache: Redis for short-term query and session caching.

Quickstart — Local development
1. Clone the repo.
2. Install dependencies for frontend and backend.
3. Start dev servers.

Prerequisites
- Node 18+
- npm or yarn
- Firebase project and service account (for local emulation, use Firebase emulator)
- Optional: Docker and Docker Compose for containerized routes

Local setup (example)
```bash
git clone https://github.com/Ahmedyousry05342/vibe-stream.git
cd vibe-stream
# install root tools or use a package manager workspace
cd frontend && npm install
cd ../backend && npm install
```

Environment
- Copy example env files:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```
- Set keys: FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIRESTORE_PROJECT_ID, OPENAI_API_KEY (or GPT provider), S3_ENDPOINT (optional), REDIS_URL (optional).

Run dev servers
```bash
# terminal 1
cd backend
npm run dev

# terminal 2
cd frontend
npm run dev
```
The frontend runs on :3000 by default. The API runs on :4000.

Download release and run
The release page hosts signed build assets. Visit the Releases page and download the installer or archive for your platform. After you download the asset, extract it and run the included installer or binary.

Example (replace the filename with the actual asset you downloaded from the Releases page):
```bash
# example for a Linux tarball release asset
wget https://github.com/Ahmedyousry05342/vibe-stream/releases/download/v1.0.0/vibe-stream-linux-x64.tar.gz
tar -xzf vibe-stream-linux-x64.tar.gz
cd vibe-stream
./install.sh
```
You can find the downloadable assets and instructions on the Releases page:
https://github.com/Ahmedyousry05342/vibe-stream/releases

Production deploy (recommended flow)
- Use Docker for backend and optional worker services.
- Use a CDN for media and hashed static assets.
- Use environment-managed secrets for AI keys.
- Use a managed Redis for cache, and a managed Firestore or Cloud Spanner for metadata.

Docker quick example
```bash
# build containers
docker compose build

# set env via .env file
docker compose up -d
```

API Overview
- GET /api/search
  - Accepts natural language or structured query.
  - Returns ranked list of content with embeddings score.
- POST /api/recommendations
  - Accepts user id and context.
  - Returns hybrid recommendations.
- GET /api/content/:id/stream
  - Returns signed URL or stream token for playback.

Example search request
```http
POST /api/search
Content-Type: application/json

{
  "query": "documentary about ocean microplastics in Spanish",
  "language": "es",
  "filters": { "duration": { "max": 3600 } }
}
```
Response returns a ranked list with confidence scores, snippet matches, and related tags.

Search and NLP details
- We transform queries into embeddings using a GPT-style model.
- We translate queries to a canonical language if needed.
- We index content with multilingual embeddings and metadata.
- We use semantic search to match intent, not just keywords.
- We fuse semantic scores and heuristic boosts (freshness, watch count, editor picks).

Recommendations engine
- Hybrid approach:
  - Collaborative signals (watch history, likes).
  - Content embeddings for similarity.
  - Context filters (current theme, device).
- We weight signals based on context and user state.
- We apply decay on signals to favor recent trends without losing long-term preference.

Frontend patterns
- Component-first design with React and Tailwind.
- UI state in Redux with selectors to keep renders minimal.
- lucide-react for consistent icons.
- Code-splitting and lazy loading for performance.
- Web Vitals monitored in production.

Security and privacy
- Use short-lived tokens for streaming endpoints.
- Use server-side checks for playback and downloads.
- Store minimal PII in Firestore and respect user privacy settings.

Performance tips
- Precompute embeddings for catalog content offline.
- Cache top queries and popular recommendations in Redis.
- Use HTTP/2 or HTTP/3 and serve video via CDN.
- Use lazy loading for images and components outside the viewport.
- Measure with Lighthouse and fix bottlenecks.

Testing
- Unit tests for backend routes with Jest.
- Integration tests for search and recommendation flows.
- E2E tests with Playwright for critical flows (search, play, auth).

Contributing
- Fork the repo.
- Create a feature branch from main.
- Open a pull request with a clear description and tests.
- Use semantic commits and keep PRs scoped.

Code organization
- /frontend — React app with pages, components, services
- /backend — Express API, workers, utils
- /scripts — build and maintenance scripts
- /infra — Docker-compose, optional Terraform snippets

Common commands
```bash
# run frontend tests
cd frontend && npm test

# run backend tests
cd backend && npm test

# format code
npm run format
```

Troubleshooting
- If you see auth errors, recheck Firebase keys and emulators.
- If the search returns low-quality results, rebuild the embeddings index.
- If streaming fails, inspect token generation and CDN config.

Accessibility and internationalization
- UI uses semantic HTML and keyboard navigation.
- We provide i18n JSON bundles for multiple locales.
- We test with screen readers and ensure captions for media.

License
- MIT. See LICENSE file.

Community
- Open issues for bugs and feature requests.
- Use PRs for fixes and enhancements.
- Label issues with good first issue or help wanted.

Releases and downloads
- Check the Releases page for packaged builds and installers. Download the build for your OS, extract it, and run the included installer or binary. The releases page lists checksums and signed assets for verification.
- Direct link to releases:
https://github.com/Ahmedyousry05342/vibe-stream/releases

Acknowledgments
- GPT-style models for embeddings and semantic layers.
- Firebase for auth and data store.
- Open-source libraries that power UI and server tooling.

License and credits
- MIT License
- See LICENSE file in the repository for full terms.