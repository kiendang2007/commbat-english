import { useEffect, useState } from 'react'
import NameScreen from './screens/NameScreen.jsx'
import ListScreen from './screens/ListScreen.jsx'
import MaterialPage from './MaterialPage.jsx'
import { materials } from './content.js'
import { loadLastName, saveLastName, loadProgress, saveProgress } from './learner.js'
import { advanceStage, isMaterialComplete } from './progress.js'
import { log, setLogContext } from './log.js'

const BUILD_TIME = __BUILD_TIME__

function formatBuildTime(iso) {
  try {
    return new Date(iso).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
  } catch {
    return iso
  }
}

function nextMaterialFor(material) {
  const sameStage = materials
    .filter((m) => m.stage === material.stage)
    .sort((a, b) => a.material_id - b.material_id)
  const idx = sameStage.findIndex((m) => m.material_id === material.material_id)
  if (idx < sameStage.length - 1) return sameStage[idx + 1]

  const nextStageMaterials = materials
    .filter((m) => m.stage === material.stage + 1)
    .sort((a, b) => a.material_id - b.material_id)
  return nextStageMaterials[0] ?? null
}

export default function App() {
  const [learner, setLearner] = useState(null)
  const [screen, setScreen] = useState('name')
  const [currentMaterialId, setCurrentMaterialId] = useState(null)
  const [lockMessage, setLockMessage] = useState(null)

  useEffect(() => {
    const lastName = loadLastName()
    if (lastName) {
      const progress = loadProgress(lastName)
      setLearner({ name: lastName, ...progress })
      setScreen('list')
      setLogContext(lastName, progress.current_stage)
      log('open')
    }
  }, [])

  function handleStart(name) {
    const trimmed = name.trim()
    const progress = loadProgress(trimmed)
    saveLastName(trimmed)
    saveProgress(trimmed, progress)
    setLearner({ name: trimmed, ...progress })
    setCurrentMaterialId(null)
    setLockMessage(null)
    setScreen('list')
    setLogContext(trimmed, progress.current_stage)
    log('open')
  }

  function handleSwitchLearner() {
    setCurrentMaterialId(null)
    setLockMessage(null)
    setScreen('name')
  }

  function handleAnswerPick(materialId, itemId, choiceKey, isCorrect) {
    if (learner) {
      setLogContext(learner.name, learner.current_stage)
      log('answer', { material: materialId, item: itemId, choice: choiceKey, correct: isCorrect })
    }
    if (!isCorrect) return

    setLearner((prev) => {
      if (!prev) return prev
      const key = `${materialId}:${itemId}`
      if (prev.correct[key]) return prev
      const correct = { ...prev.correct, [key]: true }

      const material = materials.find((m) => m.material_id === materialId)
      const wasMaterialComplete = material ? isMaterialComplete(material, prev.correct) : false
      const isNowMaterialComplete = material ? isMaterialComplete(material, correct) : false

      const current_stage = advanceStage(prev.current_stage, correct)
      saveProgress(prev.name, { current_stage, correct })

      if (!wasMaterialComplete && isNowMaterialComplete) {
        setLogContext(prev.name, current_stage)
        log('material_done', { material: materialId })
      }
      if (current_stage > prev.current_stage) {
        setLogContext(prev.name, current_stage)
        log('stage_up', { stage: current_stage })
      }

      return { name: prev.name, current_stage, correct }
    })
  }

  function openMaterial(material) {
    if (!learner) return
    if (material.stage > learner.current_stage) {
      setLockMessage(
        `Giai đoạn này chưa mở. Hãy học xong Giai đoạn ${learner.current_stage} trước.`
      )
      setLogContext(learner.name, learner.current_stage)
      log('locked_click', { material: material.material_id })
      return
    }
    setLockMessage(null)
    setCurrentMaterialId(material.material_id)
    setScreen('material')
  }

  function backToList() {
    setLockMessage(null)
    setScreen('list')
  }

  const currentMaterial = materials.find((m) => m.material_id === currentMaterialId)

  return (
    <div className="page">
      {lockMessage && (
        <p className="lock-message" role="alert">
          {lockMessage}
        </p>
      )}
      {screen === 'name' && <NameScreen onStart={handleStart} />}
      {screen === 'list' && learner && (
        <ListScreen
          learner={learner}
          materials={materials}
          onOpenMaterial={openMaterial}
          onSwitchLearner={handleSwitchLearner}
        />
      )}
      {screen === 'material' && learner && currentMaterial && (
        <MaterialPage
          material={currentMaterial}
          onBack={backToList}
          nextMaterial={nextMaterialFor(currentMaterial)}
          onOpenMaterial={openMaterial}
          correct={learner.correct}
          onAnswerPick={handleAnswerPick}
        />
      )}
      <p className="stamp">Bản build lúc {formatBuildTime(BUILD_TIME)}</p>
    </div>
  )
}
