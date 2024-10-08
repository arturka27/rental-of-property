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
          title: "Сдается дом Си-Джея из GTA San-Andreas",
          price: 2000,
          description:
            'ah shit, here we go again. Эй, Углепластик, это мой дом "Grove Street Home"! Хочешь пожить тут плати бабло, и вступай в банду Grove Street иначе OG Big Smooke сьест твой обед, и ты будешь потрачен!',
          photo: "/img/houses/cj.jpg",
          address: "Grove Street, Los Santos, San Andreas",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Сдается дом Спанч Боба квадратные штаны",
          price: 1000,
          description:
            'Спанч Боб:Сквидвард! Сквидвард! \nСквивард: Что? \nСпанч Боб: Я готов, Сквидвард! \n"ONE SECOND LATER..."\nСквидвард: Готов переехать?',
          photo: "/img/houses/bob.jpg",
          address: "124 Конфетная улица, Бикини-Боттом",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Сдается уютный дом в Спрингфилде",
          price: 2500,
          description:
            'Переезжайте жить в дом Симпсонов, ведь тут в отличии от гадалок, реально работают предсказания! Можете посетить бар "Таверна Мо"',
          photo: "/img/houses/sim.jpg",
          address: "742 Evergreen Terrace, Springfield",
        },
        {
          categoryId: 1,
          userId: 1,
          title: "Сдается очаровательный дом на облаках",
          price: 4000,
          description:
            'Погрузитесь в мир приключений, став арендаторами невероятного дома, который когда-то летал над облаками в мультфильме "Вверх"!',
          photo: "/img/houses/up.jpg",
          address: "123 Paradise Lane, Cloud City",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Сдается элегантная квартира Букиных",
          price: 3000,
          description:
            'Снимая данную квартиру вы автоматический вступите в наш коллектив "БЕЗ БАБ" и устроитесь в обувной магазин',
          photo: "/img/apartments/buk.webp",
          address: "27-6 Gagarin st., Ekaterinburd City",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Сдается уютная квартира в центре Нью-Йорка",
          price: 3500,
          description:
            'Погрузитесь в атмосферу Нью-Йорка с этим стильным и комфортабельным жильем, вдохновленным культовым сериалом "Друзья". Эта квартира в знаменитом здании на Манхэттене предлагает идеальное сочетание уюта, функциональности и нью-йоркского шика.',
          photo: "/img/apartments/friend.jpg",
          address: "90 Bedford Street, New York",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Сдается кварира родителей Дяди Фёдора",
          price: 6000,
          description:
            'Эта уютная и немного эксцентричная квартира, ставшем популярным благодаря мультфильму "Простоквашино". Основная особенность квартиры — это просторная комната, использующаяся как гараж и мастерская. Здесь вы найдете автомобиль, который часто нуждается в ремонте, а также разнообразные инструменты и детали для починки. Пространство наполнено домашним уютом и характерным стилем.',
          photo: "/img/apartments/prost.jpg",
          address: "Moscow, Russia",
        },
        {
          categoryId: 2,
          userId: 1,
          title: "Сдается квартира Шелдона и Леонарда",
          price: 2000,
          description:
            "Соглашение было написано Шелдоном и подписано Леонардом: \nПункт №1 - Животные запрещены. Исключение составляют служебные животные, такие как собаки-поводыри и, в перспективе, кибернетические мартышки-помощники.\nПункт №2 - Сосед наделен правом заполнять 50% общей площади в кубических метрах, уведомив другого по электронной почте.\nПункт №3 - При равенстве голосов в голосовании окончательное решение принимает Шелдон. Голосовать позволено только проживающим в квартире.\nПункт №4 - Температура на термостате устанавливается и регулируется Шелдоном (21 °C).\nПункт №5 - Оговоренная заполняемость душа — 1 человек, за исключением случаев нападения водорастворимых инопланетян.\nПункт №6 - Четверг вечер пиццы «Франкони». Выбор нового ресторана требует открытых заседаний.",
          photo: "/img/apartments/tbbt.jpg",
          address: "10-131, Los-Angeles, CA",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдается комната Эрика Картмана",
          price: 300,
          description: "Сэр, Вы выкручиваете мне яйца!\nЯ не сдам комнату за 2,50!",
          photo: "/img/rooms/cartman.webp",
          address: "28201, South Park, Colorado",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдается комната ДимДимыча",
          price: 600,
          description:
            'Главное не наступайте на фиксиков и делайте уроки вовремя',
          photo: "/img/rooms/dim.jpg",
          address: "FixicLandia",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдается комната Мэри",
          price: 500,
          description:
            'Комната маленькой девочки из мультфильма "Корпорация монстров" – это тёплое и уютное пространство, наполненное детскими вещами и игрушками. В комнате есть кровать с ярким постельным бельём, полки с мягкими игрушками и книгами, а также множество ярких декораций, таких как наклейки на стенах и постеры с любимыми персонажами. Атмосфера комнаты располагает к игре и веселью, с элементами, которые подчеркивают её детскую невозмутимость и фантазию.',
          photo: "/img/rooms/monstr.jpg",
          address: "2319 Hill Valley Street, Monstropolis",
        },
        {
          categoryId: 3,
          userId: 1,
          title: "Сдается комната Человека-Паука",
          price: 700,
          description:
            "В комнате много паутины, да это все паутина...",
          photo: "/img/rooms/spider.jpg",
          address: "20 Ingram Street, Queens, New York City, NY",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Properties", null, {});
  },
};
