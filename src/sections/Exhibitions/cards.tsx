import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';

export default [
  {
    src: one,
    alt: 'Изображение афиши выставки Святослав Рихтер в кругу друзей. Москва — Коктебель',
    header: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
    date: 'Выставка до 20 ноября',
    description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    link: 'Купить билет',
    today: true,
    tmw: true,
  },
  {
    src: two,
    alt: 'Изображение афиши выставки Тату',
    header: 'Тату',
    date: 'Выставка до 27 сентября',
    description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    link: 'Купить билет',
    today: true,
  },
  {
    src: three,
    alt: 'Изображение афиши выставки От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
    header: 'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
    date: 'Выставка до 1 ноября',
    description: 'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    link: 'Купить билет',
    tmw: true,
  },
];

export type CardType = {
  src: string;
  alt: string;
  header: string;
  date: string;
  description: string;
  link: string;
  tmw?: boolean;
  today?: boolean;
  lang: 'RU' | 'EN';
};
