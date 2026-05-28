# Ink Splash — Design System Prompt
> Use this prompt in Google Stitch to generate the visual direction, then pass to Claude in VSCode to build.

---

## STITCH GENERATION PROMPT

```
Design a cinematic, scroll-driven website with an ink splash / sumi-e aesthetic.
The visual language is built entirely around black ink on white paper —
dripping, bleeding, splattering, and flowing across the screen.

VISUAL CONCEPT:
- Background: pure white (#FFFFFF) or off-white parchment (#F5F2ED)
- All visual elements are black ink: splashes, drips, bleeds, washes, and cracks
- Ink is the only "decoration" — no gradients, no geometric shapes, no icons
- Text is the only other element — stark black or deep charcoal on white
- No color anywhere. Strictly monochrome black and white.

LAYOUT — HERO SECTION:
- Full viewport height
- Large ink splash composition bleeding from top-right corner downward
- Ink drips extend vertically into lower half of screen
- Bottom half transitions from heavy ink to near-white with scattered micro-splatter dots
- Center-left area is intentionally kept CLEAN (white) — this is where the main headline sits
- Headline typography: serif or display font, large, black, 3–4 words max
- Sub-label below headline: small monospace or thin sans-serif, 1 line
- Scroll indicator: a single thin vertical line with a small ink dot that drips downward
- No navigation bar visible on first load

INK TEXTURE TYPES TO USE (layer these):
1. Heavy wash — large diffuse black cloud, soft edges, like ink dropped in water
2. Hard splatter — sharp ink droplets radiating from impact points, various sizes
3. Drip trails — thin vertical lines running downward from ink mass, some tapering
4. Crack veins — ultra-thin fractal lines branching from ink clusters (like image 3)
5. Micro dots — isolated single ink drops scattered in negative space

TYPOGRAPHY:
- Headline: large serif or editorial display font (think: Cormorant Garamond, Playfair Display, or PP Editorial New)
- Body/labels: small monospace (JetBrains Mono or IBM Plex Mono), very light weight
- All text: pure black (#0A0A0A) on white, or reversed white on ink-heavy areas
- Letter-spacing: tight on headlines, loose on labels
- No bold weights — use size and contrast only

SECTION 2 — CONTENT REVEAL:
- As user scrolls, a new ink splash bleeds in from the LEFT edge (like image 2)
- The ink occupies the left 40% of the screen
- Content text sits in the clean right 60%
- Ink wash acts as a visual divider, not a box or card
- Text: project/portfolio item title in large display font, 1–2 lines
- Metadata below in monospace: small label + date + category

SECTION 3 — PORTFOLIO GRID ALTERNATIVE:
- Each portfolio item is revealed by an ink splash animation
- Items are NOT in a grid — they float in whitespace at irregular vertical offsets
- Clicking an item triggers an ink bleed animation that expands to fill the screen
- Transition: ink splash grows from click point outward, covering screen, then fades to reveal content

SECTION 4 — FOOTER / END:
- Final section: large centered ink splash, fully saturated black
- Single line of white text centered in the ink mass
- Below: ultra-small monospace copyright/links in light gray

INTERACTION PHILOSOPHY (learned from igloo.inc, adapted for ink):
- Scroll is the primary navigation — linear, cinematic, one direction
- No traditional navigation menu on first load — ink splash covers where nav would be
- Each scroll "act" reveals a new ink composition
- Hovering over portfolio items triggers subtle ink drip animation from item edges
- Cursor: custom — a small ink dot that leaves a very faint trail (CSS only)
- Sound: optional ambient — paper texture, distant brush strokes (off by default)
- Mobile: ink compositions reflow vertically, same aesthetic preserved

ANIMATION NOTES:
- Ink splashes animate on scroll entry: opacity 0 → 1 + slight scale from 0.95 → 1
- Drip trails animate downward on scroll (strokeDashoffset reveal)
- No bouncing, no spring physics — ink moves with gravity and weight
- Transitions feel slow and deliberate — 800ms–1400ms ease curves
- Nothing moves without reason

MOOD REFERENCES:
- Japanese sumi-e ink painting meets editorial magazine
- Feels like: a luxury fashion brand crossed with a contemporary art gallery
- NOT: grunge, horror, dirty, distressed type
- IS: refined, minimal, editorial, organic, unexpected

COLOR PALETTE (strict):
  Background:   #FFFFFF or #F7F4EF (warm white / parchment)
  Ink dark:     #0A0A0A (near-black, not pure black)
  Ink mid:      #2C2C2C (dark gray for washes and depth)
  Ink light:    #6B6B6B (light gray for faded ink, distance)
  Ink ghost:    rgba(0,0,0,0.08) (barely visible dried ink)
  Text primary: #0A0A0A
  Text muted:   #8A8A8A (monospace labels, metadata)

COMPONENTS TO GENERATE:
1. Hero section with ink splash background + headline + scroll indicator
2. Portfolio item card — ink-bordered, no hard edges, ink bleeds as border
3. Section divider — horizontal ink wash instead of a line
4. Navigation (hidden initially, revealed by ink wipe animation)
5. Hover state — ink drip appears from top of hovered element
6. Page transition — ink flood fills screen on navigation
```

---

## CLAUDE IN VSCODE — SYSTEM CONTEXT PROMPT

Paste this at the top of your conversation in Claude (VSCode / Cursor / Windsurf):

```
You are building a premium, cinematic website with an ink splash / sumi-e aesthetic.

CONCEPT:
The entire visual language is built on black ink on white paper — splashes, drips,
bleeds, washes, and cracks. There is no color. No gradients (except black→transparent
for ink fades). No icons, no illustrations, no photography.

The interaction model is learned from igloo.inc:
- Scroll-driven, cinematic, one linear journey
- No traditional nav on load
- Each section is its own "act"
- Transitions feel like turning a page in a heavy art book — slow, intentional

REFERENCE IMAGES:
- Image 1: ink wash with vertical drip trails from a chaotic splash — use for hero
- Image 2: heavy watercolor ink bleed from left edge — use for section dividers
- Image 3: ink + crack veins + scattered micro dots — use for ambient texture

TECH STACK:
- Vite + vanilla JS (or React if preferred)
- GSAP + ScrollTrigger for scroll-driven animations
- SVG for ink drip trails (strokeDashoffset animation)
- Canvas or CSS blend modes for ink texture overlays
- JetBrains Mono (Google Fonts) for labels
- Cormorant Garamond or Playfair Display for headlines

PALETTE (do not deviate):
  --bg:           #F7F4EF
  --ink-heavy:    #0A0A0A
  --ink-mid:      #2C2C2C
  --ink-wash:     #4A4A4A
  --ink-light:    #8A8A8A
  --ink-ghost:    rgba(10,10,10,0.06)
  --text:         #0A0A0A
  --text-muted:   #8A8A8A

TYPOGRAPHY RULES:
- Headlines: Cormorant Garamond, 600 weight, 64–96px, tight tracking (-0.02em)
- Labels: JetBrains Mono, 400 weight, 11–13px, loose tracking (0.08em), uppercase
- Body: Cormorant Garamond, 400 weight, 18–22px, comfortable line-height (1.7)
- Never use font-weight above 600
- Never center-align body text

LAYOUT RULES:
- All sections: full viewport height (100vh)
- Ink elements: position absolute, pointer-events none, z-index behind text
- Text always lives in the CLEAN (white) area of the composition
- Never place text directly on top of heavy ink — ink is background, text needs air
- Corner-anchored UI (like igloo.inc) — branding top-left, nav top-right
- Generous whitespace — ink and text should never crowd each other

ANIMATION RULES:
- Entry animations: opacity + slight translateY (20px → 0), never scale
- Ink reveal: use SVG clipPath or CSS mask with ink-shaped path
- Drip trails: SVG path with stroke-dashoffset animated on scroll
- Duration: 800ms minimum, 1400ms for large ink reveals
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) — smooth, weighted
- No spring, no bounce, no elastic

SECTION STRUCTURE:
  Section 1 — Hero:
    - Ink splash top-right, drips downward
    - Headline center-left in clean white space
    - Scroll line indicator bottom-center

  Section 2 — About / Manifesto:
    - Ink bleed from left edge (40% width)
    - Text sits right of ink in clean space
    - Single large quote or mission statement

  Section 3 — Work / Portfolio:
    - Items revealed one by one on scroll
    - Each item: title + ink splash that grows on hover
    - No grid — items stagger with whitespace between them

  Section 4 — Contact / End:
    - Full black ink flood fills screen
    - White text on ink
    - Minimal: email + social links only

DO NOT:
- Use any color (no blue, no red, no accent colors)
- Add rounded corner cards or box shadows
- Use any stock icons or emoji
- Add a visible nav bar on load
- Use CSS gradients as decoration
- Add loading spinners or skeleton screens
- Use grid layouts with equal columns
- Add hover underlines on links — use ink drip instead

WHAT MAKES THIS DIFFERENT FROM IGLOO.INC:
- igloo.inc: cold, 3D WebGL, arctic, geometric, sci-fi HUD
- This project: warm, 2D, organic, hand-made, editorial, art-world
- Same interaction philosophy (scroll-driven, cinematic, no nav)
- Completely opposite visual and emotional register
- igloo feels like a space station — this should feel like a Tokyo art gallery
```

---

## SCROLL JOURNEY MAP

Reference this when building sections or prompting Claude to add new ones:

```
Scroll 0%   → Hero: ink erupts from top-right, headline appears in white space
Scroll 20%  → Ink drips extend downward, second headline line fades in
Scroll 35%  → Section 2: ink bleed enters from left, manifesto text slides in
Scroll 50%  → First portfolio item: ink splash grows around it on entry
Scroll 65%  → Second portfolio item: ink bleed from opposite side
Scroll 80%  → Third portfolio item: full-width ink wash, item centered in it
Scroll 100% → End: ink floods full screen, white contact text appears
```

---

## COMPONENT PROMPTS (use these individually in Claude/Stitch)

### Hero section
```
Build a full-viewport hero section. Background: #F7F4EF.
Top-right corner: a large abstract ink splash texture (use SVG or CSS,
no images). From the splash, 4–6 thin vertical ink drip lines extend
downward, tapering as they descend. Center-left: a large headline in
Cormorant Garamond 600, 80px, color #0A0A0A, 2 lines max.
Below headline: a label in JetBrains Mono 12px uppercase #8A8A8A.
Bottom center: a vertical scroll indicator — a thin 1px line, 60px tall,
with a small filled circle at bottom that animates downward on loop.
No nav visible. Everything animates in on load: ink splash fades in
over 1200ms, headline slides up from 20px over 800ms with 200ms delay.
```

### Ink section divider
```
Build a section transition component. It's a full-width band, 200px tall.
Left half: heavy ink wash bleed using SVG with organic, non-geometric edge.
The ink has soft internal variation (lighter gray patches within the dark mass).
Right half: clean white/parchment. The boundary between ink and white is
completely organic — no straight lines, no curves, just ink edge.
Below this divider component, section content begins.
```

### Portfolio item
```
Build a portfolio item component for a scroll-driven list.
Each item: full width, 80vh height, white background.
Left 55%: clean white space with — title in Cormorant Garamond 600 48px,
category label in JetBrains Mono 11px uppercase with 0.1em tracking,
year in same monospace style.
Right 45%: ink splash composition, abstract, no recognizable shapes.
On scroll entry: ink fades in from opacity 0, title slides up 20px.
On hover: a thin ink drip animates downward from the top edge of the item,
taking 600ms to reach halfway down.
```

### Page transition
```
Build a page transition overlay. On navigation click:
A large ink splash expands from the click coordinates, growing to cover
100vw × 100vh over 600ms (ease-in). Hold for 200ms. New page content
fades in through the ink over 400ms. Ink then recedes from center outward
over 500ms on the new page, revealing the fresh content beneath.
Use CSS clip-path: circle() animation or an SVG mask for the expansion.
Color: #0A0A0A.
```

---

## MOOD IN ONE SENTENCE

> "The ink knows where to go — your job is to stay out of its way."

Everything on this site feels like it happened naturally — the ink fell, the text
found its space in the silence. The designer's role is invisible. The result feels
discovered, not constructed.

---

*Visual references: 3 uploaded images — ink drip (image 1), watercolor bleed (image 2), ink + crack veins (image 3). Use these as texture and composition reference throughout.*
