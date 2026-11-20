import { Baby, BookOpen, Book, BookMarked, GraduationCap, FlaskConical, BarChart3, Target, Wrench, Lightbulb, Ruler, Repeat } from 'lucide-react'
import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, IconCard, Button } from '../components/ui.jsx'

const levels = [[Baby, 'Early Childhood Development (ECD)'], [BookOpen, 'Primary Level'], [Book, 'Lower Secondary Level'], [BookMarked, 'Secondary Level'], [GraduationCap, 'Grade 11 and Grade 12']]
const approach = [[Target, 'Student-centred teaching'], [Wrench, 'Practical and project-based learning'], [Lightbulb, 'Research and creativity'], [Ruler, 'Academic discipline'], [Repeat, 'Continuous learning and development']]

function Programme({ id, icon: I, name, text, image, alt }) {
  return (
    <div id={id} className="card border-t-[3px] border-leaf">
      <img src={image} alt={alt} loading="lazy" className="h-[220px] w-full rounded-xl object-cover" />
      <h3 className="mt-3 flex items-center gap-2"><I size={20} aria-hidden="true" /> {name}</h3>
      <p>{text}</p>
      <Button to="/admissions#enquiry">Enquire Now</Button>
    </div>
  )
}

export default function Academics() {
  usePageMeta('Academics', 'Educational levels at REED Model Secondary School, including +2 Science and +2 Management.')
  return (
    <>
      <PageHeader title="Academics" text="Education from Nursery to Grade 12." />
      <Section>
        <h2>Educational Levels</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{levels.map(([i, t]) => <IconCard key={t} icon={i} title={t} accent="border-navy" />)}</div>
        <p className="mt-3 text-xs text-slate-500">Subject lists and results are not shown. Add them once confirmed by the school.</p>
      </Section>
      <Section alt>
        <h2>Grade 11 and 12 Programmes</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Programme id="science" icon={FlaskConical} name="Ten Plus Two (+2) Science" text="A science stream for students in Grade 11 and 12. Contact the school for programme details." image="/science.png" alt="Science programme at REED" />
          <Programme id="management" icon={BarChart3} name="Ten Plus Two (+2) Management" text="A management stream for students in Grade 11 and 12. Contact the school for programme details." image="/management.png" alt="Management programme at REED" />
        </div>
      </Section>
      <Section>
        <h2>Our Approach to Learning</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{approach.map(([i, t]) => <IconCard key={t} icon={i} title={t} />)}</div>
      </Section>
    </>
  )
}
