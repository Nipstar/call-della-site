import type { Metadata } from 'next';
import { VerticalLanderShell } from '@/components/VerticalLanderShell';
import { verticals } from '@/lib/verticals';
import { SITE_URL } from '@/lib/config';

const v = verticals['immigration'];

export const metadata: Metadata = {
  title: { absolute: v.meta.title },
  description: v.meta.description,
  keywords: v.meta.keywords,
  alternates: { canonical: `/${v.slug}` },
  openGraph: {
    title: v.meta.title,
    description: v.meta.description,
    images: [{ url: v.meta.ogImage, width: 1200, height: 630, alt: v.name }],
    type: 'website',
    url: `${SITE_URL}/${v.slug}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: v.meta.title,
    description: v.meta.description,
    images: [v.meta.ogImage],
  },
};

export default function ImmigrationPage() {
  return <VerticalLanderShell vertical={v} />;
}
