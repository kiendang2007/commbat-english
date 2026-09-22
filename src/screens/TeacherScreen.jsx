import { useState } from 'react'

function stageLabel(stage, materials) {
  const titles = materials
    .filter((m) => m.stage === stage)
    .sort((a, b) => a.material_id - b.material_id)
    .map((m) => m.title_vi)
    .join(' và ')
  return `Giai đoạn ${stage}: ${titles}`
}

export default function TeacherScreen({ materials }) {
  const [name, setName] = useState('')
  const [stage, setStage] = useState(1)
  const [link, setLink] = useState(null)
  const [copied, setCopied] = useState(false)
  const disabled = name.trim().length === 0

  function handleCreate() {
    if (disabled) return
    const trimmed = name.trim()
    const url = `${window.location.origin}?hv=${encodeURIComponent(trimmed)}&gd=${stage}`
    setLink(url)
    setCopied(false)
  }

  async function handleCopy() {
    if (!link) return
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  return (
    <main>
      <h1>Xếp giai đoạn</h1>
      <div className="name-form">
        <label htmlFor="teacher-name">Tên học viên</label>
        <input
          id="teacher-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="teacher-stage">Giai đoạn bắt đầu</label>
        <select
          id="teacher-stage"
          value={stage}
          onChange={(event) => setStage(Number(event.target.value))}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((s) => (
            <option key={s} value={s}>
              {stageLabel(s, materials)}
            </option>
          ))}
        </select>
        <button type="button" disabled={disabled} onClick={handleCreate}>
          Tạo đường link
        </button>
      </div>
      {link && (
        <div className="teacher-link">
          <p className="teacher-link-text" role="textbox" aria-readonly="true" tabIndex={0}>
            {link}
          </p>
          <button type="button" className="link-button" onClick={handleCopy}>
            {copied ? 'Đã sao chép' : 'Sao chép'}
          </button>
        </div>
      )}
    </main>
  )
}
