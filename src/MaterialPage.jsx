import TextBlock from './blocks/TextBlock.jsx'
import SectionBlock from './blocks/SectionBlock.jsx'
import FunfactBlock from './blocks/FunfactBlock.jsx'
import ItemBlock from './blocks/ItemBlock.jsx'

export default function MaterialPage({ material }) {
  return (
    <main>
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
            return <ItemBlock key={index} item={block.item} />
          default:
            return null
        }
      })}
    </main>
  )
}
