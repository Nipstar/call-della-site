import { VerticalLanderShell } from '@/components/VerticalLanderShell';
import { verticals } from '@/lib/verticals';
import { pageMeta } from '@/data/pages';

export const metadata = pageMeta('/criminal-defense');

export default function CriminalDefensePage() {
  return <VerticalLanderShell vertical={verticals['criminal-defense']} />;
}
