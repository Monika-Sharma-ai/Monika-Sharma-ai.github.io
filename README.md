# Monika Sharma — Personal Website

**Production Architect for Enterprise Agentic Systems**  
Live at: `https://monika-sharma-ai.github.io`

---

## Tech Stack

- **Next.js 14** (App Router, Static Export)
- **Tailwind CSS** (Dark mode default, light toggle)
- **next-themes** (Theme management)
- **lucide-react** (Icons)
- **GitHub Pages** (Hosting via GitHub Actions)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment to GitHub Pages

### Step 1 — Create the repo
Name your repo exactly: **`Monika-Sharma-ai.github.io`**  
This makes your site available at `https://monika-sharma-ai.github.io` (no subpath).

### Step 2 — Push code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Monika-Sharma-ai/Monika-Sharma-ai.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / Root
4. Save

GitHub Actions will auto-deploy on every push to `main`. ✅

---

## Updating Your Content

### Medium feed
Edit `MEDIUM_USERNAME` in `components/MediumFeed.tsx`:
```ts
const MEDIUM_USERNAME = 'YourActualMediumHandle';
```

### LinkedIn articles
Edit `LINKEDIN_ARTICLES` array in `app/writing/page.tsx` — add new entries as you publish.

### Contact links
Update email, LinkedIn, Medium URLs in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Speaking talks
Edit the `TALKS` array in `lib/data.ts`.

### Frameworks
Edit the `FRAMEWORKS` array in `lib/data.ts`.

---

## Adding Your Images

Place images in `public/images/`:

```
public/images/
├── hero.jpg          ← Your professional headshot (min 800×600px)
├── speaking.jpg      ← Speaking/event photo
└── og-preview.png    ← Social media preview card (1200×630px)
```

Then use them in pages as:
```tsx
<img src="/images/hero.jpg" alt="Monika Sharma" />
```

---

## Project Structure

```
monika-sharma-website/
├── .github/workflows/deploy.yml   ← Auto-deploy to GitHub Pages
├── app/
│   ├── layout.tsx                 ← Root layout + metadata
│   ├── globals.css                ← Base styles + Inter font
│   ├── page.tsx                   ← Homepage
│   ├── about/page.tsx             ← About + timeline
│   ├── frameworks/page.tsx        ← F1–F7 showcase
│   ├── writing/page.tsx           ← Medium RSS + LinkedIn articles
│   ├── speaking/page.tsx          ← 5 talk titles + booking
│   └── contact/page.tsx           ← Contact links
├── components/
│   ├── Header.tsx                 ← Navigation + mobile menu
│   ├── Footer.tsx                 ← Footer + social links
│   ├── ThemeProvider.tsx          ← next-themes wrapper
│   ├── ThemeToggle.tsx            ← Dark/light toggle button
│   └── MediumFeed.tsx             ← Live Medium RSS feed
├── lib/
│   └── data.ts                    ← All content: frameworks, talks, stats
└── public/images/                 ← Your photos and graphics
```
