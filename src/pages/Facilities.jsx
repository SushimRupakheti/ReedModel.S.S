import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, Placeholder } from '../components/ui.jsx'
import { FACILITIES } from '../data.js'

export default function Facilities() {
  usePageMeta('Facilities', 'Learning environment, teachers and activities at REED Model Secondary School.')
  return (
    <>
      <PageHeader title="Facilities" text="What makes learning at REED comfortable and engaging." />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map(([t, d]) => (
            <div key={t} className="card"><Placeholder label={t} /><h3 className="mt-3">{t}</h3><p className="m-0 text-slate-600">{d}</p></div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Only verified features are listed. Add photographs and further facilities once confirmed.</p>
      </Section>
    </>
  )
}
