// The only icons in the product: check, cross, lock. Each means one specific thing.

export function CheckStroke({ size = 22, color = '#FFFFFF', width = 2.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M4.4 9.4l3 3 6.2-6.2"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckCircle({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true" style={{ flex: 'none' }}>
      <circle cx="9" cy="9" r="8" fill="#2E9E57" />
      <path
        d="M5.2 9.3l2.4 2.4 5-5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CrossCircle({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true" style={{ flex: 'none' }}>
      <circle cx="9" cy="9" r="8" fill="#E0836B" />
      <path
        d="M6.2 6.2l5.6 5.6M11.8 6.2l-5.6 5.6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LockIcon() {
  return (
    <span className="lock-icon" aria-hidden="true">
      <span className="shackle" />
      <span className="body" />
    </span>
  )
}
