# igloo.inc — Design & UX Reference
> Use this document to guide AI when building a project inspired by or at the same quality level as igloo.inc. It covers visual design, interaction design, technical architecture, content strategy, and brand philosophy extracted from deep analysis of the site.

---

## 1. What igloo.inc actually is

igloo.inc is the corporate homepage of **Igloo Inc.** — a Miami-based holding company (founded 2024) that owns and operates a portfolio of consumer crypto/Web3 brands. Its flagship is **Pudgy Penguins**, one of the most valuable NFT collections ever created. Other brands include Abstract (an Ethereum L2 blockchain), Pudgy World (mobile game), and OverpassIP (NFT licensing platform).

The website is **not a product page**. It is a pure brand statement — a cinematic experience designed to impress investors, press, crypto-native builders, and partners. Transactions and product discovery happen on sub-brand sites. This homepage exists to say: *"we are serious, we are premium, and we don't need to explain ourselves."*

---

## 2. Core design philosophy

### 2.1 Principles to internalize

| Principle | What it means in practice |
|---|---|
| **Cinematic over informational** | The site is experienced like a film, not read like a brochure. Information is secondary to feeling. |
| **Restraint as confidence** | Almost nothing is on the page. No nav, no CTA buttons, no feature lists. Emptiness signals "we don't need to sell you." |
| **Metaphor-consistent** | Every visual, interaction, and copy choice connects to the igloo/arctic metaphor. Nothing is decorative noise. |
| **Culture-coded** | Monospace fonts, HUD-style data overlays, and developer syntax (`//`, `//////`) speak directly to crypto-native and builder audiences. It's a shibboleth. |
| **Experience over conversion** | Zero conversion path. No email capture, no "contact us." The site is a brand impression, not a funnel. |

### 2.2 Audience this design targets

- Crypto/Web3 natives who recognize NFT culture
- Builders and developers (monospace font, code aesthetics signal this)
- Institutional investors and press (`.inc` TLD, corporate structure, clean legitimacy)
- Tech-forward Gen Z (game-like experience, particle aesthetics)

---

## 3. Visual design system

### 3.1 Color palette

The entire palette is **monochromatic cold blue-gray**. There are zero warm colors, zero accent colors, no vibrant CTA highlights anywhere.

```
--color-sky:         #8fa3b5   /* misty horizon */
--color-mountain:    #6c7f8e   /* mid-ground slate */
--color-deep-slate:  #4a5d6b   /* shadows, depth */
--color-ice:         #b8c8d4   /* ice highlight, surface sheen */
--color-snow:        #d8e3e9   /* near-white snow surface */
--color-text:        #ffffff   /* all text, pure white */
--color-hud:         rgba(255,255,255,0.7)  /* HUD labels, slightly dimmed */
```

**Rules:**
- Never add a warm color unless it is a portfolio brand's own color
- Never use a colored CTA button — if interaction is needed, use white text with subtle border or glow
- Transparency and fog are the primary "color" tools — depth through opacity, not hue
- Background is always dark: deep slate, near-black, or full 3D scene

### 3.2 Typography

**All text is monospace.** No exceptions on this site.

```css
font-family: 'Courier New', 'Courier', monospace;
/* or a premium monospace like: */
font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
```

**Why monospace?** It signals developer culture, terminal aesthetics, precision, and technical credibility. In crypto/Web3 contexts it reads as authenticity, not oldness.

**Text styling rules:**
- All text: white (`#ffffff`) or slightly dimmed white (`rgba(255,255,255,0.65)`)
- No bold used for hierarchy — size and opacity create hierarchy instead
- All uppercase used sparingly and intentionally (logo, section labels only)
- Text is sparse — sentences max, never paragraphs
- Copywriting style: terse, declarative, never salesy

**Text size hierarchy:**
```
Logo wordmark:    48–72px, uppercase, wide tracking
HUD labels:       11–13px, uppercase, 0.1em letter-spacing
Body copy:        14–16px, normal case
Manifesto text:   14px, right-aligned, centered in its corner
Scroll prompts:   13px, lowercase
```

### 3.3 Logo

The **IGLOO** wordmark is:
- All caps
- Bold/heavy weight
- Wide letter-spacing
- White on transparent (sits over the 3D scene)
- No icon/symbol — the word is the logo

### 3.4 The `//` and `//////` prefix convention

Code comment syntax used as decorative/semantic prefix:
```
// Copyright © 2026         → marks metadata, like a file header
////// Manifesto            → marks a section, like a chapter marker
```
This is part of the brand voice — everything is written as if it's source code.

---

## 4. Layout system

### 4.1 The four-corner layout

The homepage uses a **corner-anchored layout** over a full-screen 3D scene. The center is always kept completely open for the 3D content.

```
┌─────────────────────────────────────┐
│ [Logo + copyright]    [Manifesto]   │
│                                     │
│                                     │
│           [3D SCENE]                │
│                                     │
│                                     │
│ [Scroll prompt]                     │
│ [Sound toggle]                      │
└─────────────────────────────────────┘
```

**Rules:**
- No centered hero text over the 3D scene
- No nav bar at top
- No footer
- All UI elements hug the edges — never float in the middle
- The 3D object is always the compositional center

### 4.2 Spatial composition

The 3D igloo in the hero is positioned:
- Slightly right of absolute center (golden ratio territory)
- At mid-depth in the scene — not foreground, not far background
- Entrance facing viewer — inviting, not imposing
- Surrounded by generous negative space (fog, mountains receding)

**Lesson:** The subject of the hero should have breathing room on all sides. Crowding the 3D object destroys the premium feel.

---

## 5. 3D scene & rendering

### 5.1 Technical stack

The entire site is a **single WebGL application** — one JavaScript bundle, no HTML content, no traditional DOM structure.

```
Likely stack:
- Three.js (or custom WebGL engine)
- Scroll-driven camera animation (GSAP ScrollTrigger or custom)
- Real-time 3D rendering with PBR materials
- Particle/voxel systems for character rendering
- Ambient sound via Web Audio API
```

**Key technical decision:** Pure WebGL = zero SEO, zero accessibility. This is a deliberate trade-off — their audience arrives via direct URL, Twitter, Discord, and press coverage, not Google.

### 5.2 Scene quality markers

These are the details that make the rendering feel AAA:

| Effect | How it's used |
|---|---|
| **Volumetric fog** | Mountains recede into mist — creates depth without detailed geometry |
| **Particle snow** | Subtle falling snow particles — ambient life without distraction |
| **PBR materials** | Ice, stone, and snow have realistic surface response to light |
| **Caustics** | Chrome torus has light-bending caustic effects (very high-end) |
| **Point cloud / voxel** | Pudgy Penguin rendered as dark gray particles — NFT character recontextualized as tech entity |
| **Bloom/glow** | Subtle glow on node connections and halo ring |
| **Depth of field** | Background elements slightly soft-focused |

### 5.3 Scroll-driven camera choreography

The scroll controls camera position through a pre-defined path. Think of it as a **dolly track through the 3D world.**

```
Scroll 0%:    Panoramic ground level — igloo overview
Scroll 20%:   Camera lifts — aerial ascent
Scroll 35%:   Ice shard floats in — Pudgy Penguins reveal
Scroll 50%:   Fog dive downward — atmospheric transition
Scroll 60%:   VR headset floats/assembles — portfolio item
Scroll 70%:   Chrome torus — abstract visual interlude
Scroll 80%:   Concentric ripples aerial view — meditative pause
Scroll 100%:  Showcase arena — rotating Pudgy Penguin on pedestal
```

**Camera behavior rules:**
- Movement is always smooth — ease in/out, never abrupt
- Each "act" has a clear entry, hold, and exit
- Transitions use fog/blur to mask seams between scenes
- The user always knows they're in the same continuous world

---

## 6. Interactive elements

### 6.1 Complete interaction map

| Element | Location | Behavior |
|---|---|---|
| **Scroll** | Always | Primary camera driver — forward = deeper into world |
| **Node map** | Opening igloo | Numbered nodes (21, 27, 29…) on igloo surface — each = portfolio company. Clicking likely jumps camera. |
| **Click to explore** | Portfolio items (ice shard etc) | Each 3D object is clickable — opens deeper content for that company |
| **← → arrows** | Showcase arena | Cycles through portfolio companies on the rotating pedestal |
| **Sound toggle** | Bottom-left, always | Off by default. Toggles ambient Arctic soundscape + score |
| **Social links** | Showcase arena footer | LinkedIn + X — the only external exits from the experience |

### 6.2 HUD / data overlay system

Portfolio items are tagged with telemetry-style metadata:

```
PORTFOLIO_CO_01 / PUDGY PENGUINS
TEMP 28.65 / −01.86
D 01.02.2020
> CLICK TO EXPLORE
```

**What this achieves:**
- Makes the portfolio feel like a scientific inventory, not a list of links
- The temperature/date readouts serve zero functional purpose — they're pure aesthetic
- Signals: precision, systems thinking, engineering culture
- Creates intrigue — what does TEMP 28.65 mean? You want to find out.

**Rules when implementing HUD overlays:**
- Always monospace font
- Always white or near-white on dark background
- Values should look like real data even if they're symbolic
- Keep it terse — max 4–5 lines per object
- Include a clear action label (`CLICK TO EXPLORE`, `> ENTER`)

---

## 7. Content & copywriting

### 7.1 Voice and tone

```
Terse          → "Our mission is to build the next generation of consumer brands."
                  Not: "We're on a mission to revolutionize the way consumer brands..."

Declarative    → "All Rights Reserved."
                  Not: "Please note that all content is protected."

Code-inflected → "// Copyright © 2026"
                  Not: "Copyright 2026"

No hype        → "PORTFOLIO_CO_01 / PUDGY PENGUINS"
                  Not: "Meet our AMAZING portfolio company Pudgy Penguins!!!"
```

### 7.2 Mission statement (actual copy)

> "Our mission is to build the next generation of consumer brands at the intersection of Community, AI, and crypto."

**What to notice:**
- Three pillars: Community, AI, crypto — in that order (community first, crypto last)
- No adjectives (no "revolutionary," "innovative," "leading")
- Present tense, active voice
- Updated in 2026 to include AI — previously was just "Community and crypto"

### 7.3 Section labels

```
////// Manifesto        → mission statement section
PORTFOLIO_CO_01         → first portfolio company
TEMP / D readouts       → item metadata
> CLICK TO EXPLORE      → CTA
Scroll down to discover → scroll prompt
Sound: Off              → audio toggle label
// Copyright © 2026    → footer/metadata
```

---

## 8. Brand strategy insights

### 8.1 The igloo metaphor — how deep it goes

| Layer | Igloo connection |
|---|---|
| Domain | `igloo.inc` — the building is the brand |
| 3D hero | A literal igloo in an arctic landscape |
| Ice shard | Portfolio companies as fragments of ice — each unique, part of the same frozen world |
| Arctic palette | Cold = pure, structured, unemotional — counter to crypto hype culture |
| Community metaphor | An igloo = communal shelter, warmth inside cold — the crypto community inside a cold world |
| Numbers on igloo | The portfolio mapped onto the building's surface |

**Lesson:** A great metaphor isn't just visual — it's structural. Every element of the site earns its place by connecting to the core metaphor.

### 8.2 What makes it uniquely positioned

1. **Culture-first, tech-second** — The brand led with cute penguins and toys in Walmart, then layered in blockchain. Most crypto companies do the inverse and fail.
2. **Physical-to-digital flywheel** — Pudgy Toys in Target/Walmart onboard people to crypto who never would have searched for it.
3. **Non-speculative positioning** — Explicitly states adoption shouldn't depend on token prices. Rare in crypto.
4. **Developer credibility through aesthetics** — The monospace font, code syntax, HUD overlays make technical people feel at home without a single line of technical explanation.
5. **Premium restraint** — In a space full of garish UI and rainbow gradients, pure cold monochrome reads as class.

### 8.3 The `.inc` domain as design element

`igloo.inc` — using `.inc` (the suffix for incorporated companies) as a TLD is a trust signal and a design decision simultaneously. It:
- Appears in tweets and press coverage as part of the brand
- Signals: legitimate corporation, not just an NFT project
- Costs more and requires verification — signals investment
- Is rare enough to be memorable

---

## 9. What to build to match this quality

### 9.1 Minimum viable experience (MVP)

If you can't build the full WebGL world, here's what preserves the essence:

```
1. Full-viewport dark scene (video background or CSS scene)
2. Corner-anchored layout (logo top-left, copy top-right)
3. Monospace font throughout
4. One high-quality 3D hero object (Three.js or Spline embed)
5. Scroll-triggered reveal animations (GSAP or Framer Motion)
6. Sound toggle (Web Audio API)
7. No nav, no footer, no CTA buttons
8. White text only
9. Cold blue-gray palette only
```

### 9.2 Full-quality implementation stack

```
Rendering:     Three.js + custom GLSL shaders
               OR: Spline (for faster iteration)
               OR: React Three Fiber (if React-based project)

Animation:     GSAP + ScrollTrigger for scroll-driven camera
               CSS @keyframes for ambient elements (snow, glow pulse)

Audio:         Howler.js for ambient sound management

Fonts:         JetBrains Mono or IBM Plex Mono (both free, Google Fonts)

Build:         Vite (fast HMR for WebGL projects)

Performance:   Single JS bundle, lazy-load 3D assets, preload critical scene
```

### 9.3 The HUD overlay component

Build this as a reusable component for any portfolio/project card:

```html
<div class="hud-overlay">
  <span class="hud-id">PORTFOLIO_CO_01 / PROJECT NAME</span>
  <span class="hud-meta">TEMP 28.65 / −01.86</span>
  <span class="hud-date">D 01.02.2020</span>
  <span class="hud-cta">> CLICK TO EXPLORE</span>
</div>
```

```css
.hud-overlay {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.08em;
  line-height: 1.8;
  pointer-events: none; /* sits over 3D canvas */
}

.hud-cta {
  color: #ffffff;
  cursor: pointer;
  pointer-events: all;
}

.hud-cta:hover {
  opacity: 0.7;
}
```

### 9.4 Scroll camera system (conceptual)

```javascript
// Scroll progress 0 → 1 drives camera position
const scenes = [
  { progress: 0,    position: [0, 2, 10],   lookAt: [0, 0, 0]   },  // igloo overview
  { progress: 0.2,  position: [0, 20, 5],   lookAt: [0, 0, 0]   },  // aerial liftoff
  { progress: 0.35, position: [5, 5, 3],    lookAt: [5, 5, 0]   },  // ice shard
  { progress: 0.5,  position: [0, -5, 8],   lookAt: [0, 0, 0]   },  // fog dive
  { progress: 0.65, position: [-3, 3, 5],   lookAt: [-3, 3, 0]  },  // VR headset
  { progress: 0.8,  position: [0, 15, 1],   lookAt: [0, 0, 0]   },  // ripples aerial
  { progress: 1.0,  position: [0, 3, 8],    lookAt: [0, 2, 0]   },  // showcase arena
];

// On scroll: lerp camera between keyframes
// Use GSAP ScrollTrigger to map scroll position → camera lerp
```

---

## 10. Things NOT to do

These mistakes would break the effect:

```
✗ Adding a navigation bar
✗ Using any warm color (orange, red, yellow) in the UI chrome
✗ Using a sans-serif font for UI text
✗ Adding a "Sign Up" or "Get Started" CTA button
✗ Centering text over the 3D hero
✗ Adding a footer with links
✗ Using gradients as decoration (only use for 3D material realism)
✗ Making it mobile-first (this experience is desktop-primary)
✗ Adding stock photography or flat illustrations
✗ Writing long paragraphs of copy anywhere
✗ Using emoji
✗ Making the scroll experience non-linear (must be a single forward path)
✗ Overloading the HUD with real information (keep it cryptic and terse)
```

---

## 11. Reference comparisons

If you want to study similar-quality experiences, look at:

| Site | What to study |
|---|---|
| **apple.com/vision-pro** (2024 launch page) | Cinematic scroll-driven 3D, product as hero |
| **linear.app** | Monospace + cold palette + developer culture aesthetics |
| **vercel.com** | Dark mode confidence, restraint, technical elegance |
| **teenage.engineering** | Sound design as brand layer, product as art object |
| **bruno-simon.com** | Pure WebGL portfolio, scroll-driven world (the OG) |
| **activetheory.net** | Agency-level WebGL, equivalent production quality |

---

## 12. Quick summary card

```
Site type:      Pure WebGL brand statement (not a product site)
Company:        Igloo Inc. — holding company for Pudgy Penguins + crypto brands
Audience:       Crypto natives, builders, institutional investors
Tech:           Single JS bundle, WebGL 3D, scroll-driven camera, Web Audio
Palette:        Monochromatic cold blue-gray — zero warm colors
Typography:     100% monospace, white, sparse
Layout:         Four-corner over full-screen 3D scene
Navigation:     Scroll only — no menus
Key interaction: Scroll (camera), click objects, ← → portfolio cycle, sound toggle
Brand metaphor: Igloo = community shelter in a cold world; ice shards = portfolio
SEO:            Zero (intentional)
Accessibility:  None (intentional trade-off)
Tone:           Terse, declarative, code-inflected, zero hype
DO:             Restraint, metaphor depth, monospace, cold palette, cinematic scroll
DON'T:          Nav bars, warm colors, sans-serif UI, long copy, CTAs, emoji
```

---

*Reference compiled from deep visual + interactive analysis of igloo.inc (May 2026). Site built on WebGL — standard web tools cannot access its content directly.*
