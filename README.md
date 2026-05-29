# BLESS Waitlist Page

A single-file waitlist landing page for **BLESS** — Baby Language Exposure Software Service.

## What's in the page

- **Hero** — Headline, subheadline, and email capture form with animated waveform decoration
- **What is BLESS?** — Dark-green section explaining the product and its four key pillars
- **Footer** — Brand tagline and copyright

Design uses the official BLESS brand palette (forest green `#2A4A35`, warm cream `#F7F3EE`, sage `#8BAA94`) with Cormorant Garamond for display type and Lato for body copy. Fully responsive down to 375px.

---

## File structure

```
waitlist/
├── index.html    ← entire page (self-contained, no build step)
└── README.md
```

---

## Running it locally

Just open the file in a browser:

```bash
open /Users/reyesmartinez/BLESS/waitlist/index.html
```

Or serve it with any static server:

```bash
npx serve .
# → http://localhost:3000
```

---

## Connecting an email service

The form currently logs signups to the console. Replace the `TODO` block in the `<script>` tag at the bottom of `index.html` with your email service of choice:

### Option A — Mailchimp (free tier available)

```js
const res = await fetch('https://your-mailchimp-endpoint', {
  method: 'POST',
  body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  headers: { 'Content-Type': 'application/json' }
});
```

### Option B — ConvertKit

```js
await fetch(`https://api.convertkit.com/v3/forms/FORM_ID/subscribe`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ api_key: 'YOUR_KEY', email })
});
```

### Option C — Resend + a serverless function

Collect the email, POST it to a Vercel/Netlify function, and use Resend to store + send a confirmation email.

---

## Deploying

The page is a single static HTML file — it deploys anywhere:

| Platform | Command |
|---|---|
| **Vercel** | `vercel --prod` from the `waitlist/` directory |
| **Netlify** | Drag the `waitlist/` folder into the Netlify dashboard |
| **GitHub Pages** | Push to a repo, enable Pages on the `main` branch |

---

## Customizing

| What | Where in `index.html` |
|---|---|
| Headline copy | `<h1>` tag in the hero section |
| Subheadline | `<p class="subheadline">` |
| What is BLESS paragraph | `<p>` inside `.what-body` |
| Pillars (format, ages, etc.) | `.pillar` divs inside `.pillars` |
| Footer tagline | `<p class="tagline">` |
| Brand colors | `:root` CSS variables at the top of `<style>` |

---

## Related

- Remotion waitlist video → `../remotion-video/`
- Brand assets and UI mockups → `../Images/`
- Product docs → `../INFO/`
