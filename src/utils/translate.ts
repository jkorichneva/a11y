const TRANSLATIONS = {
  museumName: {
    RU: 'Государственный музей изобразительных искусств имени А.С.Пушкина',
    EN: 'The Pushkin state museum of fine arts',
  },
  skipLink: {
    RU: 'Перейти к основному контенту',
    EN: 'Skip to main content',
  },
  search: {
    RU: 'Поиск по сайту',
    EN: 'Search',
  },
  changeLang: {
    RU: 'Изменить язык',
    EN: 'Change language',
  },
  login: {
    RU: 'Логин',
    EN: 'Login',
  },
  museum: {
    RU: 'Музей',
    EN: 'Museum',
  },
  visitors: {
    RU: 'Посетителям',
    EN: 'For Visitors',
  },
  exhibitions: {
    RU: 'Выставки и события',
    EN: 'Exhibitions and events',
  },
  all: {
    RU: 'Все',
    EN: 'All',
  },
  today: {
    RU: 'Сегодня',
    EN: 'Today',
  },
  tmw: {
    RU: 'Завтра',
    EN: 'Tomorrow',
  },
  exh_found: {
    RU: 'Найдено выставок - {amount}',
    EN: '{amount} exhibitions found',
  },
  buildings: {
    RU: 'Здания',
    EN: 'Buildings',
  },
  history: {
    RU: 'История',
    EN: 'History',
  },
  excursions: {
    RU: 'Экскурсии и лекции в прямом эфире',
    EN: 'Excursions and lectures online',
  },
  visitorsSpecial: {
    RU: 'Посетителям с ограниченными возможностями',
    EN: 'For visitors with disabilities',
  },
  tickets: {
    RU: 'Билеты и льготы',
    EN: 'Tickets and bonuses',
  },
  corruption: {
    RU: 'Противодействие коррупции',
    EN: 'Anti-corruption',
  },
  social: {
    RU: 'Соц. сети',
    EN: 'Social media',
  },
  tg: {
    RU: 'Канал в Телеграм',
    EN: 'Telegram channel',
  },
  fb: {
    RU: 'Сообщество в Фейсбук',
    EN: 'Group in facebook',
  },
  subscription: {
    RU: 'Подписка на новости',
    EN: 'News Letter Subscription',
  },
  email: {
    RU: 'Отправить письмо',
    EN: 'Send email',
  },
  subscribe: {
    RU: 'Подписаться',
    EN: 'Subscribe',
  },
  agree: {
    RU: 'Согласен на обработку персональных данных',
    EN: 'I agree to terms of personal data usage',
  },
  notEmpty: {
    RU: 'Поле не может быть пустым',
    EN: 'Field must not be empty',
  },
  notChecked: {
    RU: 'Необходимо согласиться с правилами обработки персональных данных',
    EN: 'You should agree to terms of personal data usage',
  },
  subscribed: {
    RU: 'Вы подписались на рассылку новостей',
    EN: 'You have subscribed to news letter',
  },
  enter: {
    RU: 'Вход',
    EN: 'Sign in',
  },
  searchSubmit: {
    RU: 'Искать',
    EN: 'Search',
  },
  online: {
    RU: 'Онлайн-трансляции',
    EN: 'Online sessions',
  },
  webinarTitle: {
    RU: 'Цвет настроения - доклад Глафиры Жур',
    EN: 'Mood color - Glafira Zhur',
  },
  afisha: {
    RU: 'Афиша',
    EN: 'Events',
  },
  buyTicket: {
    RU: 'Купить билет на выставку',
    EN: 'Buy ticket',
  },
  aboutMuseum: {
    RU: 'о музее',
    EN: 'about museum',
  },
  afishaCarousel: {
    RU: 'Слайдер с текущими выставками',
    EN: 'Slider with current exhibitions',
  },
  of: {
    RU: 'из',
    EN: 'of',
  },
  buyTicketBtn: {
    RU: 'Купить билет',
    EN: 'Buy ticket',
  },
  friend: {
    RU: 'Стать другом',
    EN: 'Become a friend',
  },
  onlineShop: {
    RU: 'Онлайн-магазин',
    EN: 'Online shop',
  },
  next: {
    RU: 'Следующий слайд',
    EN: 'Next slide',
  },
  prev: {
    RU: 'Предыдущий слайд',
    EN: 'Previous slide',
  },
  stop: {
    RU: 'Остановить автопролистывание',
    EN: 'Stop auto carousel',
  },
  resume: {
    RU: 'Запустить автопролистывание',
    EN: 'Resume auto carousel',
  },
};

export default function t(phrase: string, lang: 'RU' | 'EN'): string {
  // @ts-ignore
  return TRANSLATIONS[phrase] && TRANSLATIONS[phrase][lang] ? TRANSLATIONS[phrase][lang] : '';
}
