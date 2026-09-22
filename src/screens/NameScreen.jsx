import { useState } from 'react'

export default function NameScreen({ onStart }) {
  const [name, setName] = useState('')
  const disabled = name.trim().length === 0

  function handleSubmit(event) {
    event.preventDefault()
    if (disabled) return
    onStart(name.trim())
  }

  return (
    <main>
      <h1>CommBat English</h1>
      <form className="name-form" onSubmit={handleSubmit}>
        <label htmlFor="learner-name">Tên người học</label>
        <input
          id="learner-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" disabled={disabled}>
          Bắt đầu
        </button>
      </form>
    </main>
  )
}
