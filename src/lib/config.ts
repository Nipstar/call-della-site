// Build-time public config. NEXT_PUBLIC_* vars get inlined into the
// client bundle by Next.js — set them in Coolify build environment or
// `.env.local` before `npm run build`. Fallbacks below match production.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://calldella.com';

export const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'calldella.com';

export const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ??
  'https://antekauto.app.n8n.cloud/webhook-test/call-della';

export const CALCOM_URL =
  process.env.NEXT_PUBLIC_CALCOM_URL ??
  'https://cal.com/antek-automation/30min-gmail';

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@calldella.com';
