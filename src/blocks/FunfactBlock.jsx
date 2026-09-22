export default function FunfactBlock({ block }) {
  return (
    <aside className="block funfact">
      {block.heading_vi && <p className="funfact-heading">{block.heading_vi}</p>}
      <p>{block.body_vi}</p>
    </aside>
  )
}
