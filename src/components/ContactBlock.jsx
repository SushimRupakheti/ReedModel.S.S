import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { SITE } from '../data.js'

export function ContactInfo() {
  const a = 'hover:underline text-brand'
  return (
    <address className="card space-y-4 border-0 p-6 not-italic shadow-[0_12px_35px_rgba(18,40,90,0.07)]">
      <div className="border-b border-line pb-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">School office</span>
        <h3 className="mb-0 mt-1 text-xl">{SITE.name}</h3>
      </div>
      <p className="m-0 flex gap-3 text-sm leading-6 text-slate-600"><MapPin size={18} className="mt-1 flex-none text-brand" aria-hidden="true" />{SITE.address}</p>
      {SITE.phones.map((p) => <p key={p} className="m-0 flex gap-3 text-sm"><Phone size={18} className="flex-none text-brand" aria-hidden="true" /><a className={a} href={`tel:${p.replace(/[^+\d]/g, '')}`}>{p}</a></p>)}
      <p className="m-0 flex gap-3 text-sm"><Mail size={18} className="flex-none text-brand" aria-hidden="true" /><a className={a} href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      <p className="m-0 flex gap-3 text-sm"><Globe size={18} className="flex-none text-brand" aria-hidden="true" /><a className={a} href={`http://${SITE.web}`}>{SITE.web}</a></p>
    </address>
  )
}

export function MapEmbed() {
  if (SITE.mapEmbedUrl) {
    return <iframe title="School location map" src={SITE.mapEmbedUrl} loading="lazy" className="h-64 w-full rounded-xl border border-line shadow-sm" />
  }
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white p-4 text-center text-sm text-slate-600 shadow-sm">
      <MapPin aria-hidden="true" />
      <span>Map placeholder. Integration point: set <code>mapEmbedUrl</code> in data.js.</span>
      <a className="text-brand underline" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`}>Search the school on Google Maps</a>
    </div>
  )
}
