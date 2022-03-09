import React, { useRef } from 'react';
import styles from './Museum.module.css';
import t from '../../utils/translate';
import Buildings from '../../components/Buildings/Buildings';
import History from '../../components/History/History';

type MuseumProps = {
  lang: 'RU' | 'EN';
};

function Museum(props: MuseumProps): JSX.Element {
  const { lang } = props;
  const [tab, setTab] = React.useState<'history' | 'buildings'>('buildings');
  const buildingsRef = useRef(null);
  const historyRef = useRef(null);

  const handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        setTab(tab === 'history' ? 'buildings' : 'history');
        break;
      case 'Up':
      case 'ArrowUp':
      case 'Left':
      case 'ArrowLeft':
      case 'Down':
      case 'ArrowDown':
      case 'Right':
      case 'ArrowRight':
      case 'Home':
      case 'End':
        if (tab === 'history') {
          // @ts-ignore
          buildingsRef?.current?.focus();
        } else {
          // @ts-ignore
          historyRef?.current?.focus();
        }
        break;
      default:
        break;
    }
  };

  return (
    <section aria-labelledby="museum-sec-h" id="museum">
      <h2 className={styles.Header} id="museum-sec-h">{t('museum', lang)}</h2>
      <div role="tablist" aria-label="О музее">
        <button
          role="tab"
          className={tab === 'buildings' ? styles.TabActive : styles.Tab}
          aria-selected={tab === 'buildings'}
          tabIndex={tab === 'buildings' ? 0 : -1}
          id="buildings-tab"
          ref={buildingsRef}
          aria-controls="buildings-tabpanel"
          onClick={() => setTab('buildings')}
          onKeyDown={(event) => handleKeydown(event)}
        >
          {t('buildings', lang)}
        </button>
        <button
          role="tab"
          className={tab === 'history' ? styles.TabActive : styles.Tab}
          aria-selected={tab === 'history'}
          tabIndex={tab === 'history' ? 0 : -1}
          id="history-tab"
          ref={historyRef}
          aria-controls="history-tabpanel"
          onClick={() => setTab('history')}
          onKeyDown={(event) => handleKeydown(event)}
        >
          {t('history', lang)}
        </button>
      </div>
      <div>
        {tab === 'buildings' && <div aria-labelledby="buildings-tab" id="buildings-tabpanel" className={styles.Panel}><Buildings /></div>}
        {tab === 'history' && <div aria-labelledby="history-tab" id="history-tabpanel" className={styles.Panel}><History /></div>}
      </div>
    </section>
  );
}

export default Museum;
