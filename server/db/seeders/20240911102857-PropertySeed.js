"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Properties",
      [
        {
          categoryId: 1,
          userId: 1,
          title: "Кирпичный дом с участком",
          price: 150000,
          description: "Дом в пригороде с ухоженным садом и возможностью расширения.",
          photo: "http://placehold.it/120x100/",
          address: "г. Подмосковье, пос. Наша Мечта, д. 1",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Современный загородный дом",
          price: 300000,
          description: "Дом с удобной планировкой, бассейном и террасой.",
          photo: "http://placehold.it/120x100/",
          address: "г. Краснодар, ул. Загородная, д. 7",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Деревянный дом в тихом районе",
          price: 200000,
          description: "Экологически чистый дом, со всеми удобствами и мебелью.",
          photo: "http://placehold.it/120x100/",
          address: "г. Иркутск, ул. Тихая, д. 8",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Уютная однокомнатная квартира",
          price: 25000,
          description: "Современная квартира в центре города, с мебелью и техникой.",
          photo: "http://placehold.it/120x100/",
          address: "г. Москва, ул. Новой, д. 5",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Двухкомнатная квартира у парка",
          price: 45000,
          description: "Квартира с хорошей планировкой, рядом с зеленой зоной.",
          photo: "http://placehold.it/120x100/",
          address: "г. Санкт-Петербург, пр. Парковый, д. 10",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Трехкомнатная квартира в новостройке",
          price: 70000,
          description: "Просторная квартира с современным ремонтом и большим балконом.",
          photo: "http://placehold.it/120x100/",
          address: "г. Казань, ул. Современная, д. 20",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Комната в общежитии",
          price: 8000,
          description: "Комната в хорошем состоянии, с доступом на кухню.",
          photo: "http://placehold.it/120x100/",
          address: "г. Новосибирск, ул. Студенческая, д. 3",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдам комнату в квартире",
          price: 12000,
          description: "Комната в квартире с соседями, все удобства.",
          photo: "http://placehold.it/120x100/",
          address: "г. Екатеринбург, ул. Сосновая, д. 15",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Комната для студентов",
          price: 9000,
          description: "Удобная комната в 5 минутах от университета.",
          photo: "http://placehold.it/120x100/",
          address: "г. Ростов-на-Дону, ул. Учебная, д. 12",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null, {});
  },
};
