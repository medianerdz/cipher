export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const ANTHROPIC_KEY    = process.env.ANTHROPIC_KEY;
  const PERPLEXITY_KEY   = process.env.PERPLEXITY_KEY;
  const ENSEMBLE_TOKEN   = process.env.ENSEMBLE_TOKEN;
  const YOUTUBE_KEY      = process.env.YOUTUBE_KEY;
  const SERPAPI_KEY      = process.env.SERPAPI_KEY;
  const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN;
  const DATAFORSEO_PASS  = process.env.DATAFORSEO_PASS;

  const action = req.query.action;

  let body = {};
  try {
    if (typeof req.body === 'string' && req.body.length > 0) {
      body = JSON.parse(req.body);
    } else if (typeof req.body === 'object' && req.body !== null) {
      body = req.body;
    }
  } catch(e) {
    console.log('Body parse error:', e.message);
  }

  console.log('Action:', action, '| Body keys:', Object.keys(body));
  console.log('Keys:', {
    anthropic: !!ANTHROPIC_KEY,
    perplexity: !!PERPLEXITY_KEY,
    ensemble: !!ENSEMBLE_TOKEN,
    youtube: !!YOUTUBE_KEY,
    serp: !!SERPAPI_KEY,
    dfs: !!DATAFORSEO_LOGIN,
  });

  try {

    // PERPLEXITY — real-time market intelligence
    if (action === 'perplexity') {
      const { query, location, niche } = body;
      const prompt = `You are a market research analyst. Research the following and provide detailed intelligence:

Niche: ${niche}
Location: ${location}

Answer these specific questions with real current data:
1. What are people in ${location} saying about ${niche} right now? What exact words and phrases do they use?
2. What are the top complaints and frustrations people have in this niche?
3. What problems are unsolved that people are vocal about?
4. What cultural moments or trends are currently affecting this niche in ${location}?
5. What content about ${niche} is getting the most engagement on social media right now?

Be specific. Use real examples. Do not generalize.`;

      const r = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${PERPLEXITY_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 2000,
        }),
      });
      const data = await r.json();
      console.log('Perplexity status:', r.status);
      res.status(200).json({
        content: data.choices?.[0]?.message?.content || '',
        citations: data.citations || [],
      });
      return;
    }

    // YOUTUBE
    if (action === 'youtube') {
      const { query } = body;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&order=viewCount&maxResults=10&key=${YOUTUBE_KEY}`;
      const r = await fetch(url);
      const data = await r.json();
      console.log('YouTube status:', r.status, 'items:', data.items?.length, 'error:', data.error?.message);
      if (!data.items) { res.status(200).json([]); return; }
      res.status(200).json(data.items.map(i => ({
        title: i.snippet.title,
        channel: i.snippet.channelTitle,
        videoId: i.id.videoId,
        url: `https://youtube.com/watch?v=${i.id.videoId}`,
        thumbnail: i.snippet.thumbnails?.medium?.url || '',
        published: i.snippet.publishedAt?.slice(0,10),
      })));
      return;
    }

    // GOOGLE TRENDS
    if (action === 'trends') {
      const { keyword, geo } = body;
      const url = `https://serpapi.com/search?engine=google_trends&q=${encodeURIComponent(keyword)}&geo=${encodeURIComponent(geo)}&api_key=${SERPAPI_KEY}`;
      const r = await fetch(url);
      const data = await r.json();
      console.log('Trends status:', r.status);
      res.status(200).json(data.interest_over_time?.timeline_data || []);
      return;
    }

    // INSTAGRAM
    if (action === 'instagram') {
      const hashtag = (body.hashtag || '').replace(/\s+/g,'');
      const url = `https://ensembledata.com/apis/instagram/hashtag/top-posts?hashtag=${encodeURIComponent(hashtag)}&token=${ENSEMBLE_TOKEN}`;
      const r = await fetch(url);
      const data = await r.json();
      console.log('Instagram status:', r.status, 'posts:', data.data?.length);
      const posts = data.data || [];
      res.status(200).json(posts.slice(0,10).map(p => ({
        caption: (p.caption || '').slice(0,150),
        likes: p.like_count || 0,
        comments: p.comment_count || 0,
        mediaType: p.media_type || 'IMAGE',
        url: p.permalink || `https://instagram.com/p/${p.shortcode}`,
      })));
      return;
    }

    // TIKTOK
    if (action === 'tiktok') {
      const { keyword } = body;
      const url = `https://ensembledata.com/apis/tt/keyword/search?keyword=${encodeURIComponent(keyword)}&period=30&token=${ENSEMBLE_TOKEN}`;
      const r = await fetch(url);
      const data = await r.json();
      console.log('TikTok status:', r.status, 'items:', data.data?.length);
      const items = data.data || [];
      res.status(200).json(items.slice(0,10).map(v => ({
        desc: (v.video?.desc || v.desc || '').slice(0,150),
        plays: v.stats?.playCount || v.playCount || 0,
        likes: v.stats?.diggCount || v.diggCount || 0,
        author: v.author?.uniqueId || '',
        url: `https://tiktok.com/@${v.author?.uniqueId}/video/${v.id || v.video?.id}`,
      })));
      return;
    }

    // DATAFORSEO
    if (action === 'dataforseo') {
      const { query, location } = body;
      const payload = [{ keyword: query, location_name: location, language_code: 'en', depth: 10 }];
      const authStr = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASS}`).toString('base64');
      const r = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + authStr,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      console.log('DataForSEO status:', r.status);
      const items = data.tasks?.[0]?.result?.[0]?.items || [];
      res.status(200).json(items.filter(i => i.type === 'organic').slice(0,8).map(i => ({
        title: i.title || '',
        url: i.url || '',
        snippet: i.description || '',
      })));
      return;
    }

    // CLAUDE ANALYZE
    if (action === 'analyze') {
      const { business, researchData } = body;
      const prompt = `You are Cipher, a senior content strategist AI. Analyze this research and return ONLY valid JSON with no markdown fences.

BUSINESS: ${JSON.stringify(business)}
RESEARCH: ${JSON.stringify(researchData)}

Return this exact JSON:
{
  "market_diagnosis": "2-3 sentences on current content landscape, dominant format, what audience wants",
  "strategy_mode": "product_led OR marketing_led",
  "strategy_mode_reason": "2-3 sentences explaining why",
  "dominant_format": "exact content format winning in this market right now and why",
  "viral_ideas": [
    {
      "source": "platform name",
      "title": "specific viral concept name",
      "mechanic": "the psychological trigger — WHY it worked, not the surface description",
      "example": "brief description of real example from the data",
      "reconstruction_potential": "how this exact mechanic applies to this specific business with different execution"
    }
  ],
  "top_trends": [
    {
      "trend": "trend name",
      "status": "rising OR peak OR falling",
      "relevance": "one sentence on why this matters for this business"
    }
  ],
  "competitor_gaps": "what no competitor in this market is doing that the audience clearly wants",
  "format_gap": "what content format is underused relative to audience appetite in this market"
}`;

      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': ANTHROPIC_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data = await r.json();
      console.log('Analyze status:', r.status);
      const text = data.content?.[0]?.text || '{}';
      try {
        res.status(200).json(JSON.parse(text.replace(/```json|```/g,'').trim()));
      } catch(e) {
        console.error('Parse error:', text.slice(0,200));
        res.status(200).json({ error: 'parse_error' });
      }
      return;
    }

    // CLAUDE STRATEGY STREAMING
    if (action === 'strategy') {
      const { business, researchData, chosenIdeas, lang, ideaCount } = body;
      const langLabel = lang === 'ar' ? 'Modern Standard Arabic' : lang === 'fr' ? 'French' : 'English';
      const primaryCount = ideaCount || 10;
      const totalCount = Math.ceil(primaryCount * 1.8);
      const backupCount = totalCount - primaryCount;

      const systemPrompt = `You are Cipher — a senior content strategist AI. You never give generic advice. Every output is anchored to real viral data from the research phase and specific to this exact business, location, and market.

ABSOLUTE RULES:
1. Never suggest "post behind the scenes" or "share your story" without a specific mechanic attached
2. Every idea must have a specific hook, a named psychological trigger, and a step-by-step execution
3. Match the dominant content format for this specific market — if talking head dominates in Lebanon, write talking head scripts
4. Explain your strategic reasoning at every step so a beginner can walk into a client meeting and present with confidence
5. Scripts must feel natural to speak out loud, not like marketing copy
6. Every idea must be traceable to real viral proof from the research data
7. Arabic output: Modern Standard Arabic only, correct grammar, no dialect`;

      const userPrompt = `Generate a complete content strategy.

BUSINESS: ${JSON.stringify(business)}
RESEARCH DATA: ${JSON.stringify(researchData)}
SELECTED VIRAL MECHANICS: ${JSON.stringify(chosenIdeas)}
OUTPUT LANGUAGE: ${langLabel}
PRIMARY IDEAS NEEDED: ${primaryCount}
BACKUP IDEAS NEEDED: ${backupCount}
TOTAL IDEAS: ${totalCount}

Use these exact section markers:

[DIAGNOSIS]
The real market situation. What the audience in ${business?.location} actually wants right now. What format is dominating. What every competitor is doing that is becoming saturated. Be specific — reference the research data.

[MODE]
State: Product-Led or Marketing-Led. Then explain in 3 sentences why this business falls into this mode. Tell the strategist exactly what this means for how they position the content.

[FORMAT]
Name the exact content format this business must use. Explain why this specific format works for this audience in ${business?.location} right now. Tell the strategist word-for-word how to explain this format choice to the client.

[IDEAS]
Generate ${primaryCount} PRIMARY ideas, then ${backupCount} BACKUP ideas (labeled clearly).

For EACH idea:
— IDEA NAME: [memorable, specific name]
— MECHANIC: [the psychological trigger this uses]
— HOOK: [exact opening words — first 3 seconds]
— EXECUTION: [step by step what happens in this content]
— WHY THIS WORKS: [specific reason this will work for THIS business in THIS market]

Label backup ideas with: "BACKUP IDEA [number] — Use if client hesitates on primary ideas"

End the ideas section with: "You have ${backupCount} backup ideas. If your client hesitates on any primary idea, pull from these. You will never be caught without options."

[SCRIPTS]
Write 3 complete ready-to-shoot scripts based on the top 3 primary ideas.

Each script format:
SCRIPT [number]: [Idea Name]
HOOK (first 3 seconds): [exact words]
BODY: [full script — natural speech, not marketing copy]
CLOSE: [call to action]
DURATION: [estimated seconds when spoken]

[PITCH]
Write exactly what the content strategist says when presenting this strategy to the client.
5-8 sentences. Confident. Professional. No filler. A complete beginner reading this out loud should sound like they have 10 years of experience.`;

      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': ANTHROPIC_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 6000,
          stream: true,
          system: systemPrompt,
          messages: [{ role: 'user', content: userPrompt }],
        }),
      });

      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value));
      }
      res.end();
      return;
    }

    res.status(400).json({ error: 'Unknown action: ' + action });

  } catch(err) {
    console.error('Proxy error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
