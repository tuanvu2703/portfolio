FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./

# Cài đặt thư viện
RUN pnpm install

# Copy source code
COPY . .

# Build arguments
ARG NEXT_PUBLIC_BACKEND_URL

# Build project Next.js để tối ưu hóa cho môi trường production
RUN NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL} pnpm run build

# Next.js thường chạy ở cổng 3000
EXPOSE 3000

# Khởi chạy Next.js ở chế độ production
CMD ["pnpm", "start"]