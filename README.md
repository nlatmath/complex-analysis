# Complex Analysis

A visual and interactive introduction to

Introduction to [Complex Analysis](https://complex-analysis.github.io) with a visual and interactive approach.

- Original English version: [Complex Analysis](https://complex-analysis.github.io).
- Vietnamese translation: [Complex Analysis](https://lnhutnam.github.io/complex-analysis/)

##### ISBN 978-0-6485736-0-9

![alt tag](preview.jpg)

---

## DẪN NHẬP

Việc nghiên cứu giải tích phức rất quan trọng đối với sinh viên kỹ thuật và khoa học tự nhiên, đồng thời là một môn học trung tâm trong toán học. Ngoài việc có tính thanh lịch về mặt toán học, giải tích phức còn cung cấp những công cụ mạnh mẽ để giải quyết các bài toán rất khó hoặc hầu như không thể giải quyết bằng bất kỳ cách nào khác.

Trong cuốn sách này, bạn sẽ tìm thấy các ví dụ, bài tập và ứng dụng cho phép bạn khám phá giải tích phức bằng cách sử dụng sức mạnh tương tác trực quan của máy tính (hoặc máy tính bảng).

CẬP NHẬT! Trang web này đã nhận được rất nhiều lượt truy cập, điều này thật tuyệt vời. Tôi đã sửa một số lỗi chính tả và chỉnh sửa một số ứng dụng để có hiệu suất tốt hơn. Tôi cũng đang lên kế hoạch thêm một số phần mới về tích phân của các hàm phức. Cuối cùng, tôi sẽ bắt đầu phiên bản tiếng Tây Ban Nha để nhiều người hơn có thể thưởng thức việc học và chơi với giải tích phức.

Sẵn sàng bắt đầu? Nhảy tới [Mục lục](https://complex-analysis.github.io/content/table_of_contents.html)

---

## VỀ CUỐN SÁCH NÀY

Cuốn sách này là một giới thiệu tương tác về lý thuyết và ứng dụng của các hàm phức từ góc độ trực quan. Tuy nhiên, nó <strong>không</strong> bao gồm tất cả các chủ đề của một khóa học tiêu chuẩn. Trên thực tế, đây là một tập hợp các chủ đề được chọn lọc và các ứng dụng tương tác có thể được sử dụng như một tài nguyên học tập bổ sung bởi bất kỳ ai quan tâm đến việc học tập nhánh toán học hấp dẫn này.

Một số chủ đề được đề cập ở đây là số học cơ bản của số phức, các hàm phức, bề mặt Riemann, giới hạn, đạo hàm, tô màu miền, cảnh quan giải tích và một số ứng dụng của ánh xạ bảo giác.

Điều làm cho cuốn sách trực tuyến này khác biệt với các sách giáo khoa truyền thống khác ngay từ đầu là việc sử dụng các ứng dụng tương tác cho phép bạn khám phá các tính chất của số phức theo cách hình học và phân tích các hàm phức bằng cách sử dụng các kỹ thuật khác nhau để hình dung chúng. Để thiết kế các ứng dụng, tôi đã sử dụng các phần mềm mã nguồn mở sau: [GeoGebra](https://geogebra.org/), [p5.js](https://p5js.org/), [Cindy.js](https://cindyjs.org/) và [MathCell](http://mathcell.org/).

Mặc dù tôi ủng hộ việc sử dụng máy tính như một công cụ hỗ trợ cho lý luận hình học, tôi rất khuyến khích bạn rèn luyện kỹ năng giải quyết vấn đề của mình bằng cách giải các bài tập được đề xuất (hoặc điền vào các chi tiết còn thiếu) mà bạn sẽ gặp phải trong các phần.

Hãy nghĩ về máy tính như một nhà vật lý nghĩ về phòng thí nghiệm của mình. Nó có thể được sử dụng để kiểm tra các ý tưởng hiện có về thế giới của chúng ta, hoặc như một công cụ để khám phá những hiện tượng mới, từ đó đặt ra những ý tưởng hoặc thách thức mới cho việc giải thích chúng. Trong các phần, tôi đã cung cấp hướng dẫn chi tiết (trong một số trường hợp) để khám phá các khái niệm và mối quan hệ về số phức bằng cách sử dụng các phần mềm cụ thể, tuy nhiên bạn vẫn phải ghi nhớ rằng phần cứng và phần mềm máy tính là những thứ phù du so với các ý tưởng toán học, vốn là vĩnh cửu.

---

## LỜI NGƯỜI DỊCH

[Phần này có vẻ trống trong tài liệu gốc]

---

## CÁC VẤN ĐỀ PHÁT SINH?

Tất nhiên, không có dự án nào như thế này có thể tránh khỏi lỗi và sự thiếu sót. Nếu bạn tìm thấy các ứng dụng không chạy đúng, hoặc các ví dụ không được giải thích chính xác, hoặc lỗi chính tả, vui lòng [báo cáo chúng tại kho lưu trữ GitHub của dự án này](https://github.com/complex-analysis/complex-analysis.github.io/issues). Cảm ơn sự giúp đỡ của bạn!

---

## VỀ CÁC BẢN THIẾT KẾ CƠ SỞ

Thiết kế ban đầu của cuốn sách này dựa trên cuốn sách tuyệt vời [Collision Detection](http://www.jeffreythompson.org/collision-detection/index.php) được viết bởi [Jeffrey Thompson](http://www.jeffreythompson.org/). Nếu bạn muốn tìm hiểu về các thuật toán đằng sau va chạm sử dụng các hình dạng hình học cơ bản, bạn nên xem nó! Phiên bản hiện tại, được phát hành năm 2024, được xây dựng nhờ các dự án sau:

<ul>
<li>
<a href="https://github.com/vincentdoerig/latex-css" target="_blank">LaTeX.CSS</a> by Vincent Dörig
</li>
<li>
<a href="https://github.com/davidrzs/latexcss" target="_blank">LatexCSS</a> by David Zollikofer
</li>
<li>
<a href="https://github.com/magicbookproject" target="_blank">The Magic Book project</a>.
</li>
</ul>

---

## ❤️ Về cách hỗ trợ dự án và tiếp tục cùng nhau phát triển nó!

Cuốn sách tương tác này miễn phí cho mọi người, vì tôi tin rằng mọi người nên có quyền tiếp cận với các tài nguyên học tập chất lượng cao để khám phá và học toán học. Đó là lý do tại sao nhiều người dùng chọn đóng góp cho những nỗ lực của tôi. Nếu bạn tin tưởng vào những gì tôi làm và muốn giúp tôi trên hành trình này, bạn có thể làm điều đó ngay bây giờ với các liên kết dưới đây:

- [Patreon](https://www.patreon.com/jcponce)

- [PayPal](https://paypal.me/jcarlosponce/3)

- [Áo thun](https://jcponcemath.secure-decoration.com/shop/category/complex?c=4336971)

Những đóng góp của bạn giúp tôi duy trì trang web này và, quan trọng hơn, đảm bảo nó vẫn có thể truy cập miễn phí cho bất kỳ ai muốn khám phá lĩnh vực toán học hấp dẫn này — mà không có bất kỳ quảng cáo gây mất tập trung nào.

---

## GIẤY PHÉP/ BẢN QUYỀN

Cuốn sách này được phát hành dưới giấy phép: [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).