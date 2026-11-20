import { useState } from 'react'

// Reusable validated form. Pass a `fields` config. Not connected to a server.
export default function EnquiryForm({ fields, submitLabel, showIntegrationNote = true }) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'ok' | 'error'

  function validate(data) {
    const e = {}
    for (const f of fields) {
      const v = (data[f.id] || '').trim()
      if (f.required && !v) e[f.id] = 'This field is required.'
      else if (v && f.type === 'email' && !/^\S+@\S+\.\S+$/.test(v)) e[f.id] = 'Enter a valid email address.'
      else if (v && f.type === 'tel' && !/^[0-9+\-\s]{7,16}$/.test(v)) e[f.id] = 'Enter a valid phone number.'
    }
    return e
  }

  function onSubmit(ev) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const e = validate(data)
    setErrors(e)
    if (Object.keys(e).length) {
      setStatus('error')
      setTimeout(() => form.querySelector('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    // INTEGRATION POINT: send `data` to your backend, email service or form provider here.
    console.log('Form data (not sent anywhere):', data)
    setStatus('ok')
    form.reset()
  }

  const input = 'w-full rounded border border-slate-300 bg-white p-2.5 text-slate-800'
  return (
    <form onSubmit={onSubmit} noValidate>
      {fields.map((f) => (
        <div key={f.id} className="mt-3">
          <label htmlFor={f.id} className="mb-1 block text-sm font-medium">{f.label}{f.required && ' *'}</label>
          {f.options ? (
            <select id={f.id} name={f.id} className={input} aria-invalid={!!errors[f.id]}>
              <option value="">Select…</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : f.rows ? (
            <textarea id={f.id} name={f.id} rows={f.rows} className={input} aria-invalid={!!errors[f.id]} />
          ) : (
            <input id={f.id} name={f.id} type={f.type || 'text'} className={input} aria-invalid={!!errors[f.id]} />
          )}
          {errors[f.id] && <p className="mt-1 text-xs text-red-700">{errors[f.id]}</p>}
        </div>
      ))}
      <button type="submit" className="mt-4 rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">{submitLabel}</button>
      <div role="status" aria-live="polite">
        {status === 'ok' && <p className="mt-3 rounded border border-green-300 bg-green-50 p-3 text-sm text-green-900">Thank you. Your details passed validation. This form is not connected to a server yet, so nothing has been sent.</p>}
        {status === 'error' && <p className="mt-3 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-900">Please fix the highlighted fields and try again.</p>}
      </div>
      {showIntegrationNote && <p className="mt-2 text-xs text-slate-500">Integration point: connect this form to email or a backend API in EnquiryForm.jsx.</p>}
    </form>
  )
}
