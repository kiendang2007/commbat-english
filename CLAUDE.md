# Trika English

Formerly CommBat English. Storage keys keep the `commbat:` prefix so saved progress survives.

A Vietnamese-language website that teaches English grammar to Vietnamese beginners, one stage at
a time. Built for a university course, due 5 October 2026.

## Read first

- `SPEC.md` is the source of truth for what the product does. Read it before any change, and
  re-read it whenever it changes.
- `material-format.md` defines the content format: the block types and the item schema.
- `content/materials/*.json` is the content, sixteen files, one per material.
- `content/nodes.json` is the grammar node tree. Only `stage` and `in_v1` matter to the site.

## Hard rules

- React with Vite, **plain JavaScript, no TypeScript**. No router: one page, a `screen` value in
  state, screens chosen with a switch.
- No backend, no database, no login, no runtime API call except the one logging POST in SPEC 13.
- Load content with `import.meta.glob('/content/materials/*.json', { eager: true })` and sort by
  `material_id`. Never copy content into components.
- **Never edit anything in `content/`.** It is generated or authored elsewhere. If the content
  looks wrong, stop and say so.
- Never render a key that starts with `_`.
- Every word the learner sees is Vietnamese: labels, buttons, errors, empty states.
- No em dashes and no en dashes anywhere in user-facing text.
- Mobile first. It must work on a 5 inch phone over mobile data. Wide tables scroll sideways
  inside their own box; the page never scrolls sideways.
- Wrap every `localStorage` read and write in try/catch, and render correctly when it is empty.
- Print the build timestamp in small text at the bottom of every screen.
- Locked stages stay visible and clickable, and say which stage comes first. Never hide them.
- Never add scoring, levels, CEFR bands, or anything SPEC section 14 forbids.

## Design

- `Design System Mocha` from the Claude Design handoff is the palette and type system. Tokens
  live as CSS variables at the top of `src/styles.css`. Do not invent new colors.
- Green (correct) and coral (wrong) appear only in answer feedback, always with an icon and a word.
- Nunito for everything. Body text 17px, never smaller than 13px (build timestamp).
- Spacing scale 4, 8, 12, 16, 20, 28, 44. Radius 14 controls, 16 cards, 999 pills.
- Logo is option 7a, drawn by `src/components/Logo.jsx` from ratios of the tile size.
- Nothing is positioned absolutely; every screen is one flowing column.

## Working style

- Small steps. Build one thing, run it, show it, then stop.
- Commit after each working step with a short message. Pushing to `main` deploys to Vercel.
- If a request conflicts with `SPEC.md`, point out the conflict instead of guessing.
