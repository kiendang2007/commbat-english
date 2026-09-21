export default function TextBlock({ block }) {
  return (
    <div className="block block-text">
      <p>{block.body_vi}</p>
      {block.list && (
        <ul>
          {block.list.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
