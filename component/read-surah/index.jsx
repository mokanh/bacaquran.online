import React from 'react';

import css from './style.module.scss';

export default function ReadSurah({data}) {
  const verses = data.text
  return(
    <div className={css.readSurahTxt}>
      {
        Object.keys(verses)
        .map(key => (
          <div className={`arabic ${css.lineVerse}`}>{verses[key]}</div>
        ))
      }
    </div>
  )
};