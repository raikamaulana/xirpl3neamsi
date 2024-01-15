import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='text-white'>
            <div className='bg-blue-900 flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-10'>
                <div className='bg-blue-500'>
                    <div className='flex items-center'>
                        <h1>XI RPL 3</h1>
                        <Image src="/xirpl3/xirpl3photoprofil.png" width="30" height="30" alt="xirpl3l" aria-hidden="true" />
                    </div>
                    <div className='flex items-center bg-red-500'>
                        <FaInstagram />
                        <FaWhatsapp />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <h1>Tautan</h1>
                        <ul>
                            <li>Home</li>
                            <li>Anggota</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Tautan</h1>
                        <ul>
                            <li>Home</li>
                            <li>Anggota</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='px-4 py-4 bg-black flex justify-center font-[Poppins] font-light text-lg'>
                Sooodesuka
            </div>
        </div>
    )
}
