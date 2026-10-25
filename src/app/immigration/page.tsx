import { VerticalLanderShell } from '@/components/VerticalLanderShell';
import { verticals } from '@/lib/verticals';
import { pageMeta } from '@/data/pages';

export const metadata = pageMeta('/immigration');

export default function ImmigrationPage() {
  return <VerticalLanderShell vertical={verticals['immigration']} />;
}
