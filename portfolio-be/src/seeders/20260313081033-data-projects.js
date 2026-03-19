'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up(queryInterface, Sequelize) {
    const projects = [
      {
        id: '6616d5fa-23ff-4b13-9db1-80f24d628082',
        title: 'Eimu – Online Movie Streaming Platform | School Project',
        description: [
          "Engineered a highly responsive frontend for a movie streaming platform using Next.js and Tailwind CSS, ensuring optimal load speeds through SSR.",
          "Connected and consumed RESTful APIs to deliver seamless viewer experiences, supporting search, categorization.",
          "Developed interactive, user-centric features including robust authorization, personalized favorite saving, ratings, and a comment system."
        ],
        role: 'Frontend Developer',
        thumbnail_url: '',
        github_url: 'https://github.com/TinLite/eimu',
        start_date: new Date('2024-01'),
        end_date: new Date('2024-05'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '502e9987-e82f-4c7b-bd40-06abe10fd050',
        title: 'Nemo – Social Network Platform | School Project',
        description: [
          "the frontend development using ReactJS and Tailwind CSS, building a scalable and user-centric social platform.",
          "Consumed and managed complex RESTful APIs (served by a NestJS/MongoDB backend) to implement multimedia posting, user interactions, and robust JWT authentication.",
          "Integrated WebSocket to establish real-time features, successfully delivering live messaging and instant notification systems.",
          "Collaborated within an agile team environment, utilizing Git for strict version control and efficient code integration.",
        ],
        role: 'Frontend Developer (100% Frontend & API Integration)',
        thumbnail_url: 'https://i.ibb.co/gMLpMh9r/image-project.jpg',
        github_url: 'https://github.com/tuanvu2703/Nemo-social-network',
        start_date: new Date('2024-09'),
        end_date: new Date('2025-05'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        id: 'a3df6410-fb8b-42f7-be98-96fd3fe34945',
        title: ' Timetable Management System | Internship Project',
        description: [
          "Database Design & Backend Development: Architected a normalized relational database schema in PostgreSQL and built scalable RESTful APIs using Node.js/Express and Sequelize ORM.", 
          "Frontend & Real-time UI: Developed a responsive, role-specific management dashboard using React and Vite, integrating Socket.io for real-time notification updates.",
          "Comprehensive Management Module: Implemented robust end-to-end CRUD functionalities to manage core academic entities (users, classes, subjects, semesters, lecturers, students, rooms, and training programs), streamlining administrative workflows.",
          "Bulk Data Processing: Developed Excel data import and export features, enabling efficient mass data entry for the PostgreSQL database and generating structured reports for system administrators."
        ],
        thumbnail_url: 'https://i.ibb.co/YBMKKP4s/Screenshot-19-3-2026-18724-localhost.jpg',
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