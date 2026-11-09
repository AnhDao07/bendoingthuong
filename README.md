# Bến đợi người thương

Web chủ đề **hoa sen, phong cách Việt Nam xưa**: một bến quê sớm mai, trống trơn cho tới khi chủ bến (admin) đăng nội dung. Khách vào xem char, đọc truyện, viết góp ý ở diễn đàn, thả tim. Chỉ admin mới đăng bài, nhạc ai cũng có thể nghe.

> Gói này **chưa có code**. Có: ý tưởng, mã màu, font, cây thư mục và các file trống (mỗi file ghi sẵn một dòng "file này để làm gì") để sau này nhờ AI viết code vào đúng chỗ. Bản mẫu `serlif.zip` dùng để tham khảo cấu trúc.

**Cập nhật lần 2:** thêm **Diễn đàn** (góp ý ẩn danh / công khai) và **Cốt truyện**; đổi sang phong cách Việt Nam xưa; đổi ảnh hero (đồng sen sớm mai); đổi bộ font sang bộ Sài Gòn xưa (FZ-SG).

---

## 1. Tóm tắt nhanh

| Mục | Chốt |
|---|---|
| Tên web | Bến đợi người thương |
| Phong cách | Việt Nam xưa: giấy dó, mực nâu, đỏ son, vàng đồng, khung viền đôi, con dấu triện |
| Ảnh hero | `public/assets/hero/hsen.jpg` (đồng sen sớm mai, 1200×675) |
| Công nghệ | React + Vite (giống bản mẫu), Firebase (Auth, Firestore, Storage), deploy Vercel |
| Bỏ khỏi bản mẫu | `server.ts` (Express) và phần AI Gemini |
| Ai đăng bài | Chỉ admin (1 mật khẩu) |
| Khách làm được | Xem char, đọc truyện, viết diễn đàn/bình luận (ẩn danh hoặc công khai), thả tim, xem bảng xếp hạng, nghe nhạc |
| Font | Bộ FZ-SG cho tiêu đề; Times New Roman cho chữ đọc dài (mục 7) |
| Khi chưa có dữ liệu | Web trống, hiện "bến còn vắng, chưa có người ghé sang" với hoa sen khép |

---

## 2. Thanh nav

| # | Mục | Ai thấy | Ghi chú |
|---|---|---|---|
| 1 | **Home** | mọi người | Hero "Bến đợi người thương", thông báo mới nhất |
| 2 | **Char** | mọi người | Toàn bộ char. Char **cài khoá** hiện thẻ mờ + ổ khoá |
| 3 | **Cốt truyện** | mọi người | Admin up truyện theo bộ + chương, khách đọc |
| 4 | **Diễn đàn** | mọi người | Góp ý/feedback, chọn ẩn danh hoặc công khai |
| 5 | **Bảng xếp hạng** | mọi người | Xem nhiều, yêu thích |
| 6 | **Nhạc** | **chỉ admin** | Chưa đăng nhập thì không thấy mục này |
| 7 | **Icon sen có chìa khoá** | mọi người | Bấm để đăng nhập admin. Đăng nhập rồi đổi thành nút vào **Admin** |
| 8 | **Trang Admin** | **chỉ admin** | 5 tab: Đăng char, Cốt truyện, Diễn đàn, Nhạc, Thông báo |

Nav kiểu biển hiệu: nền giấy dó, viền đôi nâu, chữ Attic Antique, mục đang chọn có gạch chân đỏ son. Nav tự ẩn khi cuộn xuống, hiện lại khi cuộn lên. Điện thoại: thu thành nút menu hình sen.

Gợi ý đặt tên: Diễn đàn → "Sân đình", Bảng xếp hạng → "Bảng vàng", Cốt truyện → "Tủ sách".

---

## 3. Chi tiết từng trang

### 3.1 Home
- Hero (mục 4) chiếm màn hình đầu.
- Dưới hero: thanh thông báo (nếu có thông báo bật), lưới "Char mới" và "Truyện mới" (mỗi loại tối đa 6).
- Chưa có gì: chỉ hero + dòng "Bến còn vắng, người thương chưa tới." kèm hoa sen khép.

### 3.2 Char
- Lưới thẻ: ảnh bìa, tên, dòng phụ, lượt xem, tim, tag. Lọc theo tag, tìm theo tên.
- Bấm thẻ vào trang chi tiết (hồ sơ, link ngoài, nút tim).
- Mở trang chi tiết tính 1 lượt xem (mục 9.2).
- Khoá char: mục 8.2.

### 3.3 Cốt truyện (mới)
Giống phần Diễn đàn/truyện trong bản mẫu `serlif.zip` (bộ truyện có nhiều chương).
- **Trang danh sách**: lưới bìa truyện, mỗi thẻ có tên, tóm tắt ngắn, thẻ, số chương, lượt xem. Lọc theo thẻ.
- **Trang một bộ**: bìa, tóm tắt đầy đủ, thẻ, **nhân vật liên quan** (bấm sang char), mục lục chương, bình luận.
- **Màn đọc**: nền giấy dó (mặc định) hoặc "đèn dầu" (tối), chỉnh cỡ chữ (3 mức), nút chương trước/sau, nhớ chương đang đọc của từng người (lưu trên trình duyệt).
- Chữ đọc: **Times New Roman** (đọc lâu không mỏi mắt), tiêu đề chương: Attic Antique.
- **Admin up**: tab Cốt truyện → "Tạo bộ truyện mới" (tên, tóm tắt, bìa, thẻ, nhân vật gắn kèm) → quản lý chương (thêm, sửa, xoá, đổi thứ tự, số chương tự đánh lại). Dán nội dung trực tiếp; nên cho phép nhập file `.txt`.
- Mỗi chương tối đa khoảng 300.000 ký tự (Firestore giới hạn 1 MB mỗi tài liệu). Chương nào dài hơn thì chia đôi.
- Mỗi lần mở một bộ tính 1 lượt xem cho bộ đó.

### 3.4 Diễn đàn (mới): góp ý ẩn danh / công khai
- Ai cũng viết được, **không cần tài khoản** (web tự cấp đăng nhập ẩn danh của Firebase ở phía sau).
- Form viết bài: ô nội dung + hai lựa chọn:
  - **Ẩn danh**: bài hiện với nhãn "Ẩn danh", không có tên.
  - **Công khai**: nhập tên hiển thị tuỳ ý (không cần trùng tên thật).
- Có thể gắn nhãn chủ đề: Góp ý, Hỏi đáp, Tâm sự (admin sửa danh sách).
- Danh sách: bài ghim lên đầu, sau đó mới nhất trước. Mỗi bài có thể có **trả lời**; trả lời của admin có **dấu son "Chủ bến"** (con dấu đỏ).
- Khách chỉ xoá được bài của chính mình (cùng trình duyệt). Admin ẩn, xoá, ghim, trả lời mọi bài.
- Chống spam: tối đa 1000 ký tự mỗi bài, giãn cách ít nhất 30 giây giữa hai bài, admin có nút ẩn nhanh. Muốn chặt hơn thì bật Firebase App Check (tuỳ chọn).
- **Về ẩn danh, nói rõ cho người dùng:** "ẩn danh" nghĩa là **người xem khác không thấy tên**. Hệ thống vẫn lưu một mã ngẫu nhiên của trình duyệt (không phải tên hay email) để chống spam và để người viết xoá được bài của mình. Nên ghi một dòng nhỏ dưới form: "Ẩn danh với mọi người; chủ bến có thể thấy mã trình duyệt (không phải tên)". Đừng hứa "tuyệt đối vô danh".
- Bình luận dưới truyện và dưới char dùng **chung cơ chế** này.

### 3.5 Bảng xếp hạng
- Ba tab: **Char xem nhiều**, **Char yêu thích**, **Truyện xem nhiều**.
- Top 10 mỗi tab, trình bày như "bảng vàng" gỗ: hạng 1, 2, 3 có dấu son hoặc huy hiệu sen vàng (#C9A24B), sen bạc (#D1C5AF), sen hồng (#C9798A).
- Char khoá vẫn lên bảng (chỉ hiện tên + bìa mờ).

### 3.6 Nhạc (chỉ admin)
- Danh sách bài đã up, phát/dừng, chọn bài cho widget.
- Nhạc có thể gắn vào từng char (như `musicUrl` ở bản mẫu).

### 3.7 Trang Admin
Năm tab:
1. **Đăng char**: form như bản mẫu (tên, dòng phụ, ảnh, tag, giới thiệu, ngoại hình, tính cách, bối cảnh, lời thoại mẫu, thông tin khác, link) **thêm ô cài khoá** (mục 8.2).
2. **Cốt truyện**: bộ truyện + chương (mục 3.3).
3. **Diễn đàn**: duyệt bài (ẩn/hiện, xoá, ghim, trả lời với tư cách Chủ bến).
4. **Nhạc**: tải file hoặc dán link mp3.
5. **Thông báo**: tiêu đề, nội dung, bật/tắt, ghim.

Mỗi tab có danh sách bên dưới để sửa, xoá, khoá/mở khoá.

---

## 4. Hero "Bến đợi người thương"

### 4.1 Bố cục (ảnh mới)
- Ảnh nền `hsen.jpg` (16:9), phủ hết chiều ngang, `cover`.
- Ảnh mới **không còn khoảng trống bên phải** như ảnh cũ: bên phải là hàng dừa và nắng chói. Vùng yên tĩnh nhất là **bên trái, giữa ảnh** (ruộng sen xa, bờ ruộng, mặt nước phẳng). Nên đặt khối chữ ở đó: cách mép trái khoảng 5%, chiếm khoảng 4% đến 46% bề ngang, từ 22% đến 62% chiều cao.
- Nếu bạn vẫn muốn khối chữ bên phải thì nói để chỉnh; chữ sẽ đè lên hàng dừa nên cần tấm biển đục hơn.
- Từ trên xuống: tiêu đề **Bến đợi người thương** → câu phụ → nút **Login** có thanh đi bộ.
- Câu phụ gợi ý: *"Sen nở bên hồ, người thương chưa tới. Cứ ngồi đây đợi."*

### 4.2 Làm chữ không bị chìm: tấm biển giấy dó
Ảnh sáng mờ, tông nâu xanh, chữ trực tiếp lên ảnh sẽ chìm. Cách xử lý: đặt chữ trên **tấm biển giấy dó** (hợp phong cách xưa, đỡ dùng kính mờ hiện đại).

| Thuộc tính | Giá trị |
|---|---|
| Nền | giấy dó `#F2E8D2`, độ đục 88% |
| Viền | đôi: ngoài nâu `#6B4A2E` 2px, trong vàng đồng `#C9A24B` 1px, cách nhau 4px |
| Bo góc | 6px (góc vuông-nhẹ như bảng hiệu) |
| Góc | 4 góc có hoa văn nhỏ (mục 5) |
| Bóng | nhẹ, màu `#3B2412` độ đục 18% |
| Tiêu đề | `#A62B24` (đỏ son), font **FZ-SG Brotha Script**, cỡ 56 đến 72px (điện thoại 40 đến 46px) |
| Câu phụ | `#3B2412`, font **FZ-SG Remsen Script**, từ 24px trở lên (nét mảnh, nhỏ hơn sẽ khó đọc) |
| Nút Login | nền `#A62B24`, chữ `#FBF5E6`, viền vàng đồng |

Độ tương phản đã tính (từ 4.5:1 là đạt cho chữ thường):

| Chữ trên nền | Tỉ lệ |
|---|---|
| Mực nâu `#3B2412` trên tấm biển phủ ruộng | 10.3:1 |
| Mực nâu trên tấm biển phủ nước | 11.0:1 |
| Đỏ son `#A62B24` trên tấm biển phủ ruộng | 5.0:1 |
| Đỏ son trên tấm biển phủ nước | 5.3:1 |
| Mực nâu trên giấy dó `#F2E8D2` | 11.9:1 |
| Nâu phụ `#6B4A2E` trên giấy dó | 6.5:1 |
| Ngà `#FBF5E6` trên đỏ son (nút) | 6.5:1 |
| Mực nâu trên vàng đồng `#C9A24B` | 6.1:1 |

Lưu ý: chữ trên hồng sen `#C9798A` chỉ dùng màu mực nâu (4.6:1). **Đừng đặt chữ ngà lên hồng sen** (chỉ khoảng 4.1:1, thiếu).

Điện thoại: ảnh cắt lấy phần giữa-trái; tấm biển dời xuống nằm phía dưới ảnh, rộng gần hết màn hình.

### 4.3 Nút Login + thanh đi bộ
Thay "0, 1, 2 ... 100%" bằng **cô bé cầm hoa sen đi bộ** trên thanh, từ trái sang phải. Thanh là **con đường đất bờ ruộng** (giống con đường trong ảnh hero).

- **Nút**: bầu dục (hoặc chữ nhật bo nhẹ kiểu tấm biển), nền đỏ son, chữ "Login", icon sen nhỏ bên trái. Bấm vào thì nút giãn thành thanh (cùng chỗ, không nhảy trang).
- **Thanh**: đường đất mảnh `#D9C9A5` (chưa đi), phần đã đi tô sợi chỉ đỏ `#A62B24`. Rải vài lá sen nhỏ `#5B6614` làm bậc đá. Vệt gợn nhẹ phía sau cô bé.
- **Cô bé**: ảnh bạn cung cấp (nên là nón lá, áo bà ba, tay cầm cành sen; xem `public/assets/girl/README.txt`). Vị trí ngang = tiến độ.
- **Diễn biến**:
  1. Bấm Login → hộp đăng nhập hình bông sen xin mật khẩu (mục 8.1).
  2. Cô bé bước đều tới khoảng **70%** trong lúc chờ Firebase xác thực. Không chạy giả tới 100% khi chưa xong.
  3. **Đúng mật khẩu**: cô bé chạy nốt, hoa sen trên tay **nở bung**, cánh rơi, **dấu son đóng xuống** ở cuối đường, rồi chuyển sang Admin. Khoảng 2.5 đến 3 giây.
  4. **Sai mật khẩu**: cô bé dừng, lùi một bước, hoa sen cúi rung nhẹ, dòng nhỏ "Sai rồi, thử lại nhé." (màu `#B3261E`).
- Dùng chung cho cả icon sen-chìa-khoá trên nav.
- `prefers-reduced-motion`: bỏ bước chân, chỉ thanh tô dần.

---

## 5. Phong cách Việt Nam xưa: trang trí

Mục tiêu: nhìn như một tờ giấy dó, tấm biển hiệu gỗ, tranh dân gian, chứ không phải web hiện đại tô màu nâu. Làm bằng CSS và SVG nhỏ, không dùng ảnh nặng.

| Thứ | Trông thế nào | Dùng ở đâu |
|---|---|---|
| **Nền giấy dó** | `#F2E8D2` + vân giấy rất nhẹ (độ đục dưới 6%), góc hơi ố (nâu `#E6D5B3` loang dần vào trong) | Toàn trang |
| **Khung viền đôi** | Nâu ngoài, vàng đồng trong, góc cắt vát nhẹ hoặc có hoa văn nhỏ | Thẻ char, truyện, hộp thoại, tấm biển hero |
| **Hoa văn góc** | Cánh sen cách điệu hoặc hoa văn chạm khắc đình làng, vẽ SVG một nét | 4 góc khung |
| **Đường kẻ phân cách** | Đường mảnh nâu, giữa có hoa sen cách điệu hoặc sóng nước | Giữa các khu vực |
| **Con dấu son (triện)** | Ô vuông đỏ `#A62B24`, chữ "Bến" trắng ngà, hơi lệch và có nhiễu mực | Logo, dấu "Chủ bến" ở trả lời admin, dấu khi đăng nhập xong |
| **Ruy băng tiêu đề** | Nền đỏ gạch `#8E2F22`, chữ ngà, hai đầu vát chữ V | Tên mục (Diễn đàn, Bảng vàng...) |
| **Bảng vàng** | Bảng gỗ nâu, tên viết chữ ngà/vàng, hạng 1-2-3 có dấu son | Bảng xếp hạng |
| **Trục giấy / cuộn thư** | Hai đầu trục gỗ, giấy dó ở giữa | Màn đọc truyện (khung nội dung) |
| **Đèn lồng, nón lá, mái ngói** | Hình nhỏ vẽ SVG, tông đỏ gạch/vàng/nâu, đặt rất tiết chế | Trạng thái trống, chân trang |
| **Câu đối (tuỳ chọn)** | Hai dải giấy đỏ đứng hai bên hero khi màn rộng | Hero (màn lớn) |

Quy tắc: mỗi khu vực chỉ **một** thứ trang trí nổi (ví dụ trang diễn đàn: ruy băng tiêu đề + dấu son), còn lại để thoáng. Đừng chồng khung, hoa văn và bóng lên nhau.

Chuyển động theo kiểu xưa: lật trang nhẹ khi sang chương, dấu son **đóng** xuống (phóng to nhẹ rồi thu về), sương trôi chậm trên hero, cánh sen rơi ít. Không dùng hiệu ứng sáng bóng, neon.

---

## 6. Màu sắc

Hình bảng màu: `docs/bang-mau.png`. Màu ruộng, nước, sương, nắng lấy từ chính ảnh hero mới; đỏ son, vàng đồng, hồng sen là màu nhấn thêm cho chất xưa.

### 6.1 Chế độ sáng (mặc định)

| Vai trò | Tên | Mã |
|---|---|---|
| Nền trang | Giấy dó | `#F2E8D2` |
| Nền khu vực / giấy đậm | Giấy đậm | `#E6D5B3` |
| Mặt thẻ sáng | Trắng ngà | `#FBF5E6` |
| Chữ chính | Mực nâu | `#3B2412` |
| Chữ phụ | Nâu cà phê | `#6B4A2E` |
| Nhấn chính (nút, tab đang chọn, tiêu đề hero) | Đỏ son | `#A62B24` |
| Ruy băng, nền mục | Đỏ gạch | `#8E2F22` |
| Viền, huy hiệu, chìa khoá | Vàng đồng | `#C9A24B` |
| Vàng đậm (viền chìa, chữ vàng trên nền sáng) | Vàng sẫm | `#8A6A22` |
| Lá sẫm (liên kết, icon) | Lá sẫm | `#404C31` |
| Lá ruộng | Lá ruộng | `#616736` |
| Lá sen | Lá sen | `#5B6614` |
| Men ngọc (nhấn phụ) | Men ngọc | `#3F6E69` |
| Nước sương | Nước sương | `#AB9F8A` |
| Đường đất (thanh đi bộ) | Đường đất | `#D9C9A5` |
| Sương trời | Sương trời | `#D1C5AF` |
| Nắng mặt nước | Nắng | `#D8B97B` |
| Hồng sen (chỉ tô hình, không đặt chữ ngà) | Hồng sen | `#C9798A` |
| Hồng phấn (nền nhẹ) | Hồng phấn | `#E7C3C0` |
| Thành công | Xanh lá | `#4B7A3A` |
| Cảnh báo | Hổ phách | `#C9871F` |
| Lỗi | Đỏ thẫm | `#B3261E` |

### 6.2 Chế độ "đèn dầu" (tuỳ chọn, làm sau)
| Vai trò | Mã |
|---|---|
| Nền trang | `#1E140D` |
| Mặt thẻ | `#2A1D12` |
| Chữ chính | `#EBDDBF` (13.5:1) |
| Vàng (chữ nhấn) | `#E3C77A` (11.0:1) |
| Son | `#C4463A` |
| Viền | `#5A3F27` |

### 6.3 Quy tắc dùng màu
- Mỗi màn hình có **một** điểm nhấn đỏ son: nút chính hoặc tab đang chọn.
- Nâu và giấy là nền; xanh lá ruộng dùng cho liên kết, icon, chi tiết "sống" (lá sen).
- Vàng đồng chỉ cho viền khung, chìa khoá, hạng 1, điểm nhấn hiếm.
- Hồng sen chỉ để tô hoa, tim; chữ nằm trên hồng thì dùng mực nâu.
- Viền thẻ: nâu `#6B4A2E` (ngoài) và vàng đồng (trong). Bóng: `#3B2412` độ đục 10 đến 18%.

---

## 7. Font (bộ Sài Gòn xưa FZ-SG)

Đã kiểm tra: ba font dưới đây có đủ dấu tiếng Việt. Chỉ thiếu **dấu gạch dài "—"** (em dash), nên **trong tiêu đề dùng gạch nối thường "-"**, đừng dùng "—".

| Vị trí | Font | File |
|---|---|---|
| Tiêu đề hero "Bến đợi người thương", tên web trên nav | **FZ-SG Brotha Script** | `public/assets/fonts/FZ-SG-BrothaScript.ttf` |
| Tiêu đề trang, tên char, tên truyện, nav, nút, tab, ruy băng | **FZ-SG Attic Antique** | `public/assets/fonts/FZ-SG-AtticAntique.ttf` |
| Câu phụ ở hero, câu trích, chữ ký (chỉ từ 24px) | **FZ-SG Remsen Script** | `public/assets/fonts/FZ-SG-RemsenScript.ttf` |
| Chữ đọc dài: nội dung truyện, hồ sơ char, diễn đàn, bình luận, form | **Times New Roman** (dự phòng `Times, serif`) | font hệ thống |

Lý do giữ Times New Roman cho chữ dài: font trang trí nét mảnh hoặc có đuôi dài đọc cả chương truyện sẽ mỏi mắt. Bạn muốn đổi toàn bộ sang font FZ-SG thì thay ở `tokens.css`, nhưng nên giữ chữ đọc dài ở font dễ đọc.

Cỡ gợi ý: nội dung 17px, nav 17px, tiêu đề mục 28 đến 34px, hero 56 đến 72px (điện thoại 40 đến 46px).

Trong bộ font bạn gửi còn: Boston Skyline, Galey, Hubba, LambrettistA, OPTIRadiant, PAG Transformacio, Pressio No. 25, The Talkshow, US Declaration, VVDS SunshineBridge, Velocette, ZT Voltra, Eclat, Glubby, Honfleur, Motor City, PAG Trust. Muốn đổi tiêu đề thì thử **US Declaration** (chữ thảo lớn, bay bướm) hoặc **Eclat** (chữ thảo đậm, biển hiệu); cả hai đều có đủ dấu tiếng Việt.

**Giấy phép:** theo `public/assets/fonts/CREDIT.txt`, bộ font này **chỉ dùng cho mục đích cá nhân, phi thương mại**; dùng thương mại phải theo link của từng tác giả. Web cá nhân, miễn phí thì ổn. Nếu sau này kiếm tiền từ web thì cần xin phép từng font.

---

## 8. Đăng nhập admin và khoá

### 8.1 Đăng nhập
- Mật khẩu admin: **tranchau**.
- Cách làm đúng: tạo 1 tài khoản trong **Firebase Authentication** (email cố định, ví dụ `admin@benphoisen.web`, mật khẩu `tranchau`). Hộp đăng nhập **chỉ hỏi mật khẩu**; email lấy từ `src/config.ts`.
- **Không** ghi chữ `tranchau` vào code web: code trên trình duyệt ai cũng đọc được.
- Tắt đăng ký tự do: Authentication → Settings → User actions → bỏ "Enable create (sign-up)".
- Hộp đăng nhập hình bông sen: một ô mật khẩu, con mắt xem/ẩn, nút Login.
- `tranchau` khá ngắn và dễ đoán. Nếu web công khai lâu dài nên đổi sang chuỗi dài hơn (đổi ở Firebase, không cần sửa code).

### 8.2 Khoá char
Admin bật "Khoá" khi đăng/sửa char và chọn:
- **Chỉ admin xem**: khách thấy thẻ mờ + ổ khoá sen, bấm vào chỉ hiện "Char này đang được giấu kín".
- **Mật mã riêng**: khách nhập mật mã do admin đặt cho từng char để xem.

Thẻ bị khoá: ảnh bìa phủ mờ, giữa thẻ có hoa sen khép với ổ khoá nhỏ màu vàng đồng, vẫn thấy tên.

Độ an toàn thật:
- **Chỉ admin xem** an toàn thật nếu nội dung đầy đủ nằm ở chỗ chỉ admin đọc được (mục 9.3).
- **Mật mã riêng** chỉ che mắt: người rành kỹ thuật vẫn đọc được dữ liệu nếu nội dung nằm sẵn trong tài liệu công khai. Dùng để giấu bớt thôi; nếu cần chắc chắn thì chọn "chỉ admin xem".

---

## 9. Dữ liệu và Firebase

### 9.1 Các collection (ý tưởng)
Tên đặt riêng để web bắt đầu trống, không lẫn dữ liệu bản mẫu.

| Collection | Nội dung |
|---|---|
| `bd_characters` | char: tên, dòng phụ, trích dẫn, ảnh bìa, avatar, tag, giới thiệu, ngoại hình, tính cách, bối cảnh, lời thoại mẫu, thông tin khác, link, nhạc gắn kèm, **views**, **likes**, **locked**, ngày đăng |
| `bd_characters/{id}/private/content` | (nếu muốn khoá thật) phần nội dung dài, chỉ admin đọc |
| `bd_characters/{id}/likes/{uid}` | mỗi tài liệu = một tim của một người |
| `bd_stories` | bộ truyện: tên, tóm tắt, bìa, thẻ, nhân vật gắn kèm, số chương, **views**, ngày đăng |
| `bd_stories/{id}/chapters/{cid}` | chương: tên, nội dung, thứ tự, ngày đăng |
| `bd_forum` | bài diễn đàn: nội dung, chủ đề, **chế độ (ẩn danh / công khai)**, tên hiển thị (nếu công khai), mã người viết, ghim, ẩn, ngày đăng |
| `bd_forum/{id}/replies/{rid}` | trả lời: nội dung, của admin hay khách, chế độ, tên hiển thị, ngày |
| `bd_comments` (hoặc bình luận con của char/truyện) | bình luận dưới char/truyện, cùng cấu trúc với trả lời diễn đàn |
| `bd_music` | nhạc: tên bài, ca sĩ, link hoặc đường dẫn Storage, ngày đăng |
| `bd_announcements` | thông báo: tiêu đề, nội dung, bật/tắt, ghim, ngày đăng |

### 9.2 Lượt xem và yêu thích
- **Lượt xem** (char và truyện): tăng 1 khi mở trang; mỗi trình duyệt chỉ tính lại sau `VIEW_COOLDOWN_HOURS` (gợi ý 6 giờ) cho cùng một mục. Admin xem không tính.
- **Yêu thích** (char): khách có đăng nhập ẩn danh (bật Anonymous Auth), mỗi người một tim cho mỗi char, bấm lần nữa để bỏ. Lưu thêm số đếm trên char cho bảng xếp hạng chạy nhanh.
- Không có máy chủ riêng nên số liệu chỉ "tương đối công bằng": ai xoá dữ liệu trình duyệt thì tính lại được. Với web cá nhân là đủ.

### 9.3 Quy tắc bảo vệ (ý chính, `firestore.rules` và `storage.rules`)
- Đọc char, truyện, chương, thông báo, bài diễn đàn không bị ẩn: ai cũng đọc.
- Bài diễn đàn/trả lời/bình luận của khách: được **tạo** nếu đã đăng nhập (kể cả ẩn danh), nội dung dài tối đa 1000 ký tự, bắt buộc có trường chế độ; được **xoá** chỉ bài của chính mình (so mã người viết).
- Ghi (thêm, sửa, xoá) char, truyện, chương, nhạc, thông báo; ẩn/ghim/trả lời với tư cách Chủ bến: **chỉ tài khoản admin** (so email admin).
- Ngoại lệ cho khách: tăng `views` thêm 1, tạo/xoá tim của chính mình.
- `bd_music`: **chỉ admin** đọc và ghi.
- `private/content`: chỉ admin đọc.
- Storage: ảnh đọc công khai; nhạc chỉ admin đọc; chỉ admin ghi.
- Tham khảo `firestore.rules` và `storage.rules` của bản mẫu rồi sửa email và tên collection.

---

## 10. Widget nhạc hình hoa sen

Thay popup dài bằng **một bông sen nhỏ vẽ bằng SVG**, ghim góc dưới phải (cách mép khoảng 20px), cỡ 56px (điện thoại 48px). **Chỉ hiện khi admin đã đăng nhập.**

- **Hình**: 5 đến 7 cánh hồng (`#E7C3C0` ngoài, `#C9798A` trong), nhuỵ vàng đồng `#C9A24B`, đế là một chiếc lá sen `#5B6614` nhỏ. Viền mảnh nâu `#6B4A2E` cho hợp phong cách tranh xưa.
- **Đang phát**: sen nở, cánh xoay rất chậm (khoảng 20 giây một vòng), thỉnh thoảng một cánh nhỏ bay lên.
- **Tạm dừng**: sen khép, đứng yên.
- **Bấm**: phát/dừng.
- **Rê chuột** (hoặc bấm giữ trên điện thoại): bong bóng nhỏ nổi cạnh sen, chỉ có tên bài (một dòng, cắt bớt nếu dài) + hai nút nhỏ lùi/tới. Bong bóng nền giấy dó `#F2E8D2`, viền đôi nhỏ, chữ mực nâu.
- Không có thanh dài, không ảnh bìa, không che nội dung.
- Bài lấy từ trang **Nhạc**. Chưa có bài thì sen khép và mờ.

---

## 11. Hình SVG cần vẽ
Dùng màu ở mục 6:
1. **Logo/favicon**: con dấu son vuông chữ "Bến" hoặc hoa sen 5 cánh trong khung tròn.
2. **Sen-chìa-khoá** (nav): hoa sen có chìa khoá nhỏ ở nhuỵ; chìa vàng đồng viền vàng sẫm. Đã đăng nhập: chìa xoay mở.
3. **Sen nhạc** (mục 10).
4. **Sen trạng thái trống**: sen khép, màu nhạt, kèm "Bến còn vắng."
5. **Sen khoá** (char bị khoá).
6. **Nút tim hình sen**: chưa tim là viền hồng nhạt, đã tim là sen nở hồng đậm.
7. **Cánh sen rơi** (3 kiểu).
8. **Hoa văn góc khung** và **đường kẻ phân cách** (mục 5).
9. **Con dấu "Chủ bến"** (dấu son nhỏ cho trả lời admin).
10. **Đèn lồng, nón lá, mái ngói** (trang trí nhỏ, ít dùng).
11. **Cô bé cầm hoa sen**: ảnh của bạn, không vẽ SVG (xem `public/assets/girl/`).

---

## 12. Cấu trúc thư mục
```
ben-doi-nguoi-thuong/
├─ README.md                  (file này)
├─ docs/bang-mau.png          (bảng màu dạng ảnh)
├─ .env.example               (tên biến Firebase; sao chép thành .env.local)
├─ .gitignore
├─ firestore.rules, storage.rules   (ghi quy tắc, mục 9.3)
├─ vercel.json.NOTE.txt       (ghi chú; chỉ cần vercel.json nếu bỏ router hash)
├─ index.html                 (cần viết)
├─ public/
│  ├─ favicon-NOTE.txt
│  └─ assets/
│     ├─ hero/ben-doi.jpg     (ảnh hero mới, đã có)
│     ├─ fonts/               (3 font FZ-SG + CREDIT.txt, đã có)
│     ├─ girl/                (bỏ ảnh cô bé vào đây)
│     └─ sample-ref/          (bỏ serlif.zip tham khảo; xoá trước khi deploy)
└─ src/
   ├─ main.tsx, App.tsx, config.ts, index.css
   ├─ styles/   tokens, base, vintage, shell, hero, anim, ui, feed, story, forum, rank, admin (.css)
   ├─ pages/    HomePage, CharsPage, CharacterPage, StoriesPage, StoryPage, ForumPage, RankingPage, MusicPage, AdminPage
   ├─ components/
   │  ├─ layout/     Header, Hero, Footer, AnnouncementBar
   │  ├─ lotus/      LotusLogo, LotusKeyButton, MusicLotusWidget, LotusProgressWalker, Petals
   │  ├─ vintage/    PaperFrame, OrnamentDivider, RedSeal, Ribbon, PaperTexture
   │  ├─ auth/       LoginModal
   │  ├─ character/  CharacterCard, CharacterGrid, CharacterDetail, LockGate, LikeButton
   │  ├─ story/      StoryGrid, StoryIntro, ChapterList, StoryReader, Comments
   │  ├─ forum/      PostForm, PostList, PostItem
   │  ├─ ranking/    RankTabs, RankList
   │  ├─ music/      MusicPlayerCore, TrackList
   │  ├─ admin/      CharacterForm, StoryForm, ChapterManager, ForumModeration, MusicUploader, AnnouncementForm, ManageList
   │  └─ common/     EmptyState, Modal, TagFilter, ImagePicker
   ├─ hooks/    useAuth, useRoute, useViews, useLikes, useStories, useForum, useAnnouncements, useHideOnScroll
   ├─ lib/      firebase.ts, tags.ts
   ├─ services/ api.ts
   └─ types/    index.ts
```
Chưa có trong gói (tạo khi viết code): `package.json`, `vite.config.ts`, `tsconfig.json`, `firestore.indexes.json`. Lấy từ bản mẫu rồi bỏ phần Express/Gemini.

Tham khảo bản mẫu cho: `Header`, `Modal`, `TagFilter`, `ImagePicker`, `CharacterForm`, phần truyện/chương (`StoryForm`, `ChapterManager`, `StoryReader`, `ChapterGrid`), `Comments`, `Petals`, `useHideOnScroll`, `firebase.ts`, `tags.ts`, `api.ts`. Phần Tạo OC, Random tên, Bảng NPC của bản mẫu **không nằm trong web này** (bạn không yêu cầu).

---

## 13. Hướng dẫn cài đặt và đưa lên mạng

### 13.1 Firebase (làm 1 lần)
1. Vào console.firebase.google.com → tạo project mới.
2. **Authentication → Sign-in method**: bật **Email/Password** và **Anonymous** (Anonymous cần cho tim và diễn đàn).
3. **Authentication → Users → Add user**: email admin (khớp `config.ts`), mật khẩu như mục 8.1. Tắt đăng ký tự do.
4. **Firestore Database → Create database** (chế độ production), dán `firestore.rules` vào tab Rules và Publish.
5. **Storage** (chỉ khi muốn up ảnh/nhạc trực tiếp): bật rồi dán `storage.rules`. Không bật thì dùng "Dán link".
6. **Project settings → Your apps → Web (</>)**: lấy 6 giá trị cấu hình, điền vào `.env.local` theo `.env.example`.
7. **Authentication → Settings → Authorized domains**: thêm tên miền Vercel (dạng `ten-ban.vercel.app`) sau khi deploy xong.
8. (Tuỳ chọn) **App Check** để chặn bot spam diễn đàn.

### 13.2 Chạy thử trên máy
```
npm install
npm run dev
```
### 13.3 Đưa lên Vercel
1. Đẩy mã lên GitHub (`.gitignore` đã chặn `.env.local` và `sample-ref`).
2. vercel.com → Add New → Project → chọn repo. Framework: **Vite**. Build: `npm run build`, thư mục ra: `dist`.
3. **Settings → Environment Variables**: thêm 6 biến `VITE_FIREBASE_*` giống `.env.local`, rồi Redeploy.
4. Thêm tên miền Vercel vào Authorized domains của Firebase (bước 7). Quên bước này thì đăng nhập báo lỗi.
5. Dùng router hash (`#/chars`) thì tải lại trang không bị 404; không cần `vercel.json`.
6. Nén ảnh hero (JPG dưới 400 KB) trước khi deploy để web tải nhanh.

---

## 14. Thứ tự làm (gợi ý)
1. Nền: `tokens.css` + `base.css` + `vintage.css` + font + `config.ts` + Firebase kết nối được.
2. Hero + tấm biển giấy dó + chữ (kiểm tra đọc rõ trên mọi cỡ màn hình).
3. Đăng nhập: `LoginModal` + thanh đi bộ + `useAuth`.
4. Nav + route + chặn trang chỉ admin.
5. Admin: đăng char → hiện ở Char/Home.
6. Lượt xem, tim, Bảng xếp hạng.
7. Cốt truyện: bộ + chương + màn đọc.
8. Diễn đàn: đăng bài ẩn danh/công khai, duyệt, trả lời Chủ bến; rồi bình luận dưới char/truyện.
9. Khoá char.
10. Nhạc + widget sen.
11. Thông báo.
12. Dọn: reduced-motion, điện thoại, nén ảnh.

## 15. Cách nhờ AI viết code
Mở trò chuyện mới, đính kèm README này + `serlif.zip` + ảnh hero + ba font, rồi viết, ví dụ:
> "Viết code cho dự án trong README này. Làm **bước 1** của mục 14. Dùng đúng cây thư mục mục 12, đúng mã màu mục 6, đúng font mục 7. Tham khảo bản mẫu serlif.zip nhưng bỏ Express và Gemini."

Mỗi lần làm một bước, chạy thử xong mới sang bước kế tiếp.
