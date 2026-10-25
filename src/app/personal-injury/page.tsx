import { VerticalLanderShell } from '@/components/VerticalLanderShell';
import { verticals } from '@/lib/verticals';
import { pageMeta } from '@/data/pages';

export const metadata = pageMeta('/personal-injury');

export default function PersonalInjuryPage() {
  return <VerticalLanderShell vertical={verticals['personal-injury']} />;
}
