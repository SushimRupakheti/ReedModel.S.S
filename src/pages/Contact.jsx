import { usePageMeta } from '../components/Layout.jsx'
import { Section, PageHeader } from '../components/ui.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { ContactInfo, MapEmbed } from '../components/ContactBlock.jsx'
import { contactFields } from '../components/forms.js'

export default function Contact() {
  usePageMeta('Contact Us', 'Address, phone, email and contact form for REED Model Secondary School, Swoyambhu, Kathmandu.')
  return (
    <>
      <PageHeader title="Contact Us" text="We are happy to help parents and visitors." />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5"><ContactInfo /><MapEmbed /></div>
          <div className="card border-t-[3px] border-navy"><h2>Send us a message</h2><EnquiryForm fields={contactFields} submitLabel="Send Message" /></div>
        </div>
      </Section>
    </>
  )
}
