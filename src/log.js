const LOG_URL =
  'https://script.google.com/macros/s/AKfycbwIbRsJg6wygOmH0N0fXPfbT8GqEeTYVXNJs2tbytZ4lWUpBRnS1pPqfRUfEsWmLBvrxA/exec'

const SESSION_ID = Math.random().toString(36).slice(2)

let currentLearner = null
let currentStage = null

export function setLogContext(learner, stage) {
  currentLearner = learner
  currentStage = stage
}

export function log(event, fields) {
  try {
    const data = {
      learner: currentLearner,
      session: SESSION_ID,
      event,
      stage: currentStage,
      ...fields,
    }
    fetch(LOG_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
    }).catch(() => {})
  } catch {
    // ignore
  }
}
