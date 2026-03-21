FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Cài đặt thư viện
RUN npm install

# Copy source code
COPY . .

# Build project Next.js để tối ưu hóa cho môi trường production
RUN npm run build

# Next.js thường chạy ở cổng 3000
EXPOSE 3000

# Khởi chạy Next.js ở chế độ production
CMD ["npm", "start"]