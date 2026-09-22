import { useEffect, useState } from 'react'
import NameScreen from './screens/NameScreen.jsx'
import ListScreen from './screens/ListScreen.jsx'
import MaterialPage from './MaterialPage.jsx'
import { materials } from './content.js'
import { loadLearner, saveLearner, clearLearner } from './learner.js'

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
    const saved = loadLearner()
    if (saved) {
      setLearner(saved)
      setScreen('list')
    }
  }, [])

  function handleStart(name) {
    const newLearner = { name, current_stage: 1 }
    saveLearner(newLearner)
    setLearner(newLearner)
    setScreen('list')
  }

  function handleSwitchLearner() {
    clearLearner()
    setLearner(null)
    setCurrentMaterialId(null)
    setLockMessage(null)
    setScreen('name')
  }

  function openMaterial(material) {
    if (!learner) return
    if (material.stage > learner.current_stage) {
      setLockMessage(
        `Giai đoạn này chưa mở. Hãy học xong Giai đoạn ${learner.current_stage} trước.`
      )
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
        />
      )}
      <p className="stamp">Bản build lúc {formatBuildTime(BUILD_TIME)}</p>
    </div>
  )
}
