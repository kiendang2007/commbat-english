const materialModules = import.meta.glob('/content/materials/*.json', { eager: true })

export const materials = Object.values(materialModules)
  .map((mod) => mod.default ?? mod)
  .sort((a, b) => a.material_id - b.material_id)

export function itemIdsFor(material) {
  return material.blocks
    .filter((block) => block.type === 'item')
    .map((block) => block.item.id)
}
