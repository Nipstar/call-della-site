# BUILD.md — Updates for Call Della rebrand

The platform `BUILD.md` was written when the working name was "AfterHours." Now that the product is **Call Della** with the agent persona **Della**, apply these find-and-replace updates before handing it to Claude Code.

---

## Find and replace

| Find | Replace |
|---|---|
| `AfterHours` | `Call Della` |
| `AfterHours platform` | `Call Della platform` |
| `Chloe` | `Della` |
| `app.afterhours.legal` | `app.calldella.com` |
| `afterhours.legal` | `calldella.com` |

---

## Specific updates beyond find-and-replace

### Section 5.4 — naming conventions
Add this row to the conventions table:

| Thing | Name |
|---|---|
| The agent persona name in code | `agentDisplayName` (default value: `"Della"`, customisable per workspace) |

The `workspaces` table column `agent_display_name` already exists in the schema (Section 4.2). Default it to `"Della"`. Some workspaces may eventually want to brand their agent differently (e.g., Bennett Injury Attorneys may want their agent called "Sophia"), but the platform default and the marketing brand is Della.

### Section 9 pricing tier names
Change the plan tier names from:
- ~~Starter / Professional / Enterprise~~
- → **Standard / Practice / Group**

Update the `plan_tier` enum in the Drizzle schema accordingly:
```ts
plan_tier: pgEnum('plan_tier', ['standard', 'practice', 'group'])
```

And update the `PLANS` mock data:
```ts
const PLANS = [
  { name: 'Standard', price: 149, minutes: 150, ... },
  { name: 'Practice', price: 249, minutes: 300, ... },
  { name: 'Group', price: 599, minutes: 1000, ... },
];
```

### Section 8 — environment variables
Update the env var references:
```
BETTER_AUTH_URL=https://app.calldella.com
STRIPE_PRICE_STANDARD=price_...
STRIPE_PRICE_PRACTICE=price_...
STRIPE_PRICE_GROUP=price_...
```

### Section 10 — definition of done
Update the production URL reference:
- All of the above works on production at `app.calldella.com`.

---

## Final state of files in your repo

After these updates, your build kit is:

```
afterhours/  ← rename this directory to calldella/
├── BUILD.md              (platform build spec, post-rebrand)
├── DELLA_BRAND.md        (brand identity)
├── LANDING_BUILD.md      (landing page build spec)
└── portal-dossier.jsx    (visual reference prototype)
```

Two separate Next.js projects to spin up:
- `calldella-marketing/` — the landing page on `calldella.com`
- `calldella-platform/` — the portal on `app.calldella.com`

Don't try to share a monorepo at v1. Two clean projects, two clean deploys, both on the same Coolify VPS, both behind Cloudflare.
