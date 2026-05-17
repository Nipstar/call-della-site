import { MetadataRoute } from 'next';
import { verticalList } from '@/lib/verticals';
import { stateData } from '@/data/states';
import { caseData } from '@/data/cases';

export const dynamic = 'force-static';

const BASE = 'https://calldella.com';

const compliancePosts = [
  'aba-formal-opinion-512-explained',
  'attorney-client-privilege-ai-intake',
  'hipaa-at-intake-phi',
];

const operationsPosts = [
  'after-hours-intake-comparison',
  'cost-per-signed-case-calculator',
  'missed-call-cost-calculator',
];

const intakePlaybookPosts = [
  'how-to-write-pi-intake-script',
  'intake-red-flags-declining-cases',
  'what-should-be-on-a-pi-intake-form',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const brand: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/security`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const verticals: MetadataRoute.Sitemap = verticalList.map((v) => ({
    url: `${BASE}/${v.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const hubs: MetadataRoute.Sitemap = [
    'compliance',
    'operations',
    'intake-playbook',
    'states',
    'case-types',
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const states: MetadataRoute.Sitemap = stateData.map((s) => ({
    url: `${BASE}/states/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cases: MetadataRoute.Sitemap = caseData.map((c) => ({
    url: `${BASE}/case-types/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cluster: MetadataRoute.Sitemap = [
    ...compliancePosts.map((p) => `${BASE}/compliance/${p}`),
    ...operationsPosts.map((p) => `${BASE}/operations/${p}`),
    ...intakePlaybookPosts.map((p) => `${BASE}/intake-playbook/${p}`),
  ].map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const legal: MetadataRoute.Sitemap = [`${BASE}/privacy`, `${BASE}/terms`].map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...brand, ...verticals, ...hubs, ...states, ...cases, ...cluster, ...legal];
}
