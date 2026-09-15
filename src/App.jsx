const BUILD_TIME = __BUILD_TIME__

function formatBuildTime(iso) {
  try {
    return new Date(iso).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
  } catch {
    return iso
  }
}

export default function App() {
  return (
    <main className="page">
      <p className="eyebrow">Đồ án nhóm, hạn 05/10/2026</p>

      <h1>Xin chào</h1>

      <p className="lede">
        Đây là trang đầu tiên của <strong>CommbatEnglish</strong>, nền tảng chẩn đoán và
        sắp xếp lộ trình học tiếng Anh nền tảng.
      </p>

      <div className="card">
        <p className="card-title">Đường ống deploy đã chạy</p>
        <p className="card-body">
          Trang này được build từ nhánh <code>main</code> trên GitHub và tự động deploy
          lên Vercel. Mỗi lần push là một lần deploy mới.
        </p>
        <p className="stamp">Bản build lúc {formatBuildTime(BUILD_TIME)}</p>
      </div>

      <ol className="next">
        <li>Màn hình giới thiệu</li>
        <li>33 câu hỏi chẩn đoán, mỗi câu 2 nút: tôi chắc chắn / tôi đoán</li>
        <li>Màn hình kết quả: node yếu, lộ trình, và những gì bản này chưa đo được</li>
      </ol>

      <footer>
        <p>Sửa nội dung trang này trong <code>src/App.jsx</code>.</p>
      </footer>
    </main>
  )
}
