import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';
import commonStyles from '../../Landing/Landing.module.css';
import t from '../../utils/translate';
import slides from './slides';

type CarouselProps = {
  lang: 'RU' | 'EN'
};

export default function Carousel({ lang }: CarouselProps) {
  const [live, setLive] = useState('off');
  const [timer, setTimer] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const setNext = () => {
    setCurrentSlide((slide) => (slide + 1 > slides.length - 1 ? 0 : slide + 1));
  };

  const setPrev = () => {
    if (currentSlide - 1 < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const intervalF = () => {
    const interval = setInterval(setNext, 10000);
    // @ts-ignore
    setTimer(interval);
  };
  const toggleOff = () => {
    // @ts-ignore
    clearInterval(timer);
    setTimer(null);
    setLive('polite');
  };

  const toggleOn = () => {
    intervalF();
    setLive('off');
  };

  const toggleAuto = () => {
    if (timer) {
      toggleOff();
    } else {
      toggleOn();
    }
  };

  useEffect(() => {
    intervalF();
    // @ts-ignore
    return () => clearInterval(timer);
  }, []);

  // @ts-ignore
  return (
    <section id="afisha" aria-labelledby="afisha-sec-h">
      <h2 id="afisha-sec-h" className={commonStyles.VHidden}>{t('afisha', lang)}</h2>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <section
        role="region"
        aria-roledescription="carousel"
        aria-label={t('afishaCarousel', lang)}
        className={styles.Carousel}
      >
        <button
          type="button"
          aria-label={t(timer ? 'stop' : 'resume', lang)}
          onClick={() => toggleAuto()}
          className={timer ? styles.TogglePause : styles.ToggleResume}
        />
        <button
          type="button"
          aria-controls="myCarousel-items"
          aria-label={t('prev', lang)}
          onClick={() => {
            if (timer) {
              toggleAuto();
            }
            setPrev();
          }}
          className={styles.Prev}
        />
        <button
          type="button"
          aria-controls="myCarousel-items"
          aria-label={t('next', lang)}
          onClick={() => {
            if (timer) {
              toggleAuto();
            }
            setNext();
          }}
          className={styles.Next}
        />
        {/*
        //@ts-ignore */}
        <div aria-live={live} id="myCarousel-items">
          {slides.map((item, index) => (
            <div
              role="group"
              aria-roledescription="slide"
              className={index === currentSlide ? styles.SlideActive : styles.Slide}
              aria-label={`${index + 1} ${t('of', lang)} ${slides.length}`}
            >
              <Image src={item.image} layout="responsive" objectFit="contain" alt={lang === 'RU' ? item.headerRu : item.headerEn} role="presentation" />
              <div className={commonStyles.VHidden}>{lang === 'RU' ? item.headerRu : item.headerEn}</div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={styles.Link}>{lang === 'RU' ? item.button : item.buttonEn}</a>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.Btns}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.LinkInline}>{t('buyTicketBtn', lang)}</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.LinkInline}>{t('friend', lang)}</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.LinkInline}>{t('onlineShop', lang)}</a>
      </div>
    </section>
  );
}
