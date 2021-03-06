/* eslint-disable max-len */
import React from 'react';
import styles from './History.module.css';

export default function History() {
  return (
    <div className={styles.Text}>
      <p>
        Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.
      </p>
      <p>
        В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.
      </p>
      <p>
        В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.
      </p>
      <p>В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.</p>
      <a href="/a11y/history" className={styles.Link}>Читать далее</a>
    </div>
  );
}
