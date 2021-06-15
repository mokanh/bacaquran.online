import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import ItemSurah from '../component/item-surah';
import listSurah from '../data/surah-info';

export default function Home() {
  const router = useRouter();

  return (
    <div className="page-content">
      <div className="page-content--header">
        <Image src="/images/alquran.png" alt="al-quran text" width={100} height={100}  />
      </div>
      {
        listSurah.map((surah) => (
          <ItemSurah 
            key={surah.surah_no}
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
