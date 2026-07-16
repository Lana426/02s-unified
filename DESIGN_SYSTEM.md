# O2S Design System

**The single source of truth for how the O2S app looks and feels.**
Claude Code reads this file before making any UI change. Every color, size, and
spacing value comes from here — never hardcode a value that isn't a token below.

---

## 1. Design philosophy

The O2S app should read as a **premium, modern web application** — the polish of
Vercel's dashboard, the layout language of the McCarthy O2S wireframes, and
McCarthy's own brand identity.

Three references, three jobs:

- **Vercel (finish):** restraint, precision, generous whitespace, border-defined
  surfaces, near-black text on white, color used *sparingly and meaningfully*.
  This is where the "expensive, clean, technical SaaS" feeling comes from.
- **McCarthy O2S wireframes (layout):** card-based panels, clear section headers,
  clean data tables, numbered steps only where a real sequence exists.
- **McCarthy brand (identity):** the red, the charcoal, the wordmark.

**The governing principle: hierarchy through space and type, not decoration.**
When a screen feels unpolished, the fix is almost always more consistent spacing,
a clearer type hierarchy, and *less* color — not more visual elements.

### Five rules that carry the whole system

1. **Neutral by default, red on purpose.** The interface is a calm field of
   white, near-black, and gray. Red appears only for brand identity and genuine
   urgency (see §3). If red is showing up as decoration, it's wrong.
2. **Cards are defined by borders, not shadows.** Flat, 1px-bordered surfaces —
   the Vercel signature. Shadows are reserved for genuinely elevated things
   (dropdowns, modals, hover lift), never resting cards.
3. **Everything sits on the spacing scale (§4).** No arbitrary pixel values.
   Mashed-together text and inconsistent gaps are the #1 tell of amateur work.
4. **Type hierarchy is explicit.** Every text element has a defined size, weight,
   and color role (§5). The eye should always know what to read first.
5. **Consistency over cleverness.** The same card, button, and badge everywhere.
   A user learns the interface once.

---

## 2. Tokens (CSS custom properties)

These live in `app/globals.css` under `:root`. This system **extends the token
names already in the codebase** (`--red`, `--charcoal`, etc.) so it drops in
cleanly. Where a token already exists, keep its name; align its value to the
table below.

> **Brand-value note:** McCarthy red appears as `#DC1D34` in the current code and
> `#DC1E35`/`#DD1E36` in brand artifacts — the differences are sub-perceptual.
> Keep the existing `--red` value; do not churn the codebase over a 1-unit
> difference. Reconcile to McCarthy's official brand guide if/when available.

```css
:root {
  /* ── Brand ──────────────────────────────────────────────── */
  --red:            #DC1D34;   /* McCarthy red — brand + urgency ONLY */
  --red-hover:      #B81729;   /* pressed/hover state for red actions */
  --red-tint:       #FBE9EC;   /* soft red wash — urgent card bg, badge bg */
  --charcoal:       #26241F;   /* sidebar, primary buttons, heavy structure */
  --charcoal-2:     #3E3935;   /* raised charcoal surfaces (brand warm-dark) */

  /* ── Neutrals (the Vercel-style workhorse ramp) ─────────── */
  --white:          #FFFFFF;
  --gray-50:        #FAFAFA;   /* app background, zebra rows, subtle fills */
  --gray-100:       #F4F4F5;   /* hover fill on neutral rows/ghost buttons */
  --gray-200:       #EAEAEA;   /* DEFAULT border — cards, inputs, dividers */
  --gray-300:       #D4D4D8;   /* stronger border, disabled outline */
  --gray-400:       #A1A1AA;   /* muted icons, placeholder text */
  --gray-500:       #71717A;   /* secondary text */
  --gray-600:       #52525B;   /* tertiary headings */
  --gray-900:       #18181B;   /* PRIMARY text (near-black, not pure) */

  /* ── Semantic status (functional color, used with discipline) */
  --success:        #32743C;   /* healthy / on-track / positive */
  --success-tint:   #CFE6CC;   /* success badge/pill background */
  --info:           #265D9F;   /* neutral info, links in data context */
  --info-tint:      #E7EEF7;   /* info badge/pill background */
  --warning:        #A3864B;   /* caution / pending / planning (text-safe gold) */
  --warning-tint:   #EDE9A3;   /* warning badge/pill background */
  --danger:         #DC1D34;   /* = red; at-risk / overdue / error */
  --danger-tint:    #FBE9EC;

  /* ── Typography ─────────────────────────────────────────── */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace; /* data, IDs, $ */

  /* type scale — see §5 for role mapping */
  --text-xs:   0.75rem;    /* 12px — captions, meta, table headers */
  --text-sm:   0.8125rem;  /* 13px — secondary text, dense tables */
  --text-base: 0.875rem;   /* 14px — body default */
  --text-md:   0.9375rem;  /* 15px — emphasized body, card titles */
  --text-lg:   1.125rem;   /* 18px — section headers */
  --text-xl:   1.375rem;   /* 22px — page subtitles */
  --text-2xl:  1.75rem;    /* 28px — page title */
  --text-3xl:  2.25rem;    /* 36px — hero numbers only */

  --weight-normal:   400;
  --weight-medium:   500;   /* default for UI labels — Vercel leans on 500 */
  --weight-semibold: 600;   /* card titles, section headers */
  --weight-bold:     700;   /* page titles, hero numbers */

  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --tracking-tight: -0.011em;  /* headings — subtle negative tracking */
  --tracking-wide:  0.04em;    /* ALL-CAPS eyebrows/labels */

  /* ── Spacing scale (4px base — §4) ──────────────────────── */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 20px;  --space-6: 24px;  --space-8: 32px;  --space-10: 40px;
  --space-12: 48px; --space-16: 64px;

  /* ── Radius ─────────────────────────────────────────────── */
  --radius-sm: 4px;    /* badges, small chips */
  --radius:    6px;    /* DEFAULT — cards, buttons, inputs */
  --radius-lg: 10px;   /* large containers, modals */
  --radius-full: 999px;/* pills, avatars, toggle */

  /* ── Elevation (use sparingly — borders do most of the work) */
  --shadow-sm:  0 1px 2px rgba(24,24,27,0.06);              /* hover lift */
  --shadow-md:  0 4px 12px rgba(24,24,27,0.08);             /* dropdowns */
  --shadow-lg:  0 12px 32px rgba(24,24,27,0.12);            /* modals */

  /* ── Layout ─────────────────────────────────────────────── */
  --sidebar-width: 240px;
  --topbar-height: 64px;
  --content-max:   1440px;
  --content-pad:   32px;

  /* ── Motion ─────────────────────────────────────────────── */
  --ease:      cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast:  120ms;
  --dur:       180ms;
  --dur-slow:  260ms;
}
```

---

## 3. Color usage — the discipline that makes it look premium

This is the most important section. The current app looks unpolished largely
because color is undisciplined. Follow these rules exactly.

### Red (`--red`) means exactly two things — nothing else

1. **Brand identity:** the McCarthy logo, the active sidebar nav item.
2. **Urgency / needs-action:** an urgent CTA, an overdue/at-risk indicator, the
   "current, act here" step in a tracker, an urgency badge.

**Red is NOT for:** decorative icon chips, generic "view more" links, chart
segments chosen for variety, section accents, hover states on neutral elements,
or "making it pop." When in doubt, it's not red — it's `--gray-900` or `--charcoal`.

### The neutral ramp does the heavy lifting

Structure, text, borders, icons, and most UI chrome are drawn from the gray ramp.
A screen should look almost monochrome — white and near-black with gray
scaffolding — and then red earns attention *because* it's rare.

### Semantic colors are for data meaning only

`--success` / `--info` / `--warning` appear only where they encode real status
(a healthy metric, an informational tag, a pending item) — always as a small
badge/pill with its `-tint` background, never as large fills or decoration.
Keep contrast high; these are field/tablet users, sometimes in sunlight.

### Text color roles

| Role | Token | Use |
|---|---|---|
| Primary | `--gray-900` | headings, key values, body |
| Secondary | `--gray-500` | supporting text, meta, descriptions |
| Muted | `--gray-400` | placeholders, disabled, timestamps |
| On-dark | `--white` | text on charcoal sidebar / dark buttons |
| Link (in data) | `--info` | inline links inside content/tables |

---

## 4. Spacing

**Everything is a multiple of 4px, drawn from the scale tokens.** No `13px`, no
`7px`, no eyeballed gaps.

Reliable defaults:

- **Inside a card:** `--space-5` (20px) or `--space-6` (24px) padding.
- **Between stacked elements in a card:** `--space-3` (12px).
- **Between a label and its value / inline tag:** `--space-2` (8px) — *never
  zero.* Mashed-together text (`Titlepriority 2`) is the most common defect; a
  gap token fixes it.
- **Between cards in a grid:** `--space-4` (16px) or `--space-5` (20px).
- **Between major page sections:** `--space-8` (32px).
- **Page content padding:** `--content-pad` (32px).

Rule of thumb: when something feels cramped or "off," it is almost always a
missing spacing token, not a color or size problem.

---

## 5. Typography

One family (**Inter**) does everything; personality comes from *scale, weight,
and spacing*, not from mixing faces. Use `--font-mono` only for data that reads
better monospaced: dollar amounts in tables, IDs (ORD-3042, BILL-9012), counts.

| Role | Size | Weight | Color | Notes |
|---|---|---|---|---|
| Page title | `--text-2xl` | bold | `--gray-900` | `--tracking-tight`; one per screen |
| Page subtitle / project meta | `--text-sm` | medium | `--gray-500` | sits under title |
| Section header | `--text-lg` | semibold | `--gray-900` | card/section headings |
| Eyebrow / label | `--text-xs` | semibold | `--gray-500` | ALL-CAPS, `--tracking-wide` |
| Card title | `--text-md` | semibold | `--gray-900` | |
| Body | `--text-base` | normal | `--gray-900` | default |
| Secondary body | `--text-sm` | normal | `--gray-500` | descriptions, meta |
| Hero number (KPI) | `--text-3xl` | bold | `--gray-900` | the number, not its label |
| KPI label | `--text-xs` | medium | `--gray-500` | ALL-CAPS under the number |
| Table header | `--text-xs` | semibold | `--gray-500` | ALL-CAPS, `--tracking-wide` |
| Table cell | `--text-sm` | normal | `--gray-900` | mono for $/IDs |

Line height: `--leading-tight` for headings and numbers, `--leading-normal` for
body and descriptions. Never let two different type roles collide with no
space between them — that's a §4 spacing fix.

---

## 6. Components

### Card — the fundamental surface

The card was the most broken element. Every card follows this exactly:

```css
.card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  padding: var(--space-5);            /* 20px; 24px for roomier cards */
  /* NO resting shadow — the border defines it */
}
.card:hover {                          /* only if the card is interactive */
  border-color: var(--gray-300);
  box-shadow: var(--shadow-sm);
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
```

**Card header pattern** (title + optional right-side action/badge):

```
┌─────────────────────────────────────────────┐
│ [icon]  Card Title              [badge/link] │   <- header row
│                                              │   <- --space-4 gap
│  content …                                   │
└─────────────────────────────────────────────┘
```

- Header row: icon (16–20px, `--gray-500` unless status), title (`--text-md`
  semibold), pushed apart from any right-side element with `justify-content:
  space-between`.
- Icon and title separated by `--space-2`. Header and content separated by
  `--space-4`.
- Optional 1px `--gray-200` divider under the header only when the card is dense.

### Icon chips

Small icons in a rounded container. **Default is neutral, not red.**

```css
.icon-chip {
  width: 32px; height: 32px;
  display: grid; place-items: center;
  border-radius: var(--radius);
  background: var(--gray-100);
  color: var(--gray-600);
}
.icon-chip--urgent { background: var(--red-tint); color: var(--red); }
.icon-chip--success { background: var(--success-tint); color: var(--success); }
```

### Buttons

Sophistication comes from a **charcoal** primary (Vercel-like), with **red
reserved for urgent actions** so it stays meaningful.

```css
.btn {                                  /* base */
  height: 36px; padding: 0 var(--space-4);
  border-radius: var(--radius);
  font-size: var(--text-sm); font-weight: var(--weight-medium);
  display: inline-flex; align-items: center; gap: var(--space-2);
  border: 1px solid transparent; cursor: pointer;
  transition: background var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.btn--primary   { background: var(--charcoal); color: var(--white); }
.btn--primary:hover { background: #000; }
.btn--secondary { background: var(--white); color: var(--gray-900); border-color: var(--gray-300); }
.btn--secondary:hover { background: var(--gray-50); border-color: var(--gray-400); }
.btn--ghost     { background: transparent; color: var(--gray-600); }
.btn--ghost:hover { background: var(--gray-100); }
.btn--urgent    { background: var(--red); color: var(--white); }   /* reserved */
.btn--urgent:hover { background: var(--red-hover); }
.btn--sm { height: 30px; padding: 0 var(--space-3); font-size: var(--text-xs); }
.btn:disabled { opacity: .5; cursor: not-allowed; }
```

Button labels are **verbs that name the outcome** ("Approve billing", "Call off",
"Browse & request"), and keep the same word through the flow (a "Publish" button
yields a "Published" toast). Sentence case, never ALL-CAPS.

### Badges / pills — status

```css
.badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  height: 22px; padding: 0 var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs); font-weight: var(--weight-medium);
}
.badge--success { background: var(--success-tint); color: var(--success); }
.badge--info    { background: var(--info-tint);    color: var(--info); }
.badge--warning { background: var(--warning-tint); color: var(--warning); }
.badge--urgent  { background: var(--red-tint);     color: var(--red); }
.badge--neutral { background: var(--gray-100);     color: var(--gray-600); }
```

### Inputs

```css
.input {
  height: 36px; padding: 0 var(--space-3);
  border: 1px solid var(--gray-300); border-radius: var(--radius);
  font-size: var(--text-sm); background: var(--white); color: var(--gray-900);
}
.input::placeholder { color: var(--gray-400); }
.input:focus {
  outline: none; border-color: var(--charcoal);
  box-shadow: 0 0 0 3px rgba(38,36,31,0.08);   /* subtle focus ring */
}
```

### Tables

```css
.table th {
  font-size: var(--text-xs); font-weight: var(--weight-semibold);
  color: var(--gray-500); text-transform: uppercase; letter-spacing: var(--tracking-wide);
  text-align: left; padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--gray-200);
}
.table td {
  font-size: var(--text-sm); color: var(--gray-900);
  padding: var(--space-3); border-bottom: 1px solid var(--gray-200);
}
.table tr:hover td { background: var(--gray-50); }
/* $ amounts and IDs: font-family: var(--font-mono) */
```

### Progress / step tracker — done / current / future MUST be distinct

The current tracker collapses "done" and "current" both into red. Fix:

- **Done:** filled `--charcoal` (or `--success` if it represents a positive
  completion), white check icon.
- **Current:** `--red` — this is the *one* "you are here / act now" signal.
- **Future:** `--gray-200` outline, `--gray-400` icon.

Only **one** step is red (current). Everything behind it is charcoal/complete;
everything ahead is gray. This same rule fixes the order-detail timeline.

### "Needs your attention" — the two modes

The attention region carries the V1<->North Star story and must look polished in
both. Same card system, different richness.

- **Today (passive):** each item is a **row inside one card**, separated by 1px
  `--gray-200` dividers (or as individual small cards with `--space-3` gaps).
  Structure per item: neutral icon-chip · title (`--text-md` semibold) · meta
  line (`--text-sm`, `--gray-500`) · due text as a `--badge--neutral`. **No
  CTAs.** Generous spacing — never a raw bulleted list.
- **North Star (active):** each item is its own **card** with: title + priority
  badge (separated by `--space-2`, never touching), a reasoning line
  (`--text-sm`, `--gray-500`), and a right-aligned CTA button. Urgency shows via
  a `--badge--urgent` or red icon-chip, not by coloring the whole card.
- **Empty state:** a single calm card — centered neutral icon, one line
  (`--gray-500`). Today: "Nothing needs your attention right now." North Star:
  "You're all caught up — O2S is watching your schedule." An empty screen is an
  invitation, not a void.

---

## 7. Layout

- **App shell:** fixed `--charcoal` sidebar (`--sidebar-width`) + `--white`
  content area. Topbar (`--topbar-height`) with product name, the single global
  Today/North Star toggle, project selector, and utility icons.
- **Content:** max-width `--content-max`, centered, `--content-pad` padding.
- **Grids:** use the existing `.g2/.g3/.g4` utilities; card gap `--space-4` or
  `--space-5`. Cards in a row share equal height.
- **Vertical rhythm:** `--space-8` between major sections; `--space-5`/`--space-6`
  within a section.
- **Information hierarchy on a screen (top -> bottom):** what needs the user ->
  the primary action -> status/context. Demote vanity metrics to a quiet strip.

---

## 8. Motion

Subtle and fast, or absent. Motion confirms an action; it never performs.

- Interactive hovers (buttons, cards, rows): `--dur` on the specific property.
- Toggle / tab switches: `--dur-fast`.
- Modals/dropdowns appear with `--shadow-md/lg` + a `--dur` fade/scale.
- **Respect `prefers-reduced-motion: reduce`** — disable non-essential motion.
- Excessive or scattered animation reads as unfinished; when unsure, less.

---

## 9. Do / Don't (the amateur-vs-polished checklist)

| Don't | Do |
|---|---|
| Raw bulleted/`<ul>` lists with no spacing | Rows/cards on the spacing scale |
| `Title` touching `Priority 2` with no gap | `--space-2` between every label and tag |
| Red icon chips, red "view more" links | Neutral chips; red only per §3 |
| Decorative red chart/donut segments | Neutral tones; red only for at-risk |
| Tracker with done+current both red | Charcoal done · red current · gray future |
| Resting drop-shadows on every card | Border-defined cards; shadow on hover only |
| Mixed arbitrary pixel gaps | Spacing-scale tokens everywhere |
| Same visual weight for everything | Explicit type hierarchy (§5) |
| Full-width band for one trivial item | Size a region to its importance |
| Clever/marketing copy on controls | Plain verbs that name the outcome |

---

## 10. How to apply this

1. **This file is the contract.** Before any UI edit, read it. Derive every
   value from §2 tokens.
2. **Sequence:** land the token layer in `globals.css` -> rebuild the **Customer
   Portal dashboard** as the reference implementation -> then roll the same
   system across the other screens, one at a time.
3. **Reality check on the architecture:** the app renders via vanilla-JS string
   templates in `public/app.js`. This system gets it to genuinely clean and
   consistent. The last 10% of "premium" polish (rich micro-interactions,
   component-level consistency) is harder in string templates than in a
   component framework — a known ceiling, acceptable for a visioning prototype.
4. **When a screen still feels off after applying tokens:** it's almost always
   (a) a missing spacing token, (b) too much color, or (c) a flat type
   hierarchy — in that order. Fix those before adding anything.
