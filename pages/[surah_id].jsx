import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import listSurah from '../data/surah-info';
import generateSurah from '../data/generateSurah';
import ReadSurah from '../component/read-surah';

function DetailSurah({surah}) {
  const router = useRouter()
  const { surah_id: surahId } = router.query
  const [dataSurah, setDataSurah] = useState({})
  

  // get info surah
  useEffect(() => {
    if (surah) {
      setDataSurah(surah[surahId])
    }
  }, [surah, surahId])

  return (
    <div className="page-content">
      <div className="page-content--header">
        <div className="surah-info">
          <div className="arabic"> {dataSurah.name} </div> 
          <div className="surah-info--title">Surah {dataSurah.name_latin}</div> 
          <div className="mb-3">{dataSurah.number_of_ayah} Ayat</div>
        </div>
      </div>
      <h2 className="txt-bismillah"> ﷽ </h2>
      {
        dataSurah?.text && 
        <ReadSurah data={dataSurah}/>
      }
    </div>
  )
};


export async function getStaticPaths() {
  const paths = listSurah.map((surah) => ({
    params: { surah_id: surah.surah_no.toString() },
  }))

  return { paths, fallback: false }
}


// This function gets called at build time
export async function getStaticProps({params}) {
  const res = generateSurah(params.surah_id)
  const surah = await JSON.parse(res)

  return {
    props: {
      surah
    },
  }
}

export default DetailSurah
