# Frontend

Frontend la giao dien portfolio, duoc xay dung bang React, Vite, TypeScript va Tailwind CSS. Phan nay chi xu ly UI va goi API, khong chua secret hay logic backend.

Tong quan kien truc nhanh o [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Cong nghe

- React 19
- Vite 8
- TypeScript
- Tailwind CSS
- Framer Motion

## Cau truc chinh

- `src/components/`: cac section va UI component
- `src/data/`: du lieu hien thi local
- `src/services/`: cac service goi API theo use-case
- `src/lib/`: helper dung chung nhu build URL API
- `public/`: static files

## Yeu cau

- Node.js 18+
- Yarn

## Cai dat va chay local

```bash
cd frontend
yarn install
cp .env.example .env.local
yarn dev
```

Mac dinh Vite chay tai `http://localhost:5173`.

## Bien moi truong

File `.env.local`:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

Y nghia:

- Local dev: bat buoc set `VITE_API_BASE_URL` de frontend goi truc tiep backend
- Production: neu co `VITE_API_BASE_URL`, frontend goi toi domain do
- Production: neu khong set, frontend fallback ve same-origin `/api/...`

## Script

```bash
yarn dev
yarn build
yarn preview
yarn lint
```

## API hien dang su dung

- `POST /api/contact`

Request body:

```json
{
  "name": "Nguyen Van A",
  "email": "a@example.com",
  "message": "Xin chao"
}
```

Neu backend tra loi loi hoac JSON khong hop le, frontend se hien thong bao loi tuong ung.

## Build production

```bash
cd frontend
yarn build
```

File build duoc tao trong `frontend/dist/`.
