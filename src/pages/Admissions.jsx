import { Check } from 'lucide-react'
import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader, Button } from '../components/ui.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { admissionFields } from '../components/forms.js'
import { LEVELS, FAQS } from '../data.js'

export default function Admissions() {
  usePageMeta('Admissions', 'Admission information and enquiry form for REED Model Secondary School, Kathmandu.')
  return (
    <>
      <PageHeader title="Admissions" text="Information for parents and prospective students." />
      <Section className="!pb-0">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-navy p-8 text-white">
          <div><h2 className="!text-white">Welcome to REED</h2><p className="m-0">We welcome students from Nursery to Grade 12.</p></div>
          <Button to="/admissions#enquiry" variant="accent">Send an enquiry</Button>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2>Admission Process</h2>
            <p>To begin, send an enquiry using the form. The school office will contact you with the current admission steps, required documents and dates. Specific requirements and deadlines are not listed here; please confirm them with the school.</p>
            <h3>Available levels</h3>
            <ul>{LEVELS.map((l) => <li key={l} className="flex gap-2 py-1"><Check size={16} className="mt-1 text-leaf" aria-hidden="true" />{l}</li>)}</ul>
            <h3 className="mt-5">Scholarships</h3>
            <p>REED provides scholarships for deserving students and has a moderate fee structure. Contact the school for details about scholarships and fees.</p>
          </div>
          <div id="enquiry" className="card border-t-[3px] border-navy">
            <h2>Admission Enquiry</h2>
            <EnquiryForm fields={admissionFields} submitLabel="Submit Enquiry" />
          </div>
        </div>
      </Section>
      <Section alt id="faq">
        <h2>Frequently Asked Questions</h2>
        {FAQS.map(([q, a]) => (
          <details key={q} className="mb-2.5 rounded-md border border-line bg-white px-4 py-3">
            <summary className="cursor-pointer font-semibold text-navy">{q}</summary>
            <p className="mb-0 mt-2">{a}</p>
          </details>
        ))}
      </Section>
    </>
  )
}
