import { useEffect, useId, useRef, useState } from 'react'
import { X } from 'lucide-react'

export default function ContactModal({ open, onClose, topic = '' }) {
  const titleId = useId()
  const firstField = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!open) {
      setSent(false)
      return undefined
    }
    const previous = document.activeElement
    const timer = window.setTimeout(() => firstField.current?.focus(), 40)
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKey)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="glass-panel modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close contact form">
          <X size={18} />
        </button>
        <p className="eyebrow">Bookings & inquiries</p>
        <h2 id={titleId}>Get in Touch</h2>
        {sent ? (
          <p className="success">
            Thanks — your message is ready on this device. We have not sent it to a server. Email it
            to the SNEHA PRO team to complete your inquiry.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input ref={firstField} name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Event or service
              <input name="topic" type="text" defaultValue={topic} />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
