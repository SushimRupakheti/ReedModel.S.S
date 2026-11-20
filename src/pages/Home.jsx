import { Link } from 'react-router-dom'
import { Building2, GraduationCap, ClipboardCheck, Users, UserCheck, Target, Wrench, Ruler, Award, Wallet, Palette, Sprout, Trophy, Music, Search } from 'lucide-react'
import { usePageMeta } from '../components/Layout.jsx'
import { Button, Section, Placeholder, IconCard, NoticeItem } from '../components/ui.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { ContactInfo, MapEmbed } from '../components/ContactBlock.jsx'
import { contactFields } from '../components/forms.js'
import { NOTICES } from '../data.js'

const quick = [
  [Building2, 'Established', '1998 A.D. (2054 B.S.)'],
  [GraduationCap, 'Education', 'Nursery to Grade 12'],
  [ClipboardCheck, 'Affiliation', 'National Examinations Board (NEB)'],
  [Users, 'Institution', 'Co-educational'],
]
const why = [
  [UserCheck, 'Experienced Teachers'], [Target, 'Student-Centred Learning'], [Wrench, 'Practical Education'], [Ruler, 'Academic Discipline'],
  [Award, 'Scholarships'], [Wallet, 'Affordable Fee Structure'], [Palette, 'Creative Activities'], [Sprout, 'Holistic Development'],
]

export default function Home() {
  usePageMeta('', 'REED Model Secondary School, Swoyambhu, Kathmandu. Co-educational education from Nursery to Grade 12, established 1998 A.D.')
  return (
    <>
      <section className="bg-gradient-to-br from-white via-white to-mist py-16 lg:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block rounded border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-sm font-semibold text-orange-800">Established in 1998 A.D.</span>
            <h1 className="!text-5xl md:!text-6xl">Shaping Minds, Building Futures</h1>
            <p className="my-3 max-w-xl text-slate-600">Welcome to REED Model Secondary School, where quality education, creativity, discipline and practical learning come together to prepare students for a brighter future.</p>
            <div className="flex flex-wrap gap-3"><Button to="/about">Explore Our School</Button><Button to="/admissions#enquiry" variant="accent">Admission Enquiry</Button></div>
          </div>
          <img src="/building_photo.png" alt="REED Model Secondary School building" className="min-h-[320px] w-full rounded-xl object-cover shadow-[0_18px_45px_rgba(18,40,90,0.10)]" />
        </div>
      </section>

      <Section alt className="!py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quick.map(([Icon, a, b]) => (
            <div key={a} className="card border-t-4 border-t-leaf text-center"><Icon className="mx-auto mb-2 text-navy" aria-hidden="true" /><span className="text-sm font-medium uppercase tracking-wide text-slate-500">{a}</span><b className="mt-1 block text-navy">{b}</b></div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="max-w-3xl">
            <h2>Welcome to REED</h2>
            <p>REED (Research in Educational Development) Model Secondary School is a private, co-educational school in Swoyambhu, Kathmandu. It was established in 1998 A.D. by experienced education professionals and focuses on academic excellence, practical learning and the overall development of students.</p>
            <Button to="/about">Learn More</Button>
            <div className="mt-5"><img src="/welcome.png" alt="Welcome to REED Model Secondary School" className="min-h-[170px] w-full rounded-xl border border-line object-cover" loading="lazy" /></div>
          </div>
          <div>
            <h2>Latest Notices</h2>
            {NOTICES.slice(0, 2).map((n) => <NoticeItem key={n.id} n={n} />)}
            <Link to="/notices" className="text-brand underline">View all notices</Link>
          </div>
        </div>
      </Section>

      <Section alt>
        <h2>Why Choose REED?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{why.map(([i, t]) => <IconCard key={t} icon={i} title={t} />)}</div>
      </Section>

      <Section>
        <h2>Academic Programmes</h2>
        <p className="mb-4 text-slate-600">Education from Nursery to Grade 12, including two +2 programmes.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            [Building2, 'School', '/about', '/school.png', 'REED school'],
            [GraduationCap, 'College', '/academics', '/college.png', 'REED college'],
          ].map(([I, t, to, image, alt]) => (
            <div key={t} className="card border-t-[3px] border-leaf">
              <img src={image} alt={alt} loading="lazy" className="h-[220px] w-full rounded-xl object-cover" />
              <h3 className="mt-3 flex items-center gap-2"><I size={20} aria-hidden="true" /> {t}</h3>
              <Button to={to} className="mt-2">Learn more</Button>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2>Our Learning Environment</h2>
        <p className="mb-4 text-slate-600">A spacious, peaceful and disciplined setting for learning and growing.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="/env1.jpg"
            alt="REED classroom"
            className="h-64 w-full rounded-xl object-cover shadow-md"
            loading="lazy"
          />
          <img
            src="/env2.jpg"
            alt="REED school grounds"
            className="h-64 w-full rounded-xl object-cover shadow-md"
            loading="lazy"
          />
          <img
            src="/env3.jpg"
            alt="REED students learning"
            className="h-64 w-full rounded-xl object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </Section>

      <Section>
        <h2>Student Development</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <IconCard icon={Trophy} title="Sports" accent="border-navy" /><IconCard icon={Music} title="Music and dance" accent="border-navy" />
          <IconCard icon={Palette} title="Art and craft" accent="border-navy" /><IconCard icon={Search} title="Research and projects" accent="border-navy" />
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg bg-navy p-8 text-white">
          <div><h2 className="!text-white">Scholarship and Admission</h2><p className="m-0">REED offers scholarships for deserving students and a moderate fee structure. Contact the school for details.</p></div>
          <Button to="/admissions#enquiry" variant="accent">Admission Enquiry</Button>
        </div>
      </Section>

      <Section alt className="!py-20">
        <div className="mb-8 max-w-2xl">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-brand">Get in touch</span>
          <h2 className="mb-2">Contact REED Model Secondary School</h2>
          <p className="m-0 text-slate-600">Have a question about admissions or school life? Reach our team or send us a message.</p>
        </div>
        <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <ContactInfo />
            <MapEmbed />
          </div>
          <div className="card border-0 p-6 shadow-[0_18px_50px_rgba(18,40,90,0.10)] sm:p-8">
            <h3 className="mb-1 text-xl">Send us a message</h3>
            <p className="mb-5 text-sm text-slate-600">Fill in the form and we’ll be happy to help.</p>
            <EnquiryForm fields={contactFields} submitLabel="Send Message" showIntegrationNote={false} />
          </div>
        </div>
      </Section>
    </>
  )
}
