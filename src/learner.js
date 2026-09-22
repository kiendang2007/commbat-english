const STORAGE_KEY = 'commbat_learner'

export function loadLearner() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.name !== 'string' || typeof parsed.current_stage !== 'number') {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function saveLearner(learner) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(learner))
  } catch {
    // ignore
  }
}

export function clearLearner() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
