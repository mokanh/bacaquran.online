import React from 'react';
import { useRouter } from 'next/router'

import CardMenu from '../component/item-surah';
import listSurah from '../data/surah-info';

export default function Home() {
  const router = useRouter();

  return (
    <div className="page-content">
      {
        listSurah.map((surah) => (
          <CardMenu 
            title={surah.name_arabic} 
            subtitle={surah.name_latin} 
            totalAyah={surah.ayah_count} 
            index={surah.surah_no} 
            onClick={() => router.push(`/${surah.surah_no}`)}
          />
        ))
      }
    </div>
  )
}
