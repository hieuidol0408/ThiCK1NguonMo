# Hướng Dẫn Deploy (Final Exam)

Dự án này bao gồm 2 phần được deploy trên 2 nền tảng khác nhau để đáp ứng yêu cầu:

1.  **Backend (Python/Flask)**: Deploy lên **Render**.
2.  **Frontend (Node.js)**: Deploy lên **Vercel**.

---

## 1. Deploy Backend (Python) lên Render

Render là nền tảng Cloud phù hợp cho Backend và Docker.

**Các bước thực hiện:**

1.  Truy cập [Render Dashboard](https://dashboard.render.com/) và đăng nhập (bằng GitHub).
2.  Chọn **New +** -> **Web Service**.
3.  Chọn **Build and deploy from a Git repository**.
4.  Kết nối với Repository `ThiCK1NguonMo` của bạn.
5.  Render sẽ tự động phát hiện file `render.yaml` trong source code của bạn và điền sẵn cấu hình:
    - **Name**: `final-exam-python`
    - **Environment**: `Python`
    - **Build Command**: `cd project-python && pip install -r requirements.txt`
    - **Start Command**: `cd project-python && python app.py`
6.  Bấm **Create Web Service**.

**Thiết lập Auto-Deploy (CI/CD):**

1.  Trong trang Settings của dịch vụ vừa tạo trên Render, tìm mục **Deploy Hook**.
2.  Copy URL của Deploy Hook (ví dụ: `https://api.render.com/deploy/srv-xxxxx?key=xxxxx`).
3.  Vào GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**.
4.  Tạo New Repository Secret:
    _ Name: `RENDER_DEPLOY_HOOK_PYTHON`
    _ Value: (Dán URL vừa copy vào).
    -> Bất cứ khi nào bạn push code vào `main`, GitHub Action sẽ chạy test và gọi hook này để Render build lại server mới nhất.

---

## 2. Deploy Frontend (Node.js) lên Vercel

Vercel là nền tảng tối ưu nhất cho Frontend và Static Site.

**Các bước thực hiện:**

1.  Truy cập [Vercel Dashboard](https://vercel.com/dashboard) và đăng nhập (bằng GitHub).
2.  Bấm **Add New...** -> **Project**.
3.  Ở mục **Import Git Repository**, chọn Repo `ThiCK1NguonMo` và bấm **Import**.
4.  Ở màn hình **Configure Project**:
    - **Project Name**: `final-exam-node` (hoặc tên tùy thích).
    - **Root Directory**: Bấm **Edit** và chọn folder `project-node`. (Bước này QUAN TRỌNG).
    - **Framework Preset**: Chọn **Other** (hoặc để Vercel tự phát hiện).
    - **Build Command**: `npm install` (hoặc để trống nếu project đơn giản).
    - **Output Directory**: `public` (Vì file html nằm ở đây).
5.  Bấm **Deploy**.

**Kết quả:**
Vercel sẽ cấp cho bạn một domain (ví dụ: `final-exam-node.vercel.app`).

---

## 3. Kiểm thử kết quả

- **GitHub Actions**: Vào tab "Actions" trên GitHub để xem quy trình test tự động chạy (xanh lá cây là OK).
- **Web**: Truy cập vào link Vercel để xem Frontend.
- **API**: Truy cập vào link Render để xem Backend.
