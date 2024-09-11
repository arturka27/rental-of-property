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
          photo: "https://www.noviydom.ru/upload/images/statyi/dom_hi-tech/4.jpg",
          address: "г. Подмосковье, пос. Наша Мечта, д. 1",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Современный загородный дом",
          price: 300000,
          description: "Дом с удобной планировкой, бассейном и террасой.",
          photo: "https://blift.ru/upload/iblock/690/6904180c9ff9da9784a980c70baf2297.jpg",
          address: "г. Краснодар, ул. Загородная, д. 7",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Деревянный дом в тихом районе",
          price: 200000,
          description: "Экологически чистый дом, со всеми удобствами и мебелью.",
          photo: "https://i.pinimg.com/originals/45/47/ba/4547ba2a1a7c7faea7778caad4b237f8.jpg",
          address: "г. Иркутск, ул. Тихая, д. 8",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Уютная однокомнатная квартира",
          price: 25000,
          description: "Современная квартира в центре города, с мебелью и техникой.",
          photo: "https://www.pufikhomes.com/wp-content/uploads/2022/02/silnyi-belyi-interier-kvartiry-v-tsentre-pitera-pufikhomes-1.jpg",
          address: "г. Москва, ул. Новой, д. 5",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Двухкомнатная квартира у парка",
          price: 45000,
          description: "Квартира с хорошей планировкой, рядом с зеленой зоной.",
          photo: "https://i.pinimg.com/originals/e7/92/f2/e792f212a5d9c91b78d8298d53fdf344.jpg",
          address: "г. Санкт-Петербург, пр. Парковый, д. 10",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Трехкомнатная квартира в новостройке",
          price: 70000,
          description: "Просторная квартира с современным ремонтом и большим балконом.",
          photo: "https://i.pinimg.com/originals/e0/35/52/e035523a856a39b7d5d7d14123cdf624.jpg",
          address: "г. Казань, ул. Современная, д. 20",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Комната в общежитии",
          price: 8000,
          description: "Комната в хорошем состоянии, с доступом на кухню.",
          photo: "https://i.pinimg.com/736x/43/c2/45/43c2456680e4f40487bef55e8cfe5cef.jpg",
          address: "г. Новосибирск, ул. Студенческая, д. 3",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдам комнату в квартире",
          price: 12000,
          description: "Комната в квартире с соседями, все удобства.",
          photo: "https://st.hzcdn.com/simgs/pictures/living-rooms/svetelka-korneev-design-workshop-img~f9a179bf0255ccdb_9-7322-1-9541d4c.jpg",
          address: "г. Екатеринбург, ул. Сосновая, д. 15",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Комната для студентов",
          price: 9000,
          description: "Удобная комната в 5 минутах от университета.",
          photo: "https://img.ixbt.site/live/images/original/03/53/89/2023/03/30/2fb1320db6.png",
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
