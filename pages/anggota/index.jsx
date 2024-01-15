import React from 'react'
import Data from './anggota.json'
import { useRouter } from 'next/router'

export default function anggota() {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
            {/* <Header /> */}
                    <div className="px-20 mt-[140px]">
                          {Data.map((item) => (
                            <>
                              <div onClick={() => router.push(`./anggota/${item.nama}`)} className='flex hover:bg-sky-300 cursor-pointer mb-5 p-2'>
                                <span className='w-1/12'>{item.id}</span>
                                <p className='w-5/12'>{item.nis}</p>
                                <p className='w-full'>{item.nama}</p>
                              </div>
                            </>
                          ))}
                    </div>
            {/* <Footer /> */}
    </div>
  )
}
