import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.module.scss';

export default function CardMenu({title, totalAyah, index, subtitle, onClick }) {
  return (
    <div className={style.cardMenu} onClick={onClick}>
      <div className={style.infoSurah}>
        <div className={style.noSurah}>
          {index}
        </div>
        <div className={style.itemSurahDetail}>
          <h4>{subtitle}</h4>
          <div>{totalAyah} Ayat</div>
        </div>
      </div>
      <div className="items-center">
        <h4 className={`arabic ${style.surahName}`}>{title}</h4>
      </div>
    </div>
  )
};


CardMenu.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.string,
  index: PropTypes.number, 
  totalAyah: PropTypes.number,
  subtitle: PropTypes.string,
  onClick: PropTypes.func
};

CardMenu.defaultProps = {
  title: '',
  description: '',
  index: null,
  totalAyah: null,
  subtitle: '',
  onClick: () => {}
};
