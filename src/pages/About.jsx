import { Check, Lightbulb, BadgeCheck, Laptop } from 'lucide-react'
import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, Placeholder, IconCard } from '../components/ui.jsx'
import { OBJECTIVES } from '../data.js'

export default function About() {
  usePageMeta('About Us', 'About REED Model Secondary School: history, vision, mission, values and objectives.')
  return (
    <>
      <PageHeader title="About Us" text="Who we are and what we believe in." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2>About REED Model Secondary School</h2>
            <p>REED (Research in Educational Development) Model Secondary School was established in 1998 A.D. (2054 B.S.) as a private educational institution in Swoyambhu, Kathmandu, Nepal. The school is affiliated with the National Examinations Board (NEB) and approved by the Ministry of Education.</p>
            <p>The school is the result of the dedicated efforts of experienced, qualified and eminent education professionals and academic leaders. It is a co-educational institution focused on academic excellence, practical learning and the overall development of students.</p>
            <p>REED provides education from Nursery to Grade 12 in a welcoming and disciplined academic environment. With experienced teachers, suitable infrastructure and modern teaching methods, it aims to make learning engaging, practical and meaningful.</p>
            <p>Co-curricular and extracurricular activities help students develop creativity, confidence, teamwork and independent thinking.</p>
          </div>
          <img
            src="/welcome.png"
            alt="Welcome to REED Model Secondary School"
            className="min-h-[300px] w-full h-full rounded-xl object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </Section>
      <Section alt id="vision">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card border-t-[3px] border-navy"><h2>Our Vision</h2><p>To nurture creative, confident and responsible learners through quality education, practical experiences and an environment that encourages independent thinking.</p></div>
          <div className="card border-t-[3px] border-leaf"><h2>Our Mission</h2><p>To provide accessible, student-centred education that combines academic excellence, practical learning, discipline and extracurricular activities while supporting the individual potential of every student.</p></div>
        </div>
        <p className="mt-3 text-xs text-slate-500">Presented from the school's stated educational values. Replace with official statements if the school has them.</p>
      </Section>
      <Section id="values">
        <h2>Our Values</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <IconCard icon={Lightbulb} title="Practical education" text="Fosters creativity and independent learning." />
          <IconCard icon={BadgeCheck} title="Quality with attention" text="Quality-focused education with individual attention." />
          <IconCard icon={Laptop} title="Infrastructure and technology" text="Appropriate infrastructure and technology for effective teaching and learning." />
        </div>
        <h2 className="mt-10">Our Objectives</h2>
        <ul className="gap-x-9 md:columns-2">
          {OBJECTIVES.map((o) => <li key={o} className="flex gap-2 py-1.5"><Check className="mt-1 flex-none text-leaf" size={16} aria-hidden="true" />{o}</li>)}
        </ul>
      </Section>
    </>
  )
}
