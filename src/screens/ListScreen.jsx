import { isMaterialComplete } from '../progress.js'

function statusFor(stage, currentStage) {
  if (stage < currentStage) return 'Đã xong'
  if (stage === currentStage) return 'Đang học'
  return 'Chưa mở'
}

export default function ListScreen({ learner, materials, onOpenMaterial, onSwitchLearner }) {
  const stages = []
  for (let stage = 1; stage <= 15; stage++) {
    stages.push({
      stage,
      materials: materials
        .filter((m) => m.stage === stage)
        .sort((a, b) => a.material_id - b.material_id),
    })
  }

  return (
    <main>
      <div className="learner-bar">
        <span>{learner.name}</span>
        <button type="button" className="link-button" onClick={onSwitchLearner}>
          Đổi người học
        </button>
      </div>
      {learner.current_stage === 16 && (
        <p className="all-done">Đã học xong tất cả các giai đoạn.</p>
      )}
      <ul className="stage-list">
        {stages.map(({ stage, materials: stageMaterials }) => (
          <li key={stage} className="stage-card">
            <div className="stage-header">
              <h2>Giai đoạn {stage}</h2>
              <span className="stage-status">{statusFor(stage, learner.current_stage)}</span>
            </div>
            <ul className="material-list">
              {stageMaterials.map((m) => (
                <li key={m.material_id}>
                  <button
                    type="button"
                    className="material-link"
                    onClick={() => onOpenMaterial(m)}
                  >
                    {m.title_vi}
                    {isMaterialComplete(m, learner.correct) ? ' ✓' : ''}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}
