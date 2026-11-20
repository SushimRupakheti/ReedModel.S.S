import { LEVELS } from '../data.js'

export const admissionFields = [
  { id: 'studentName', label: "Student's full name", required: true },
  { id: 'guardianName', label: "Parent or guardian's name", required: true },
  { id: 'phone', label: 'Contact number', type: 'tel', required: true },
  { id: 'email', label: 'Email address', type: 'email' },
  { id: 'grade', label: 'Grade or programme of interest', options: LEVELS, required: true },
  { id: 'message', label: 'Message', rows: 4 },
]

export const contactFields = [
  { id: 'name', label: 'Name', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'phone', label: 'Phone number', type: 'tel' },
  { id: 'subject', label: 'Subject', required: true },
  { id: 'message', label: 'Message', rows: 4, required: true },
]
