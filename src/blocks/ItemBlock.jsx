import { useState } from 'react'

export default function ItemBlock({ item, alreadyCorrect, onPick }) {
  const [status, setStatus] = useState('unanswered')
  const [chosenKey, setChosenKey] = useState(null)

  const chosenOption = item.options.find((option) => option.key === chosenKey)

  function pick(key) {
    setChosenKey(key)
    const isCorrect = key === item.answer
    setStatus(isCorrect ? 'correct' : 'wrong')
    onPick(key, isCorrect)
  }

  function retry() {
    setStatus('unanswered')
    setChosenKey(null)
  }

  return (
    <div className="block item">
      <p className="item-prompt">{item.prompt_vi}</p>

      {status === 'unanswered' && (
        <div className="item-options">
          {item.options.map((option) => (
            <button
              key={option.key}
              type="button"
              className="item-option"
              onClick={() => pick(option.key)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {status === 'wrong' && chosenOption && (
        <div className="item-feedback item-feedback-wrong">
          <p className="item-feedback-title">Sai</p>
          <p className="item-feedback-chosen">&quot;{chosenOption.text}&quot;</p>
          <p>{chosenOption.diagnosis_vi}</p>
          <p>{item.rule_vi}</p>
          <button type="button" className="item-retry" onClick={retry}>
            Thử lại
          </button>
        </div>
      )}

      {status === 'correct' && (
        <div className="item-feedback item-feedback-correct">
          <p className="item-feedback-title">Đúng</p>
          <p>{item.rule_vi}</p>
        </div>
      )}

      {alreadyCorrect && <p className="item-already-correct">Đã làm đúng</p>}
    </div>
  )
}
