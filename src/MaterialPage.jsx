import TextBlock from './blocks/TextBlock.jsx'
import SectionBlock from './blocks/SectionBlock.jsx'
import FunfactBlock from './blocks/FunfactBlock.jsx'
import ItemBlock from './blocks/ItemBlock.jsx'

export default function MaterialPage({
  material,
  onBack,
  nextMaterial,
  onOpenMaterial,
  correct,
  onAnswerPick,
}) {
  return (
    <main>
      <button type="button" className="link-button" onClick={onBack}>
        Về danh sách
      </button>
      <h1>{material.title_vi}</h1>
      {material.blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={index} block={block} />
          case 'section':
            return <SectionBlock key={index} block={block} />
          case 'funfact':
            return <FunfactBlock key={index} block={block} />
          case 'item':
            return (
              <ItemBlock
                key={index}
                item={block.item}
                alreadyCorrect={Boolean(correct[`${material.material_id}:${block.item.id}`])}
                onPick={(choiceKey, isCorrect) =>
                  onAnswerPick(material.material_id, block.item.id, choiceKey, isCorrect)
                }
              />
            )
          default:
            return null
        }
      })}
      {nextMaterial && (
        <button
          type="button"
          className="next-button"
          onClick={() => onOpenMaterial(nextMaterial)}
        >
          Bước tiếp theo: {nextMaterial.title_vi}
        </button>
      )}
    </main>
  )
}
