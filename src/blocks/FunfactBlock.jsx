export default function FunfactBlock({ block }) {
  return (
    <aside className="funfact">
      <p className="funfact-heading">{block.heading_vi || 'Chuyện thú vị'}</p>
      <p>{block.body_vi}</p>
    </aside>
  )
}
