'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up(queryInterface, Sequelize) {
    const skills = [
      {
        id: '3512de7d-e1de-4fcc-a204-531f4558c023',
        name: 'JavaScript',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5a7c9907-25af-4ef9-8ab4-e0a3a55699e5',
        name: 'TypeScript',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a7f70172-69ca-4a5b-8132-000ac46b0b8d',
        name: 'React.js',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f00be516-4223-443b-887f-b6d6cabd8ffc',
        name: 'Next.js',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ab145bc1-7895-4b35-99b9-9f456a153685',
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'dc066cbd-0faa-46ba-b341-3502eb644fa7',
        name: 'CSS',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7255a300-a096-43b5-8dd7-6e1dae413462',
        name: 'HTML',
        category: 'Frontend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f831fdce-f0c1-4701-a5b6-a68350c537eb',
        name: 'PHP',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a6684ed9-0eeb-4ed4-9560-ec0c3be1b98a',
        name: 'MySQL',
        category: 'Database',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd9e9dc65-2c11-490c-849a-a503f36bf24f',
        name: 'PostgreSQL',
        category: 'Database',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5b3ffbad-6d9f-4d0a-b028-23216f674cce',
        name: 'Git',
        category: 'Tools',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6c6c9e17-0f2d-4b0e-8f57-4a86d9a70fb8',
        name: 'GitHub',
        category: 'Tools',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '8fdc7f93-9129-4ac4-a80b-c2ca1f8f9f8d',
        name: 'Postman',
        category: 'Tools',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
            {
          id: 'aa5bb631-f98f-43c6-9449-219f20ddb95d',
        name: 'Node.js',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '931992e7-c731-414b-85fd-cfa50d0b81ba',
        name: 'Express',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'fbfa5c51-e268-4151-82dd-83526c33e71c',
        name: 'NestJS',
        category: 'Backend',
        icon_url: 'https://img.icons8.com/color/96/nestjs.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4cb24ca9-1585-42a1-856f-4f715c13cd5b',
        name: 'Sequelize ORM',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '85f04c82-ed34-4313-8b99-67b35739d662',
        name: 'Python',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b371486d-023c-4256-93ed-b4e748ca0e11',
        name: 'Kotlin',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '468422ef-f02e-44f7-837a-66cdfdce3f83',
        name: 'Spring',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd145c7f5-db19-4aa5-876b-78773e1da1c5',
        name: 'MongoDB',
        category: 'Database',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '512a4477-db1a-41d7-bbe6-e9bdda9eb3a1',
        name: 'WebSocket',
        category: 'Backend',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Skills', skills, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};