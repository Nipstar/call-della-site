import { MetadataRoute } from 'next';
import { PAGES } from '@/data/pages';
import { stateData, STATES_UPDATED } from '@/data/states';
import { caseData, CASES_UPDATED } from '@/data/cases';
import { SITE_URL } from '@/lib/config';

export const dynamic = 'force-static';

const url = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

// lastModified comes from each page's dateModified, never the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({ url: url(p.path), lastModified: p.dateModified, priority: p.priority ?? 0.6 })),
    ...stateData.map((s) => ({ url: url(`/states/${s.slug}`), lastModified: STATES_UPDATED, priority: 0.6 })),
    ...caseData.map((c) => ({ url: url(`/case-types/${c.slug}`), lastModified: CASES_UPDATED, priority: 0.6 })),
  ];
}
