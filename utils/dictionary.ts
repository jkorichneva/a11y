const dictionary: Dictionary = {
  'Board page': {
    ru: 'Доска',
  },
};

type Dictionary = {
  [key: string]: Record<string, string>;
};

export default function translate(phrase: string, lang: string): string {
  return dictionary[phrase] && dictionary[phrase][lang] ? dictionary[phrase][lang] : phrase;
}
