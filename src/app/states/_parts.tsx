// Passage and source-line blocks shared by the state and case-type guides.
import type { Citation } from '@/lib/schema';

type Section = { lead: string; body: string[]; src: Citation[] };

export const SourceLine = ({ src }: { src: Citation[] }) =>
  src.length ? (
    <p className="!text-[14px] !text-[var(--ink-soft)]">
      {src.length > 1 ? 'Sources: ' : 'Source: '}
      {src.map((c, i) => (
        <span key={c.url}>
          {i > 0 && '; '}
          <a href={c.url}>{c.name}</a>
          {c.publisher ? `, ${c.publisher}` : ''}
          {c.year ? ` (${c.year})` : ''}
        </span>
      ))}
    </p>
  ) : null;

// Body strings are our own static copy; a few carry internal links, so they render as HTML.
export const Passage = ({ heading, s }: { heading: string; s: Section }) => (
  <>
    <h2>{heading}</h2>
    <p>
      <strong>{s.lead}</strong> <span dangerouslySetInnerHTML={{ __html: s.body[0] }} />
    </p>
    {s.body.slice(1).map((b) => (
      <p key={b.slice(0, 32)} dangerouslySetInnerHTML={{ __html: b }} />
    ))}
    <SourceLine src={s.src} />
  </>
);
