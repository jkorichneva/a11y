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
};

export default function t(phrase: string, lang: 'RU' | 'EN'): string {
  // @ts-ignore
  return TRANSLATIONS[phrase] && TRANSLATIONS[phrase][lang] ? TRANSLATIONS[phrase][lang] : '';
}
