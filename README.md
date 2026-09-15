# CommbatEnglish

Nền tảng chẩn đoán và sắp xếp lộ trình học tiếng Anh nền tảng.
Đồ án nhóm môn lập trình. Hạn nộp: **05/10/2026**.

Sản phẩm nộp là một website đã deploy. Không có báo cáo, không có slide.

## Chạy trên máy

Cần Node 18 trở lên.

```bash
npm install
npm run dev
```

Mở địa chỉ mà terminal in ra, thường là `http://localhost:5173`.

## Build thử trước khi push

```bash
npm run build
```

Nếu lệnh này lỗi thì Vercel cũng sẽ lỗi. Chạy nó trước mỗi lần push.

## Deploy

Nhánh `main` tự động deploy lên Vercel. Mỗi lần push là một bản deploy mới.
Mỗi Pull Request có một link xem thử riêng.

Không ai deploy bằng tay. Nếu link hỏng thì sửa code rồi push, đừng sửa trên Vercel.

## Cấu trúc

```
index.html        khung HTML, thẻ title và meta
src/main.jsx      điểm khởi động React
src/App.jsx       nội dung trang
src/styles.css    toàn bộ CSS
vite.config.js    cấu hình build
```

## Quy ước làm việc

- Mỗi người làm trên nhánh riêng, đặt tên theo việc: `cau-hoi`, `man-hinh-ket-qua`.
- Không push thẳng vào `main` khi chưa chạy `npm run build`.
- Nội dung chuyên môn (cây node, câu hỏi, lời sửa lỗi) nằm trong `SPEC.md`,
  `nodes.json`, `items.json`. Code đọc từ đó chứ không viết cứng vào màn hình.

## Phân công

| Người | Phụ trách |
|---|---|
| Kiên | Nội dung, spec, điều khiển AI để build |
| Giang | Nhập liệu và câu chữ tiếng Việt |
| Mạnh | Kiểm thử, học viên, demo |
| Trang | Soát đáp án, phỏng vấn giáo viên |
