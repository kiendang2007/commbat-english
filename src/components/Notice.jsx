import { useEffect, useRef } from 'react'

// The gentle message card shown when a learner taps something that is not open yet.
// It scrolls into view so a tap far down the trail is never silently ignored.
export default function Notice({ notice, onDismiss }) {
  const ref = useRef(null)

  useEffect(() => {
    if (notice && ref.current) {
      try {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } catch {
        ref.current.scrollIntoView()
      }
    }
  }, [notice])

  if (!notice) return null

  return (
    <div className="notice" ref={ref} role="alert">
      <p>{notice.text}</p>
      <button type="button" className="btn-secondary btn-small" onClick={onDismiss}>
        Đã hiểu
      </button>
    </div>
  )
}
