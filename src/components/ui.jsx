import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'

export function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const styles = {
    primary: 'bg-brand text-white hover:bg-blue-700',
    accent: 'bg-accent text-white hover:bg-orange-700',
    outline: 'border-[1.5px] border-navy text-navy bg-white hover:bg-mist',
  }[variant]
  const cls = `inline-block rounded px-5 py-2.5 text-[15px] font-semibold transition-colors ${styles} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}

export function Section({ id, alt, className = '', children }) {
  return (
    <section id={id} className={`py-16 ${alt ? 'bg-mist' : ''} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  )
}

export function PageHeader({ title, text }) {
  return (
    <div className="bg-mist border-b-[3px] border-leaf py-9">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="text-slate-600">{text}</p>
      </div>
    </div>
  )
}

// Replace with <img src=... alt=... loading="lazy" /> once real photos exist.
export function Placeholder({ label, className = 'min-h-[170px]' }) {
  return (
    <div role="img" aria-label={`Placeholder image: ${label}`}
      className={`flex flex-col items-center justify-center gap-1 rounded-xl border border-line bg-gradient-to-br from-slate-100 to-mist p-3 text-center text-xs text-slate-500 ${className}`}>
      <Camera size={22} aria-hidden="true" />
      <span>Photo placeholder</span>
      <span>{label}</span>
    </div>
  )
}

export function IconCard({ icon: Icon, title, text, accent = 'border-leaf' }) {
  return (
    <div className={`card border-t-[3px] ${accent}`}>
      <Icon className="mb-2 text-navy" size={26} aria-hidden="true" />
      <h3>{title}</h3>
      {text && <p className="m-0 text-slate-600">{text}</p>}
    </div>
  )
}

export function NoticeItem({ n }) {
  return (
    <article className="mb-3 rounded-xl border border-orange-100 border-l-4 border-l-accent bg-orange-50/70 p-4 transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded bg-mist px-2 py-0.5 font-semibold text-navy">{n.category}</span>
        <span className="rounded bg-orange-100 px-2 py-0.5 font-semibold text-orange-800">Example</span>
        <span className="text-slate-500">{n.date}</span>
      </div>
      <h3 className="mt-2">{n.title}</h3>
      <p className="mb-2 text-slate-600">{n.summary}</p>
      {/* Integration point: link to the full notice page or PDF */}
      <Button variant="outline" className="!px-3 !py-1" onClick={() => alert('Integration point: link to the full notice here.')}>Read More</Button>
    </article>
  )
}
