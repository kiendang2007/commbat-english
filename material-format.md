# Định dạng material

Luật bắt buộc cho mọi material từ #2 đến #15. Viết bởi Kiên, ngày 18/09.
Material #1 là bản mẫu. Nếu có mâu thuẫn, material #1 thắng.

## 1. Thứ tự trên trang

```
Tiêu đề bài, đúng tên bài, không có chữ "Material #n"
Định nghĩa ngắn
Câu 1
"Có một số cách để phân loại ..."      (chỉ khi bài có phân loại)
Phân loại 1 + bảng
Câu 2
Phân loại 2 + bảng
Câu 3
Phân loại 3 + bảng
Câu 4
```

Mỗi khái niệm có đúng một câu hỏi, và câu hỏi nằm ngay dưới khái niệm đó.
Không gom hết câu hỏi xuống cuối bài.

## 2. Định nghĩa

Ngắn. Một câu mở đầu, rồi gạch đầu dòng, mỗi dòng một loại kèm ví dụ.

```
Danh từ là loại từ dùng để gọi tên:
- người: teacher (giáo viên), student (học sinh), Minh (tên một người)
- con vật: dog (con chó), cat (con mèo), bird (con chim)
```

Không viết đoạn văn dài. Không giải thích cách ngữ pháp Cambridge định nghĩa
loại từ. Không nêu phép thử ngữ pháp trong phần định nghĩa.

## 3. Phân loại

Tiêu đề của một phần phân loại bắt đầu bằng "Theo": "Theo danh từ chỉ người hoặc
danh từ chỉ vật". Phần nào không phải phân loại mà là mô tả một quy tắc thì đặt tiêu
đề theo lối mô tả: "Danh từ không đếm được không có dạng số nhiều".

Dưới tiêu đề: nhiều nhất một hoặc hai câu định nghĩa hai nhóm, chỉ khi tên nhóm
chưa tự giải thích được. Rồi đến bảng.

Bảng chỉ có các cột đúng bằng số nhóm. Hai nhóm thì hai cột. Mỗi ô là một ví dụ
tiếng Anh kèm nghĩa tiếng Việt trong ngoặc.

Sau bảng: không có gì. Không hệ quả ngữ pháp, không ngoại lệ, không lưu ý, không
đối chiếu tiếng Việt. Đi thẳng sang câu hỏi.

Ngoại lệ duy nhất là một block `funfact`: một đoạn giải thích vì sao quy tắc lại như
vậy. Fun fact đặt ở đâu cũng được. Fun fact không phải nội dung bị kiểm tra, nên nó được
phép dùng khái niệm ngoài phần ngữ pháp, ví dụ tên các nhóm âm. Nhiều nhất một fun fact
cho mỗi bảng.

Tiêu đề của một phần mô tả phải nói đúng phạm vi. "Tất cả danh từ không đếm được đều
không có dạng số nhiều" nói rõ đây là toàn bộ, còn "Danh từ không đếm được không có dạng
số nhiều" có thể bị đọc thành một danh sách ngoại lệ. Khi một quy tắc đúng với toàn bộ
một nhóm, hãy viết chữ "tất cả" vào tiêu đề. Câu dưới tiêu đề khi đó chỉ còn để giới
thiệu bảng, không nhắc lại quy tắc: "Một số ví dụ:".

## 4. Luật không dùng khái niệm chưa dạy

Đây là luật quan trọng nhất.

Phần giảng, câu hỏi, chẩn đoán, quy tắc và câu gợi ý đều chỉ được dùng những
khái niệm đã dạy trong chính bài đó hoặc trong các bài trước theo thứ tự stage.

Ví dụ trong material #1: không được nhắc số nhiều, đếm được, mạo từ a/an/the,
chủ ngữ, tân ngữ, he/she/it. Tất cả đều dạy sau.

Trước khi viết một bài, kiểm tra thứ tự 15 bài và liệt kê những gì đã dạy.
Khi một lời giải thích cần khái niệm chưa dạy, cắt lời giải thích đó, không
dạy sớm khái niệm kia.

## 5. Câu hỏi

Theo `SPEC.md` mục 11. Thêm các luật sau:

- Đúng một đáp án bảo vệ được.
- Mọi phương án sai có `diagnosis_vi` khác null, gọi tên người học đang tin cái
  gì, không chỉ nói là sai.
- `rule_vi` luôn có.
- `fallback_vi` có, trừ khi không tồn tại một cách suy ra đáng tin cho loại từ đó.
  Danh từ bất quy tắc là trường hợp như vậy: bảng không liệt kê hết, nên một câu gợi ý
  bảo tra bảng sẽ sai. Khi đó để `null`, và website bỏ trống bước 5 của vòng năm bước.
- Không chấm chính tả, không chấm viết hoa.
- Chẩn đoán viết theo mục 4 ở trên.
- `id` của item bằng node cộng số thứ tự trong node đó: `W1.6-01`, `W1.2-03`.
  Số thứ tự liên tục trong từng node, không đánh theo material. Id đã cắt thì không
  dùng lại.
- `fallback_vi` luôn là `null`. Kiên bỏ mọi câu "Nếu không chắc" ngày 21/09 vì lặp ý với
  `rule_vi`. Không viết lại trường này.
- Khi `fallback_vi` bảo người học tra một bảng, mọi từ được hỏi trong câu đó phải có
  mặt trong bảng.
- Khi lỗi của một phương án đúng là một lỗi do tiếng Việt gây ra, gắn `l1_tag` theo
  bảng ở `SPEC.md` mục 5, và đặt phần đối chiếu tiếng Việt với tiếng Anh vào trong
  `diagnosis_vi` của phương án đó. Phần giảng vẫn không có đoạn giải thích nào ở dưới
  bảng.

## 6. Phần không lên website

Mọi khoá bắt đầu bằng dấu gạch dưới là nội bộ, website không đọc.
Các khoá dùng trong `_internal`:

- `taught_before`: những gì các bài trước đã dạy, để kiểm tra mục 4.
- `not_yet_taught_so_not_used`: khái niệm chưa dạy và cách bài này tránh nó.
- `sources`: nguồn. Ghi rõ câu nào không có nguồn.
- `decisions`: đã cắt gì và vì sao.
- `open_questions`: những gì cần Kiên quyết.

Không có mục "Nguồn" nào hiển thị cho người học.

## 7. File

Một material một file JSON trong `materials/`, tên `NN-slug.json`.
`blocks` là một mảng có thứ tự, đúng thứ tự website hiển thị.
Loại block: `text`, `section`, `funfact`, `item`.

Đọc bản văn xuôi bằng `python3 render_material.py materials/NN-slug.json`.
File `.md` sinh ra để đọc, không sửa, sẽ bị ghi đè.

## 8. Ngôn ngữ

Toàn bộ nội dung cho người học viết bằng tiếng Việt.
Không dùng cặp đại từ xưng hô nào cho đến khi Kiên chốt register.
Không dùng dấu gạch ngang dài.

## 9. Luật viết, chốt ngày 19/09

- Không dùng chữ "Khái niệm" làm nhãn mở đầu. Định nghĩa đứng đầu thì ai cũng biết đó
  là định nghĩa.
- Không hứa "học ở bài sau". Nói điều cần nói rồi dừng.
- Tiêu đề phần dùng thẳng thuật ngữ khi tiếng Việt đã có, ví dụ "Nội động từ và ngoại
  động từ" chứ không phải một câu mô tả vòng.
- Đáp án và phương án sai của một câu hỏi phải dùng từ không có trong bảng ngay trên nó.
  Bảng để học, câu hỏi để áp dụng.
- Ví dụ trung tính dùng động từ có quy tắc. Không lấy động từ bất quy tắc làm ví dụ mặc
  định, vì người học sẽ suy ra sai quy tắc -ed.
- Viết "ngôi thứ ba", không viết "ngôi ba".
- Gọi tên đầy đủ của dạng động từ ở lần đầu xuất hiện trong một bảng: V-0 động từ nguyên
  thể, V-ing động từ thêm -ing, V-3 phân từ quá khứ.
- Khi liệt kê điều kiện, nêu trường hợp riêng trước rồi mới đến trường hợp chung: does
  trước do, has trước have.
- Dưới một bảng lớn thì giải thích từng cột bằng một ví dụ thay thế cụ thể, kiểu thay
  "Tom is a carpenter" thành "He is a carpenter".
- Mỗi phần của một bài phải có bộ ví dụ riêng. Bảng không được lặp lại ví dụ ở phần mở bài,
  và câu hỏi không được lặp lại ví dụ ở bảng ngay trên nó. Một bài có bốn phần thì cần bốn
  bộ từ khác nhau.
- Câu hỏi phải bắt người học phân tích một câu cụ thể. Một câu hỏi mà trả lời đúng được chỉ
  bằng cách đọc lại bảng ngay trên nó là câu hỏi sai thiết kế: đổi nó thành dạng cho một câu
  rồi hỏi phân tích.
- Viết "từ để hỏi", không viết "từ hỏi".

## 10. Luật viết, chốt ngày 21/09

- Không dùng "việc" để chỉ hành động. Viết "hành động". "Việc" dễ bị hiểu là sự việc, tức
  là một danh từ, trong khi hành động là thứ động từ nói ra. Giữ nguyên "làm việc" khi nó là
  nghĩa của động từ work, và "công việc" khi nó là danh từ job.
- Viết "người gây ra hành động" và "người bị tác động", không viết "người làm" và "người bị làm".
- Khi một định nghĩa chia thành nhiều nhóm, các nhóm phải MECE. Cách chắc nhất là xếp bằng một
  chuỗi câu hỏi hỏi lần lượt, câu trả lời có đầu tiên quyết định nhóm, như bốn nhóm danh từ ở
  material #1.
- Bảng tổng hợp đánh dấu các ô quan trọng bằng ★, như chữ T ở material #15.
