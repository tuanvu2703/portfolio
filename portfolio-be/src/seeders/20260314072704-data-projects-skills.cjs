"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const projectskills = [
      // ==========================================
      // 1. Đồ án trường: Hệ thống quản lý phòng thực hành
      // Tech: PHP, MySQL, HTML, CSS, JavaScript
      // ==========================================

      // ==========================================
      // 2. Đồ án trường: Website xem phim trực tuyến
      // Tech: TypeScript, Kotlin, React (NextJS), Spring, MongoDB, TailwindCSS, Git
      // ==========================================
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "5a7c9907-25af-4ef9-8ab4-e0a3a55699e5",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // TypeScript
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "b371486d-023c-4256-93ed-b4e748ca0e11",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Kotlin
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "a7f70172-69ca-4a5b-8132-000ac46b0b8d",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // React.js
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "f00be516-4223-443b-887f-b6d6cabd8ffc",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Next.js
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "468422ef-f02e-44f7-837a-66cdfdce3f83",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Spring
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "d145c7f5-db19-4aa5-876b-78773e1da1c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // MongoDB
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "ab145bc1-7895-4b35-99b9-9f456a153685",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Tailwind CSS
      {
        project_id: "6616d5fa-23ff-4b13-9db1-80f24d628082",
        skill_id: "5b3ffbad-6d9f-4d0a-b028-23216f674cce",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Git

      // ==========================================
      // 3. Đồ án trường: Mạng xã hội
      // Tech: Javascript, ReactJS, TailwindCSS, NestJS, MongoDB, Git, WebSocket
      // ==========================================
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "3512de7d-e1de-4fcc-a204-531f4558c023",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // JavaScript
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "a7f70172-69ca-4a5b-8132-000ac46b0b8d",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // React.js
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "ab145bc1-7895-4b35-99b9-9f456a153685",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Tailwind CSS
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "fbfa5c51-e268-4151-82dd-83526c33e71c",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // NestJS
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "d145c7f5-db19-4aa5-876b-78773e1da1c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // MongoDB
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "5b3ffbad-6d9f-4d0a-b028-23216f674cce",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Git
      {
        project_id: "502e9987-e82f-4c7b-bd40-06abe10fd050",
        skill_id: "512a4477-db1a-41d7-bbe6-e9bdda9eb3a1",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // WebSocket

      // ==========================================
      // 4. Thực tập (CUSC): Hệ thống quản lý thời khoá biểu
      // Tech: ReactJS, Tailwind CSS, Node.js, Express, PostgreSQL, Sequelize ORM, Python, Socket.io
      // ==========================================
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "a7f70172-69ca-4a5b-8132-000ac46b0b8d",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // React.js
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "ab145bc1-7895-4b35-99b9-9f456a153685",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Tailwind CSS
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "aa5bb631-f98f-43c6-9449-219f20ddb95d",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Node.js
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "931992e7-c731-414b-85fd-cfa50d0b81ba",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Express
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "d9e9dc65-2c11-490c-849a-a503f36bf24f",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // PostgreSQL
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "4cb24ca9-1585-42a1-856f-4f715c13cd5b",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Sequelize ORM
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "85f04c82-ed34-4313-8b99-67b35739d662",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Python
      {
        project_id: "a3df6410-fb8b-42f7-be98-96fd3fe34945",
        skill_id: "512a4477-db1a-41d7-bbe6-e9bdda9eb3a1",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, // Socket.io (WebSocket)
    ];

    await queryInterface.bulkInsert("Project_skills", projectskills, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Project_skills", null, {});
  },
};
