# CIPHER — THE CONTENT MACHINE
## Complete Handoff Document for Claude Code
**Date:** June 11, 2026
**Version:** Final
**Status:** Ready for Claude Code to take over

---

## FIRST THING TO DO

Before touching any code, read these two skill files completely:
- `/mnt/skills/public/frontend-design/SKILL.md` — read before writing any CSS or UI
- `/mnt/skills/public/pdf/SKILL.md` — read before building the deliverables export

---

## 1. EXECUTIVE SUMMARY

**What we are building:**
Cipher is a web application called "The Content Machine." It is an AI-powered content strategy tool that takes minimum business inputs, fires multiple research APIs simultaneously, feeds all research data into Claude, and outputs a complete professional content strategy with viral mechanics analysis, original content ideas, ready-to-shoot scripts, and a client pitch — plus three downloadable professional briefs.

**Owner:** Chantal — Lebanese entrepreneur, runs a top social media agency in Zahle, Lebanon.

**Target users:**
1. Complete beginners learning content strategy through Chantal's course ($89 Lebanon / $197-247 global)
2. Working content strategists and agency owners

**The core promise:** Student inputs 7 things about a business. The machine does all the research a senior content strategist would do manually. Student walks into a client meeting with a real, data-backed strategy they can present with confidence — even with zero experience.

**Why output must never be generic:** The entire product value is non-generic output. Real viral data anchors Claude's output to what's actually working right now in the specific market. A skincare brand in Beirut gets a completely different strategy than one in Dubai because the research shows different things are working in those two markets right now.

**Distribution:** Embedded inside a course sold on Whop. Accessed via private URL.

---

## 2. COMPLETE PRODUCT FLOW — A TO Z

### ENTRY — Language Selection Screen
User opens app. Sees Cipher logo (animated loading version) and three buttons:
- English
- العربية (Arabic MSA — full RTL support)
- Français

Everything from this point renders in selected language including all UI text and AI output.

---

### SCREEN 1 — Business Intake (7 fields)

1. **Business Type** — free text. "Skincare brand", "Restaurant", "Gym"
2. **What it actually does** — 2-3 sentences. Products, services, differentiators
3. **Location** — city and country. "Beirut, Lebanon"
4. **Price positioning** — 4 buttons: Budget / Midrange / Premium / Luxury
5. **Their best thing** — one sentence. If nothing special, they type "nothing special" — triggers Marketing-Led strategy mode automatically
6. **Instagram handle** — optional
7. **TikTok handle** — optional

User clicks **Run the Machine**.

---

### SCREEN 2 — Research Pipeline (7 steps, fire simultaneously)

Each step shows: waiting → spinning → done/error state with animated progress bar.

1. **Perplexity** — real-time web intelligence. What people are saying in this niche, consumer complaints, cultural moments, market sentiment
2. **YouTube** — viral content in this niche globally. Titles, view counts, channel names, direct links
3. **Google Trends (SerpAPI)** — rising search interest in this specific country. What's peaking vs declining
4. **Instagram (EnsembleData)** — top performing posts and reels for this niche hashtag. Likes, comments, media type, links
5. **TikTok (EnsembleData)** — trending videos last 30 days. Play counts, likes, author handles, links
6. **Search Intelligence (DataForSEO)** — Google search results for this niche in this location. Competitors, news, what's ranking
7. **Cipher AI (Claude)** — reads ALL above data simultaneously and extracts market diagnosis, dominant format, viral mechanics, trend signals, competitor patterns

Progress bar fills as each step completes. Total time: 20-40 seconds.

---

### SCREEN 3 — Research Report + Idea Selection

The research presents as a live intelligence briefing. Reading order builds a complete strategic picture.

**SECTION 1 — MARKET PULSE** (Perplexity)
- What is happening in this niche right now
- Exact words and phrases real people use when complaining or praising
- Unsolved problems the audience is vocal about
- Rising cultural conversations relevant to this business

**SECTION 2 — CONTENT FORMAT INTELLIGENCE** (YouTube + TikTok + Instagram)
- What format is dominating this niche in this specific country right now
- Proof: real examples with links and metrics
- What formats are declining
- Format gap: what nobody is doing that the data suggests would work

**SECTION 3 — VIRAL CONTENT INTELLIGENCE** (All platforms)
- Maximum viral examples — not 3, not 7, as many as APIs return filtered to highest performing
- For each: platform, direct link, metrics, hook used, the mechanic (psychological why), content format
- This is the inspiration bank the strategist works from

**SECTION 4 — COMPETITOR INTELLIGENCE** (EnsembleData)
- For each competitor found in this location and niche:
  - Handle + platform
  - Follower count + average engagement rate
  - Content format they use most
  - Hook patterns they repeat
  - Their 3 best performing posts (metrics + links)
  - Their 3 worst performing posts (what flopped and why)
  - What their audience asks for in comments that they never deliver

**SECTION 5 — SEARCH + TREND INTELLIGENCE** (DataForSEO + SerpAPI)
- What people are actively searching in this niche in this location
- Rising keywords before they peak
- Declining keywords (oversaturated)
- What Google is currently surfacing as top content
- Recent news and coverage

**SECTION 6 — STRATEGIC GAP ANALYSIS** (Claude synthesizes everything)
- The single biggest opportunity nobody in this market is taking
- The underused content format relative to audience appetite
- The emotional territory nobody is owning
- Whether this business needs Product-Led or Marketing-Led strategy and exactly why

**VIRAL IDEAS SELECTION**
After the 6 sections, user sees viral idea cards — each showing:
- Platform source
- Idea name
- Why it worked (psychological mechanic, not surface description)
- How this mechanic applies to their specific business

User selects 2-4 ideas. Clicks **Build the Strategy**.

---

### BETWEEN SCREENS 3 AND 4 — Idea Count Selector

A slider popup appears:
- "How many content ideas do you need for your client?"
- Minimum: 5, Maximum: 20
- System always generates 1.8x the selected number rounded up
- If user selects 10 → system generates 18
- Extra ideas labeled "Backup Ideas"
- Claude explicitly tells user: "You have [X] backup ideas. If your client hesitates on any primary idea, pull from these. You always have options and never get caught off guard."

---

### SCREEN 4 — Full Strategy Output (Streaming word by word)

**Block 1 — Market Diagnosis**
Real content landscape in this niche in this location right now. What format dominates. What the audience actually wants underneath the surface need. What competitors are doing that's saturated.

**Block 2 — Strategy Mode** (auto-decided by machine, never chosen by user)
- **Product-Led** — business has a real differentiator. Strategy surfaces that truth in the most unexpected way
- **Marketing-Led** — business has nothing special. Strategy creates a feeling, identity, or cultural moment. The marketing IS the differentiator (Burger King / L'Oréal model)
Machine explains its reasoning clearly.

**Block 3 — Dominant Format**
Exact content format for this business in this market. Why it works for this specific audience. How to brief the client on this format choice.

**Block 4 — Content Ideas** (1.8x user's requested count)
For each idea:
- Name (memorable, specific)
- Mechanic (psychological trigger)
- Hook (exact opening words)
- Execution (step by step)
- Why this works for this specific business in this specific market

Primary ideas labeled clearly. Backup ideas labeled "Backup — use if client hesitates."

**Block 5 — Ready-to-Shoot Scripts** (3 scripts minimum)
Each script:
- HOOK: first 3 seconds — must stop the scroll
- BODY: what is said or shown
- CLOSE: call to action
Format matches dominant format. Length: 30-60 seconds spoken.

**Block 6 — Client Pitch**
Exactly what the strategist says to the client. 5-8 sentences. Confident. Professional. A beginner can read this out loud and sound like 10 years experience.

---

### END OF STRATEGY — 3 Downloadable Deliverables

After strategy streams completely, three professional briefs generate automatically using the PDF skill:

**Deliverable 1 — Client Brief**
Strategy in client-friendly language. What we're doing, why, expected results. Professional enough to send directly to the client. Styled with Cipher design identity.

**Deliverable 2 — Visual Brief**
Color palette direction. Mood and aesthetic references. Content visual identity do's and don'ts. Shot style guidance. Designed as a professional agency brief.

**Deliverable 3 — Videography Brief**
Shot types. Lighting direction. Location suggestions. Props. Talent direction. Format specs (aspect ratio, length, captions). Everything a videographer needs to execute without questions.

All three downloadable as PDF. Styled with Cipher colors and logo.

**New Strategy** button resets to Screen 1.

---

## 3. DESIGN SYSTEM

### Color Palette
```
--bg-primary:     #0A0B0F    (near-black background)
--bg-secondary:   #0F1117    (surface/card background)
--bg-tertiary:    #141720    (elevated surface)
--border:         #1E2330    (default border)
--border-hi:      #2A3347    (hover border)
--text-primary:   #FFFFFF    (primary text)
--text-secondary: #8892A4    (muted text)
--text-dim:       #3D4F62    (disabled/hint text)

--gradient-start: #4F8EF7    (blue)
--gradient-end:   #8B5CF6    (purple)
--gradient:       linear-gradient(135deg, #4F8EF7, #8B5CF6)

--accent:         #4F8EF7    (blue — primary actions)
--accent2:        #8B5CF6    (purple — secondary/selected states)
--success:        #00C896
--danger:         #FF4D6D
```

The blue-purple gradient is used on:
- Key interactive elements (selected states, active pipeline steps)
- Progress bar fill
- Primary CTA buttons
- Logo mark accent moments
- Section divider accents

NO pink anywhere. NO green accents. NO warm tones.

### Typography
- **Font:** Inter (all weights)
- **Weight used:** Inter Medium (500) for all UI text
- **Display/headers:** Inter SemiBold (600) only for screen titles
- **Body:** Inter Regular (400) for body copy and descriptions
- **Tracking:** Wide letter-spacing on labels and tags (1.5px-3px)
- **No other fonts.** Not Syne, not anything else. Inter only.

### Logo Usage
The Cipher logo file is at `cipher_logo.svg` in the project root.
- Language screen: full logo with wordmark, centered, white on dark
- Header: mark only (C + dot), no wordmark, 28px height
- Loading state: `#cipher-loading` animation from the SVG — C arc spins, dot pulses
- Favicon: `#cipher-favicon` from the SVG

### Logo Spec (for redrawing if needed)
- Open circular C shape — gap on the right side approximately 30 degrees
- Thin consistent stroke: 2.2px at full size
- Stroke-linecap: round
- Small floating dot at the opening of the C, slightly outside the arc radius
- "CIPHER" wordmark below in Inter Light/300, letter-spacing: 10-12px, all caps
- Pure white on transparent background is the master version

### Logo — DO NOT trace or approximate
Use this exact SVG path for the mark at any size (scale the transform):
```svg
<!-- At 120x120 viewBox, center 60,60, radius 38 -->
<path
  fill="none"
  stroke="white"
  stroke-width="2.5"
  stroke-linecap="round"
  d="M 88.2 34.5 A 38 38 0 1 0 88.2 85.5"
/>
<circle fill="white" cx="96" cy="60" r="4.5"/>
```
Scale proportionally for other sizes.

### UI Patterns
- Border radius: 12px for cards, 8px for inputs, 20px for large cards
- No shadows — use border color changes for depth
- Hover states: border color shifts from `--border` to `--border-hi`
- Selected states: gradient border or background tint
- All transitions: 0.2s ease
- No decorative elements — every visual element serves a function

---

## 4. API STACK

### Complete Environment Variables
```
ANTHROPIC_KEY       — Anthropic Claude API
PERPLEXITY_KEY      — Perplexity AI (real-time web search) — starts with pplx-
ENSEMBLE_TOKEN      — EnsembleData (Instagram + TikTok data)
YOUTUBE_KEY         — Google YouTube Data API v3 — starts with AIza
SERPAPI_KEY         — SerpAPI (Google Trends)
DATAFORSEO_LOGIN    — DataForSEO account email
DATAFORSEO_PASS     — DataForSEO account password
```

### API Endpoints

**Perplexity — market intelligence**
```
POST https://api.perplexity.ai/chat/completions
Model: llama-3.1-sonar-small-128k-online
Headers: Authorization: Bearer {PERPLEXITY_KEY}
Use for: "What are people saying about [niche] in [location] right now?"
```

**YouTube Data API v3**
```
GET https://www.googleapis.com/youtube/v3/search
Params: part=snippet, q={query}, type=video, order=viewCount, maxResults=10, key={YOUTUBE_KEY}
```

**SerpAPI — Google Trends**
```
GET https://serpapi.com/search
Params: engine=google_trends, q={keyword}, geo={country_code}, api_key={SERPAPI_KEY}
```

**EnsembleData — Instagram**
```
GET https://ensembledata.com/apis/instagram/hashtag/top-posts
Params: hashtag={tag}, token={ENSEMBLE_TOKEN}
```

**EnsembleData — TikTok**
```
GET https://ensembledata.com/apis/tt/keyword/search
Params: keyword={kw}, period=30, token={ENSEMBLE_TOKEN}
```

**DataForSEO**
```
POST https://api.dataforseo.com/v3/serp/google/organic/live/advanced
Auth: Basic base64(login:password)
Body: [{ keyword, location_name, language_code: "en", depth: 10 }]
```

**Anthropic Claude**
```
POST https://api.anthropic.com/v1/messages
Model: claude-sonnet-4-20250514
Headers: x-api-key: {ANTHROPIC_KEY}, anthropic-version: 2023-06-01
Two calls: (1) JSON analysis — max_tokens 4000, (2) Strategy streaming — stream: true, max_tokens 6000
```

---

## 5. CURRENT ARCHITECTURE

### File Structure
```
cipher/
├── index.html          — Full frontend (language, intake, pipeline, ideas, strategy)
├── api/
│   └── proxy.js        — Vercel serverless proxy for all API calls
├── vercel.json         — CORS headers + function config
├── package.json        — Node 18.x pinned
└── cipher_logo.svg     — All logo versions + loading animation
```

### vercel.json
```json
{
  "functions": {
    "api/proxy.js": {
      "memory": 512,
      "maxDuration": 60
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
      ]
    }
  ]
}
```

### package.json
```json
{
  "name": "cipher",
  "version": "1.0.0",
  "engines": { "node": "18.x" }
}
```

### Proxy Architecture
Browser → `/api/proxy?action=X` (POST with JSON body) → Vercel serverless function → External API → Returns JSON to browser

The proxy keeps all API keys server-side. Browser never touches APIs directly.

**Current proxy actions:**
```
action=youtube      body: { query }
action=trends       body: { keyword, geo }
action=instagram    body: { hashtag }
action=tiktok       body: { keyword }
action=dataforseo   body: { query, location }
action=analyze      body: { business, researchData }
action=strategy     body: { business, researchData, chosenIdeas, lang }
```

**Add these new actions:**
```
action=perplexity   body: { query, location, niche }
```

---

## 6. KNOWN BUGS TO FIX

### Bug 1 (CRITICAL) — APIs returning empty data
**Symptom:** Pipeline completes, app reaches Ideas screen, but no research cards or viral ideas appear.

**Vercel logs showed:**
```
YT status: 200 items: 1         ← working but sparse
Trends status: 401              ← SerpAPI key rejected
IG status: 404                  ← EnsembleData endpoint issue
TK status: 422                  ← EnsembleData params issue
SEO status: 401                 ← DataForSEO credentials rejected
Analyze status: 400             ← Anthropic key rejected
External APIs: No outgoing requests  ← req.body arriving empty
```

**Root cause:** `req.body` is undefined when reaching the proxy. The `export const config = { api: { bodyParser: true } }` was added but may not have deployed correctly.

**Fix by:**
1. Run `vercel dev` locally
2. Test each action with curl (see Section 8)
3. Confirm `req.body` is populated
4. Fix each API authentication failure individually

### Bug 2 — No GitHub connection
Every code change requires manual zip upload + re-entering environment variables.
**Fix:** Connect to GitHub repo. One-time setup. All future updates via `git push`.

---

## 7. WHAT TO BUILD (COMPLETE REBUILD INSTRUCTIONS)

The existing code has the right architecture but needs:
1. All bugs fixed
2. Perplexity added to research pipeline
3. Design rebuilt with new color palette (dark navy + blue-purple gradient, Inter Medium)
4. Logo integrated with loading animation
5. "Content Machine" removed from all UI — only "Cipher" appears
6. Idea count slider added before strategy generation
7. 3 PDF deliverables added at strategy end
8. Research report restructured into 6 sections as specified above

**Do a complete UI rebuild** — don't patch the existing CSS. The current dark teal colors need to be replaced entirely with the new navy + blue-purple palette.

---

## 8. SETUP AND DEBUG INSTRUCTIONS

### Step 1 — Install dependencies
```bash
npm install -g vercel
npm install -g pnpm
vercel login --token YOUR_VERCEL_TOKEN
```

### Step 2 — Create .env.local
```
ANTHROPIC_KEY=sk-ant-api03-...
PERPLEXITY_KEY=pplx-...
ENSEMBLE_TOKEN=...
YOUTUBE_KEY=AIza...
SERPAPI_KEY=...
DATAFORSEO_LOGIN=email@domain.com
DATAFORSEO_PASS=...
```

### Step 3 — Link to Vercel project
```bash
cd cipher
vercel link
# Select: content machine's projects → cipher-v8
```

### Step 4 — Run locally
```bash
vercel dev
```

### Step 5 — Test each API with curl
```bash
# YouTube
curl -X POST "http://localhost:3000/api/proxy?action=youtube" \
  -H "Content-Type: application/json" \
  -d '{"query":"skincare viral Lebanon"}'

# Perplexity
curl -X POST "http://localhost:3000/api/proxy?action=perplexity" \
  -H "Content-Type: application/json" \
  -d '{"query":"what are people saying about skincare in Lebanon","location":"Lebanon","niche":"skincare"}'

# Google Trends
curl -X POST "http://localhost:3000/api/proxy?action=trends" \
  -H "Content-Type: application/json" \
  -d '{"keyword":"skincare","geo":"LB"}'

# Instagram
curl -X POST "http://localhost:3000/api/proxy?action=instagram" \
  -H "Content-Type: application/json" \
  -d '{"hashtag":"skincare"}'

# TikTok
curl -X POST "http://localhost:3000/api/proxy?action=tiktok" \
  -H "Content-Type: application/json" \
  -d '{"keyword":"skincare Lebanon"}'

# DataForSEO
curl -X POST "http://localhost:3000/api/proxy?action=dataforseo" \
  -H "Content-Type: application/json" \
  -d '{"query":"skincare brand Lebanon","location":"Lebanon"}'

# Anthropic
curl -X POST "http://localhost:3000/api/proxy?action=analyze" \
  -H "Content-Type: application/json" \
  -d '{"business":{"type":"Skincare brand","desc":"Scar removal creams, blackhead pads, vitamin masks. Clinically tested.","location":"Beirut, Lebanon","price":"Midrange","best":"Most effective products in market"},"researchData":{}}'
```

Each curl response will show exactly what each API returns. Fix authentication errors before proceeding.

### Step 6 — Connect GitHub (do once)
```bash
git init
git add .
git commit -m "cipher initial"
# Create repo on github.com named "cipher"
git remote add origin https://github.com/CHANTALUSERNAME/cipher.git
git push -u origin main
```
Then in Vercel: Settings → Git → Connect to this repo.
After this, `git push` = auto-deploy. Never touch zips again.

### Step 7 — Deploy
```bash
vercel --prod
```

---

## 9. TEST CASE

Use this for all testing:
```json
{
  "type": "Skincare brand",
  "desc": "Sells scar removal creams, blackhead pads, and vitamin masks. Products are clinically tested and proven the most effective in the market.",
  "location": "Beirut, Lebanon",
  "price": "Midrange",
  "best": "Products are tested to be the most effective in the market. Customers always come back because they actually work.",
  "ig": "",
  "tk": ""
}
```

---

## 10. SUCCESS CRITERIA

When everything works, running the test case should:
1. Pipeline: all 7 steps turn green one by one
2. Research report: 6 sections with real data, real links, real metrics
3. Viral ideas: minimum 8-10 cards with psychological mechanics explained
4. Idea count slider: works, generates 1.8x selected number
5. Strategy: streams word by word, 6 blocks, nothing generic
6. Scripts: talking head format (dominant in Lebanon), 30-60 seconds
7. 3 PDF deliverables: download correctly, styled with Cipher identity
8. All 3 languages work: English, Arabic RTL, French
9. Logo loading animation plays while Claude generates

---

## 11. WHAT MUST NEVER APPEAR IN OUTPUT

- "Post behind the scenes content"
- "Share your story"
- "Create engaging content"
- "Be authentic"
- Any idea not traceable to real viral data from the research
- Generic hooks like "Have you ever wondered..."
- Format-agnostic advice ("you could do a video or a post")

Every idea must be anchored to real market data pulled in the research phase.

---

*End of handoff. Read the skill files first. Fix the bugs before rebuilding the UI. Connect GitHub before first deploy.*
