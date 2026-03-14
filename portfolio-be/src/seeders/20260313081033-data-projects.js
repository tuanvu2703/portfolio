'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up(queryInterface, Sequelize) {
    const projects = [
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Đồ án trường: Hệ thống quản lý phòng thực hành',
        description: [
          "Xây dựng giao diện trực quan, dễ sử dụng bằng HTML, CSS và JavaScript; kết hợp với PHP để xử lý logic và truy vấn dữ liệu. Xây dựng hệ thống quản lý phòng thực hành, cho phép giảng viên đặt lịch sử dụng phòng, quản lý các khu, phòng và theo dõi lịch sử sử dụng phòng thực hành trong trường học. Triển khai ứng dụng trên localhost bằng XAMPP trong môi trường mô phỏng thực tế. Sử dụng MySQL để thiết kế cơ sở dữ liệu quan hệ, tối ưu truy vấn và đảm bảo tính toàn vẹn dữ liệu.",
        ],
        thumbnail_url: '',
        github_url: '',
        start_date: new Date('2023-09'),
        end_date: new Date('2023-12'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Đồ án trường: Website xem phim trực tuyến',
        description: [
          "Thiết kế UI hiện đại, dễ sử dụng với TailwindCSS, giao diện người dùng thân thiện, dễ sử dụng và tối ưu. Xây dựng một nền tảng xem phim trực tuyến, hỗ trợ tìm kiếm, phân loại và xem phim theo từng tập. Tích hợp hệ thống phân quyền người dùng và tính năng lưu phim yêu thích. Tích hợp hệ thống phân quyền người dùng (admin và người xem), cùng chức năng bình luận, đánh giá phim. Phát triển giao diện người dùng bằng React (NextJS), tối ưu tốc độ tải trang nhờ khả năng render phía server (SSR).",
        ],
        thumbnail_url: '',
        github_url: 'https://github.com/TinLite/eimu',
        start_date: new Date('2024-01'),
        end_date: new Date('2024-05'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Đồ án trường: Website Mạng xã hội',
        description: [
          "Tích hợp hệ thống xác thực và phân quyền (authentication/authorization)   Thiết kế hệ thống frontend hiện đại, tối ưu trải nghiệm người dùng bằng ReactJS kết hợp TailwindCS. Xây dựng một nền tảng mạng xã hội với các chức năng chính như: đăng bài viết (hình ảnh, video), bình luận, nhắn tin thời gian thực, báo cáo bài viết, quản lý người dùng, hệ thống thông báo, hệ thống kết bạn, tìm kiếm bạn và bài viết,... Quản lý mã nguồn với Git, phối hợp làm việc nhóm chặt chẽ, chia task và merge code hiệu quả",
        ],
        thumbnail_url: '',
        github_url: 'https://github.com/tuanvu2703/Nemo-social-network',
        start_date: new Date('2024-09'),
        end_date: new Date('2025-05'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Thực tập tại Trung tâm Công nghệ phần mềm Trường Đại học Cần Thơ (CUSC): Xây dựng hệ thống quản lý thời khoá biểu cho trường học',
        description: [
          "Tích hợp Thuật toán Di truyền (Genetic Algorithm) bằng Python để tự động hóa việc xếp lịch, xử lý thành công các ràng buộc cứng/mềm (tránh trùng phòng, trùng giờ giảng viên) và tự động phát hiện . Thiết kế và phát triển hệ thống RESTful API với Node.js/Express, thao tác trên cơ sở dữ liệu PostgreSQL chuẩn hóa (19 bảng) thông qua Sequelize ORM. Triển khai hệ thống xác thực và phân quyền (RBAC - Role-Based Access Control) bằng JWT bảo mật cho 4 nhóm người dùng (Admin, Cán bộ, Giảng viên, Sinh viên). Xây dựng giao diện responsive với React & Vite kết hợp TailwindCSS, cung cấp Dashboard quản lý riêng biệt theo vai trò và tích hợp Socket.io để cập nhật thông báo realtime.",
        ],
        thumbnail_url: '',
        github_url: '',
        start_date: new Date('2025-06'),
        end_date: new Date('2025-09'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Projects', projects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};