import React from 'react'
import Data from './anggota.json'

export default function detailAnggota() {
  return (
    <div className='flex flex-col'>
            {/* <Header /> */}
                <div className="flex-1">
                    <div className="ml-14 mt-[140px]">
                        <div className="text-center font-mono selection:bg-green-500 selection:text-white">
                            {Data.map((item) => (
                                <>
                                    <p className='text-2xl'><span className='text-red-500 font-semibold'>{item.nama}</span></p>
                                    <img src="/xirpl3/xirpl3photoprofil.png" className="mx-auto w-56 mt-5" width="50" height="50" alt="xirpl3" />
                                    <div className='mt-10 mb-16'>
                                        <h1 className="text-slate-700 text-3xl font-medium">Ehhh, kamu salah masuk halaman?</h1>
                                        <h2 className="text-slate-700 text-4xl font-bold"><span className="text-red-500">Aku</span> tidak berniat jahat kok oni-sann....</h2>
                                        <h3 className="text-slate-700 text-2xl font-bold mt-5"><span className="text-red-500">Oni-san nyasar yah haha, </span> Silahkan pilih halaman yang berada di navbar</h3>
                                        {/* <h3 className="text-slate-700 text-2xl font-bold">atau<span className="text-red-500"> Oni-san </span> tolong tunggu sampai 7 detik untuk berpindah halaman</h3> */}
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            {/* <Footer /> */}
    </div>
  )
}
