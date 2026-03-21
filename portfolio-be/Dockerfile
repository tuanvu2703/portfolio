# Sử dụng môi trường Node.js bản nhẹ (alpine)
FROM node:18-alpine

# Tạo thư mục làm việc bên trong container
WORKDIR /app

# Copy 2 file package.json và package-lock.json vào trước
COPY package*.json ./

# Cài đặt các thư viện (dependencies)
RUN npm install

# Copy toàn bộ source code còn lại vào container
COPY . .

# Mở cổng (giả sử BE của bạn chạy cổng 5000, hãy đổi lại nếu bạn dùng cổng khác)
EXPOSE 5000

# Lệnh khởi chạy server (thay đổi tùy theo script trong package.json của bạn)
CMD ["npm", "start"]