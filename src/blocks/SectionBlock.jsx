import { useEffect, useRef, useState } from 'react'

const COUNT_WORDS = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười']

// A table that scrolls sideways inside its own box. The hint appears only when it overflows.
function ScrollTable({ table }) {
  const scrollRef = useRef(null)
  const [overflows, setOverflows] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined
    const measure = () => setOverflows(el.scrollWidth > el.clientWidth + 1)
    measure()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const columnCount = table.columns_vi.length

  return (
    <div className="table-block">
      <div className="table-box">
        <div
          className="table-scroll"
          ref={scrollRef}
          tabIndex={overflows ? 0 : undefined}
          role={overflows ? 'region' : undefined}
          aria-label={overflows ? 'Bảng cuộn ngang' : undefined}
        >
          <table>
            <thead>
              <tr>
                {table.columns_vi.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {overflows && (
        <p className="scroll-hint">
          <span>
            Vuốt ngang trong bảng để xem hết {COUNT_WORDS[columnCount] || columnCount} cột
          </span>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </p>
      )}
    </div>
  )
}

export default function SectionBlock({ block }) {
  return (
    <section className="block-section">
      <h2>{block.heading_vi}</h2>
      {block.body_vi && <p>{block.body_vi}</p>}
      {block.table && <ScrollTable table={block.table} />}
    </section>
  )
}
