import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import listSurah from '../data/surah-info';

export default function DetailSurah({ }) {
  const router = useRouter()
  const { surah_id: surahId } = router.query

  const [infoSurah, setInfoSurah] = useState({})
  useEffect(() => {
    if (surahId) {
      const isSurah = listSurah.find((res) => res.surah_no === parseInt(surahId))
      setInfoSurah(isSurah)
    }
  }, [surahId])

  return (
    <div className="page-content">
      <div className="header--detail-surah">
        <div className="title">
          {infoSurah.name_arabic}
        </div>
      </div>
      <h2 className="txt-bismillah"> ﷽ </h2>
    </div>
  )
};
