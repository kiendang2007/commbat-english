import MaterialPage from './MaterialPage.jsx'

const BUILD_TIME = __BUILD_TIME__

const materialModules = import.meta.glob('/content/materials/*.json', { eager: true })
const materials = Object.values(materialModules)
  .map((mod) => mod.default ?? mod)
  .sort((a, b) => a.material_id - b.material_id)

function formatBuildTime(iso) {
  try {
    return new Date(iso).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
  } catch {
    return iso
  }
}

export default function App() {
  const material = materials.find((m) => m.material_id === 1)

  return (
    <div className="page">
      {material ? (
        <MaterialPage material={material} />
      ) : (
        <p>Không tìm thấy bài học.</p>
      )}
      <p className="stamp">Bản build lúc {formatBuildTime(BUILD_TIME)}</p>
    </div>
  )
}
