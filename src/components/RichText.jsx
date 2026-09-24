// Content is plain text. The design sets a quoted English span, such as "The student reads a
// book quickly.", in bold so the learner sees exactly what the question is about.
export function QuotedBold({ text }) {
  if (!text) return null
  const parts = String(text).split(/("[^"\n]+")/g)
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  )
}

// A definition bullet starts with the name of its group, for example
// "sinh vật, tức là ..." or "kích thước: tall (cao) ...". The design sets that name in bold.
export function ListLine({ text }) {
  const line = String(text)
  const tucLa = line.indexOf(', tức là')
  if (tucLa > 0) {
    return (
      <>
        <strong>{line.slice(0, tucLa)}</strong>
        {line.slice(tucLa)}
      </>
    )
  }
  const colon = line.indexOf(': ')
  const label = colon > 0 ? line.slice(0, colon) : ''
  if (label && label.length <= 30 && !label.includes('.')) {
    return (
      <>
        <strong>{label}</strong>
        {line.slice(colon)}
      </>
    )
  }
  return line
}
