import { ListLine } from '../components/RichText.jsx'

export default function TextBlock({ block }) {
  return (
    <div className="block-text">
      <p>{block.body_vi}</p>
      {block.list && (
        <ul>
          {block.list.map((line, index) => (
            <li key={index}>
              <ListLine text={line} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
