import { materials, itemIdsFor } from './content.js'

export function isMaterialComplete(material, correct) {
  return itemIdsFor(material).every((id) => Boolean(correct[`${material.material_id}:${id}`]))
}

export function isStageComplete(stage, correct) {
  return materials.filter((m) => m.stage === stage).every((m) => isMaterialComplete(m, correct))
}

export function advanceStage(currentStage, correct) {
  let stage = currentStage
  while (stage <= 15 && isStageComplete(stage, correct)) {
    stage += 1
  }
  return stage
}
