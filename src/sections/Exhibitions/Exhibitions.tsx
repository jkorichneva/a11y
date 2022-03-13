import React, { useEffect, useState } from 'react';
import styles from './Exhibitions.module.css';
import commonStyles from '../../Landing/Landing.module.css';
import t from '../../utils/translate';
import Card from '../../components/Card/Card';
import cards from './cards';

type ExhibitionsProps = {
  lang: 'RU' | 'EN';
};

const filters = [
  { name: 'all', value: 'filter-all' },
  { name: 'today', value: 'filter-today' },
  { name: 'tmw', value: 'filter-tmw' },
];

function Exhibitions(props: ExhibitionsProps): JSX.Element {
  const { lang } = props;
  const [filter, setFilter] = React.useState<'filter-all' | 'filter-today' | 'filter-tmw'>('filter-all');
  const [shownCards, setShownCards] = useState(cards);
  const [liveArea, setLiveArea] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const setChecked = () => {
    setFilter(filter);
  };

  const setCheckedToPreviousItem = () => {
    const prev = filters.findIndex((item) => item.value === filter);
    if (prev === 0) {
      // @ts-ignore
      setFilter(filters[filters.length - 1].value);
    } else {
      // @ts-ignore
      setFilter(filters[prev - 1].value);
    }
  };

  const setCheckedToNextItem = () => {
    const prev = filters.findIndex((item) => item.value === filter);
    if (prev === filters.length - 1) {
      // @ts-ignore
      setFilter(filters[0].value);
    } else {
      // @ts-ignore
      setFilter(filters[prev + 1].value);
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    let flag = false;
    switch (event.key) {
      case ' ':
      case 'Enter':
        setChecked();
        flag = true;
        break;

      case 'Up':
      case 'ArrowUp':
      case 'Left':
      case 'ArrowLeft':
        setCheckedToPreviousItem();
        flag = true;
        break;

      case 'Down':
      case 'ArrowDown':
      case 'Right':
      case 'ArrowRight':
        setCheckedToNextItem();
        flag = true;
        break;

      default:
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  useEffect(() => {
    const filterName = filter === 'filter-tmw' ? 'tmw' : 'today';
    const currentCards = cards.filter((item) => filter === 'filter-all' || !!item[filterName]);
    setShownCards(currentCards);
    if (!loaded) {
      setLoaded(true);
    }
    if (loaded) {
      setLiveArea(true);
    }
  }, [filter]);

  useEffect(() => {
    if (liveArea && loaded) {
      setTimeout(() => setLiveArea(false), 5000);
    }
  }, [liveArea]);

  return (
    <section className={styles.Exhibitions} aria-labelledby="exhibitions-sec-h" id="exhibitions">
      <h2 id="exhibitions-sec-h" className={styles.Header}>{t('exhibitions', lang)}</h2>
      <div className={commonStyles.VHidden} id="radiogroup-label">Фильтр по дате</div>
      <ul
        role="radiogroup"
        className={styles.Filters}
        aria-activedescendant={filter}
        tabIndex={0}
        onKeyDown={(event) => handleKeydown(event)}
        aria-labelledby="radiogroup-label"
      >
        {filters.map((item) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            id={item.value}
            role="radio" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
            key={item.value}
            aria-checked={filter === item.value}
            className={filter === item.value ? styles.LiChecked : styles.Li}
            /*
            //@ts-ignore */
            onClick={() => setFilter(item.value)}
          >
            {t(item.name, lang)}
          </li>
        ))}
      </ul>
      {liveArea && <div role="alert" aria-live="polite" className={commonStyles.VHidden}>{t('exh_found', lang).replace('{amount}', shownCards.length.toString())}</div>}
      <ul className={styles.Cards}>
        {shownCards.length && shownCards.map((card) => (
          <Card {...card} lang={lang} />
        ))}
      </ul>
    </section>
  );
}

export default Exhibitions;
