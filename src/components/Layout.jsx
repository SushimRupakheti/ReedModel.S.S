import { useEffect, useState } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { MapPin, Mail, Phone, Menu, X, ChevronDown, ArrowUp, Facebook, Globe } from 'lucide-react'
import { SITE, NAV } from '../data.js'
import { Button } from './ui.jsx'

// Sets the page title and meta description for SEO. Call from each page.
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name}, Kathmandu`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Logo({ size = 52 }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span style={{ width: size, height: size }} title="Add the logo at public/logo.png"
        className="grid flex-none place-items-center rounded-full border-2 border-dashed border-leaf text-center text-[10px] leading-tight text-leaf">
        LOGO<br />here
      </span>
    )
  }
  // Place the official logo at public/logo.png. Do not recolour or distort it.
  return <img src="/logo.png" alt={`${SITE.name} logo`} style={{ height: size }} className="w-auto flex-none" onError={() => setFailed(true)} />
}

function SocialLinks() {
  return SITE.social.map((s) => (
    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="inline-flex items-center gap-1 hover:underline">
      <Facebook size={14} aria-hidden="true" /> {s.name}
    </a>
  ))
}

const tel = (p) => `tel:${p.replace(/[^+\d]/g, '')}`

function TopBar() {
  return (
    <div className="bg-navy text-sm text-blue-100">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-5 gap-y-1 py-1.5">
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1"><MapPin size={14} aria-hidden="true" /> {SITE.shortAddress}</span>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1 hover:underline"><Mail size={14} aria-hidden="true" /> {SITE.email}</a>
          <a href={tel(SITE.phones[0])} className="inline-flex items-center gap-1 hover:underline"><Phone size={14} aria-hidden="true" /> {SITE.phones[0]}</a>
        </div>
        <div className="flex gap-3"><SocialLinks /></div>
      </div>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  const link = ({ isActive }) => `block px-3 py-2.5 text-[15px] font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-slate-800'}`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <div className="wrap flex min-h-[78px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <Logo />
          <span>
            <span className="block text-[15px] font-bold uppercase leading-tight text-navy">{SITE.name}</span>
            <span className="text-xs font-medium text-leaf">{SITE.subtitle}</span>
          </span>
        </Link>

        <nav aria-label="Main" className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full max-h-[75vh] overflow-auto border-b border-line bg-white lg:static lg:block lg:max-h-none lg:overflow-visible lg:border-0`}>
          <ul className="flex flex-col px-5 py-2 lg:flex-row lg:items-center lg:p-0">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <NavLink to={item.to} end className={link}>
                  <span className="inline-flex items-center gap-1">{item.label}{item.children && <ChevronDown size={14} aria-hidden="true" className="hidden lg:inline" />}</span>
                </NavLink>
                {item.children && (
                  <ul className="pl-4 lg:absolute lg:left-0 lg:top-full lg:hidden lg:min-w-[190px] lg:rounded-md lg:border lg:border-line lg:bg-white lg:py-1.5 lg:pl-0 lg:shadow-lg lg:group-focus-within:block lg:group-hover:block">
                    {item.children.map((c) => (
                      <li key={c.to}><Link to={c.to} className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-mist hover:text-brand">{c.label}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-2 lg:hidden"><Button to="/admissions#enquiry" variant="accent">Apply for Admission</Button></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/admissions#enquiry" variant="accent" className="hidden lg:inline-block">Apply for Admission</Button>
          <button className="rounded border-[1.5px] border-navy p-2 text-navy lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const col = 'block py-0.5 text-blue-100 hover:text-white hover:underline'
  return (
    <footer className="bg-navy pt-14 text-sm text-blue-100">
      <div className="wrap">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-3"><Logo size={44} /><b className="text-white">{SITE.name}</b></div>
            <p>A co-educational school in Swoyambhu, Kathmandu, offering education from Nursery to Grade 12 since 1998 A.D.</p>
          </div>
          <div>
            <h3 className="!text-white text-base">Quick Links</h3>
            {NAV.filter((n) => n.to !== '/').map((n) => <Link key={n.to} to={n.to} className={col}>{n.label}</Link>)}
          </div>
          <div>
            <h3 className="!text-white text-base">Programmes</h3>
            <Link to="/academics" className={col}>Nursery to Grade 10</Link>
            <Link to="/academics#science" className={col}>+2 Science</Link>
            <Link to="/academics#management" className={col}>+2 Management</Link>
          </div>
          <div>
            <h3 className="!text-white text-base">Contact</h3>
            <p className="mb-1">{SITE.address}</p>
            {SITE.phones.map((p) => <a key={p} href={tel(p)} className={col}>{p}</a>)}
            <a href={`mailto:${SITE.email}`} className={col}>{SITE.email}</a>
            <a href={`http://${SITE.web}`} className={`${col} inline-flex items-center gap-1`}><Globe size={14} aria-hidden="true" /> {SITE.web}</a>
            <div className="mt-2 flex gap-3"><SocialLinks /></div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 py-4">
          <span>© 2026 REED Model Secondary School. All Rights Reserved.</span>
          <button onClick={() => window.scrollTo({ top: 0 })} className="inline-flex items-center gap-1 rounded bg-white px-3 py-1.5 text-xs font-semibold text-navy"><ArrowUp size={14} aria-hidden="true" /> Back to Top</button>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <ScrollManager />
      <TopBar />
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}
