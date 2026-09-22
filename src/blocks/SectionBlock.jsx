export default function SectionBlock({ block }) {
  return (
    <section className="block block-section">
      <h2>{block.heading_vi}</h2>
      {block.body_vi && <p>{block.body_vi}</p>}
      {block.table && (
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                {block.table.columns_vi.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
