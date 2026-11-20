import { useState } from 'react'
import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, NoticeItem } from '../components/ui.jsx'
import { NOTICES, NOTICE_CATEGORIES } from '../data.js'

export default function Notices() {
  usePageMeta('Notices', 'Latest notices and announcements from REED Model Secondary School.')
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? NOTICES : NOTICES.filter((n) => n.category === cat)
  return (
    <>
      <PageHeader title="Notices" text="Announcements for students and parents." />
      <Section>
        <p className="text-xs text-slate-500"><b>These are sample notices</b> showing the layout. They are not official announcements.</p>
        <div className="my-4 flex flex-wrap gap-2" role="group" aria-label="Filter notices">
          {['All', ...NOTICE_CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-full border px-4 py-1.5 text-sm ${cat === c ? 'border-navy bg-navy text-white' : 'border-line bg-white'}`}>{c}</button>
          ))}
        </div>
        {list.length ? list.map((n) => <NoticeItem key={n.id} n={n} />) : <p>No notices in this category yet.</p>}
      </Section>
    </>
  )
}
