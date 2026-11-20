// Central place for school content. Edit here, not in the pages.
export const SITE = {
  name: 'REED Model Secondary School',
  subtitle: 'Research in Educational Development',
  address: 'Nagarjun-2, Swoyambhu, Kathmandu, Nepal',
  shortAddress: 'Swoyambhu, Kathmandu, Nepal',
  email: 'info@reedschool.edu.np',
  phones: ['+977-1-4890465', '+977-1-4890499'],
  web: 'www.reedschool.edu.np',
  social: [{ name: 'Facebook', url: 'https://www.facebook.com/reedmodelschoolnp' }], // TODO: add official social media URLs
  mapQuery:  'REED Model Secondary School, Thulobharyang, Swoyambhu, Kathmandu, Nepal',
  // Optional: paste the Google Maps embed URL (src of the iframe) here
  mapEmbedUrl: 'https://www.google.com/maps?q=27.7217587,85.2829705&output=embed',
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about', children: [
    { label: 'About REED', to: '/about' },
    { label: 'Vision & Mission', to: '/about#vision' },
    { label: 'Values & Objectives', to: '/about#values' } ] },
  { label: 'Academics', to: '/academics', children: [
    { label: 'All Levels', to: '/academics' },
    { label: '+2 Science', to: '/academics#science' },
    { label: '+2 Management', to: '/academics#management' } ] },
  { label: 'Admissions', to: '/admissions', children: [
    { label: 'Admission Process', to: '/admissions' },
    { label: 'Enquiry Form', to: '/admissions#enquiry' },
    { label: 'FAQs', to: '/admissions#faq' } ] },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Notices', to: '/notices' },
  { label: 'Contact', to: '/contact' },
]

export const LEVELS = ['Nursery – ECD', 'Primary', 'Lower Secondary', 'Secondary', '+2 Science', '+2 Management']

// SAMPLE notices only. Replace with real notices (or load from an API/CMS).
export const NOTICE_CATEGORIES = ['General Notices', 'Admissions', 'Examinations', 'Events', 'Holidays']
export const NOTICES = [
  { id: 1, title: 'Admission enquiries open', category: 'Admissions', date: '2023-09-01', summary: 'We are currently accepting admission enquiries for the upcoming academic year.' },
  { id: 2, title: 'Examination schedule released', category: 'Examinations', date: '2023-09-01', summary: 'The examination schedule for the current term has been published.' },
  { id: 3, title: 'School event announced', category: 'Events', date: '2023-09-01', summary: 'An exciting event is planned for the upcoming week.' },
  { id: 4, title: 'Holiday information', category: 'Holidays', date: '2023-09-01', summary: 'Information about the upcoming holidays has been shared.' },
  { id: 5, title: 'General information for parents and students', category: 'General Notices', date: '2023-09-01', summary: 'Important information for all parents and students.' },
]
export const FAQS = [
  ['Which classes are available?', 'Nursery to Grade 12, including +2 Science and +2 Management.'],
  ['Does REED offer scholarships?', 'Yes, for deserving students. Please contact the school for details.'],
  ['What are the fees?', 'REED has a moderate fee structure. Please contact the school office for current fee details.'],
  ['How do I apply?', 'Send an enquiry through the form or call +977-1-4890465.'],
]

export const OBJECTIVES = [
  'Encourage academic and practical excellence through innovative teaching.',
  'Support all-round development through curricular and extracurricular activities.',
  'Promote learning by doing.',
  'Develop discipline, confidence, strong character and personality.',
  'Nurture creativity through balanced education.',
  'Provide accessible, flexible and innovative learning opportunities.',
  'Create a supportive environment where students are cared for and encouraged.',
  'Promote research-oriented and value-based skills.',
  'Understand community needs and encourage positive social values.',
]

export const FACILITIES = [
  ['Spacious and peaceful environment', 'A calm setting that supports learning.'],
  ['Qualified and experienced teachers', 'Teachers who guide students with care.'],
  ['Student-centred classrooms', 'Teaching built around the learner.'],
  ['Project-based learning', 'Research-oriented, hands-on work.'],
  ['Music and dance', 'Creative expression through performance.'],
  ['Art and craft', 'Skills and imagination through making.'],
  ['Sports and physical activities', 'Exercise, teamwork and fitness.'],
  ['Co-curricular programmes', 'Activities beyond the classroom.'],
  ['Scholarship opportunities', 'Support for deserving students.'],
]

export const STUDENT_LIFE = [
  'Sports and physical activities', 'Music and dance', 'Art and creativity',
  'Project work and practical learning', 'Cultural and educational activities', 'Discipline and personal development',
]
