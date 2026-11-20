import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, Placeholder } from '../components/ui.jsx'
import { STUDENT_LIFE } from '../data.js'

export default function StudentLife() {
  usePageMeta('Student Life', 'Sports, music, art, projects and personal development at REED Model Secondary School.')
  return (
    <>
      <PageHeader title="Student Life" text="Learning that goes beyond the classroom." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STUDENT_LIFE.map((t) => (
            <figure key={t} className="m-0">
              <Placeholder label={t} />
              <figcaption className="py-2"><b className="text-navy">{t}</b><br /><span className="text-xs text-slate-500">Replace with a real event photograph and caption.</span></figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  )
}
