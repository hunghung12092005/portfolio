# Frontend Architecture

## Purpose

Frontend nay chi lo phan giao dien va goi API. Khong chua business logic backend hay secret.

## Main folders

- `src/components`: UI components
- `src/data`: du lieu hien thi local
- `src/lib`: helper functions va API primitives
- `src/services`: API client theo tung use-case
- `public`: static assets

## API contract currently used

- `POST /api/contact`

Frontend build URL theo quy tac:

- Dev: can `VITE_API_BASE_URL` de goi truc tiep backend
- Prod: uu tien `VITE_API_BASE_URL` neu duoc cung cap
- Prod: fallback sang same-origin `/api/...` neu FE va BE deploy chung domain

Frontend khong xu ly routing backend, CORS hay proxy server logic.
