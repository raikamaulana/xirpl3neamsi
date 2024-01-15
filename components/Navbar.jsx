import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { 
    FaAngleDown, 
    FaInstagram, 
    FaWhatsapp, 
    FaBars, 
    FaTimes, 
    FaHome, 
    FaUsers, 
    FaPhotoVideo, 
    FaPhoneAlt, 
    FaChalkboard } from 'react-icons/fa';
import { AiOutlineApartment } from 'react-icons/ai';
import { Popover, Transition, Menu } from '@headlessui/react';
import { usePathname } from 'next/navigation';

const susunanKelas = [
    {
        name: "Struktur Kelas",
        href: "/strukturkelas",
        icon: AiOutlineApartment,
        icon2: FaChalkboard,
    },
]

const jadwalPiket = [
    {
        name: "Koordinator Piket",
        href: "/koordinatorpiket",
        icon: "svg/jadwalpiket.svg",
        alt: "koordinator",
    },
    {
        name: "Jadwal Piket",
        href: "/jadwalpiket",
        icon: "svg/jadwalpiket.svg",
        alt: "jadwalpiket",
    },
]

const galeri = [
    {
        name: "Galeri Foto Bukber Kelas 10",
        href: "/galeri-foto-bukber-10",
        icon: FaPhotoVideo,
    },
    {
        name: "Galeri Foto Bukber Kelas 11",
        href: "/galeri-foto-bukber-11",
        icon: FaPhotoVideo,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [ scrollPos, setScrollPos ] = useState(0)
    const [ scrolled, setScrolled ] = useState(true);
    const [ menu, setMenu ] = useState(false);
    // const handleNav = () => {
    //     setNav(!nav);
    // };

    useEffect(() => {
        const navBar = () => {
            const currentScroll = window.pageYOffset;
            setScrolled(scrollPos > currentScroll || currentScroll < 600);
            setScrollPos(currentScroll);
        }

        window.addEventListener("scroll", navBar);

        return () => {
            window.addEventListener("scroll", navBar);
        }
    }, [scrollPos]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.pageYOffset;
    //         const navbarOpacity = scrollPosition < 100 ? 1 : 0.8;
    //         setNavbarOpacity(navbarOpacity);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // useEffect(() => {
    //     const changeColor = () => {
    //         if(window.scrollY >= 90){
    //             setColor('#ffffff');
    //             setTextColor('#000000');
    //         } else {
    //             setColor('transparent');
    //             setTextColor('#ffffff');
    //         }
    //     };
    //     window.addEventListener('scroll', changeColor)
    // }, []);

    // useEffect(() => {
    //     const changeOpacity = () => {
    //         if(window.scrollY >= 90){
    //             setNavbarOpacity(1);
    //         } else {
    //             setNavbarOpacity(0.8);
    //         }
    //     };
    //     window.addEventListener('scroll', changeOpacity);
    // }, []);


    const activ = usePathname();

    return (
        <Popover className='fixed w-full z-10'>
            <div className='flex justify-between items-center w-full px-4 sm:px-8 md:px-12 lg:px-20 py-4 bg-bottom nav-img'>
                <Link href="/" className='text-white'>XI RPL 3</Link>
                <div className='hidden lg:flex gap-2'>
                    <Link href="https://instagram.com/theonlyrpl3" className='bg-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-transparent hover:text-white'>
                        <FaInstagram size="28"/>
                    </Link>
                    <Link href="https://wa.me/089517117162" className='bg-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-transparent hover:text-white'>
                        <FaWhatsapp size="28"/>
                    </Link>
                </div>
                <div className='flex lg:hidden'>
                    <Popover.Button onClick={() => setMenu(!menu)} className="relative inline-flex items-center justify-center p-1 text-green-800 bg-white rounded-md  hover:bg-gray-100 focus:outline-none">
                        <span className="sr-only">Open menu</span>
                        {!menu 
                        ?
                        <FaBars className="w-5 h-5" aria-hidden="true" />
                        :
                        <FaTimes className="w-5 h-5" aria-hidden="true" />
                    }
                    </Popover.Button>
                </div>
            </div>
            <Popover.Group as="nav" className={`hidden ${scrolled?'':'hidden'}lg:flex justify-center items-center w-full h-10 py-1 gap-10  font-[Poppins] text-base font-medium bg-gradient-to-b from-white via-white/70 to-slate-400/70 text-black`}>
                <Link 
                    href="/" 
                    className={
                        activ === "/"
                        ? "text-green-700 font-[Poppins] font-semibold shadow-text border-b-2 border-green-800"
                        : "text-black"
                }>
                    Home
                </Link>
                <Link 
                    href="/anggota" 
                    className={
                        activ === "/anggota"
                        ? "text-green-700 font-[Poppins] font-semibold shadow-text border-b-2 border-green-800"
                        : "text-black"
                }>
                    Anggota
                </Link>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open
                                    ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                    : "text-black",
                                    "group rounded-md inline-flex items-center text-base font-medium focus:border-none focus:ring-0",
                                )}>
                                    <p>Susunan Kelas</p>
                                    <FaAngleDown className={classNames(
                                        open
                                        ? "rotate-180 text-red-500" : "rotate-0",
                                        "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                    )}
                                    aria-hidden="true"
                                    />
                            </Popover.Button>
                            <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                                <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                        <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                                            {susunanKelas.map((item, itemIndex) => (
                                                <Link key={itemIndex} href={item.href} className='flex items-center'>
                                                    <div className='relative'>
                                                        <item.icon size="15" className='absolute left-[9px] top-2' aria-hidden="true"/>
                                                        <item.icon2 size="33"/>
                                                    </div>
                                                    <p className='ml-4'>
                                                        {item.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open
                                    ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                    : "text-black",
                                    "group rounded-md inline-flex items-center text-base font-medium border-none ring-0 focus:ring-0 focus:border-none",
                                )}>
                                    <p>Jadwal Piket</p>
                                    <FaAngleDown className={classNames(
                                        open
                                        ? "rotate-180 text-red-500" : "rotate-0",
                                        "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                    )}
                                    aria-hidden="true"
                                    />
                            </Popover.Button>
                            <Transition
                            show={open}
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-10"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                                <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                        <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                                            {jadwalPiket.map((item, itemIndex) => (
                                                <Link key={itemIndex} href={item.href} className='flex items-center'>
                                                    <Image src={item.icon} width="40" height="40" alt={item.alt} />
                                                    <p className='ml-4'>
                                                        {item.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open
                                    ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                    : "text-black",
                                    "group rounded-md inline-flex items-center text-base font-medium border-none ring-0 focus:ring-0 focus:border-none",
                                )}>
                                    <p>Gallery</p>
                                    <FaAngleDown className={classNames(
                                        open
                                        ? "rotate-180 text-red-500" : "rotate-0",
                                        "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                    )}
                                    aria-hidden="true"
                                    />
                            </Popover.Button>
                            <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                                <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                        <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                                            {galeri.map((item, itemIndex) => (
                                                <Link key={itemIndex} href={item.href} className='flex items-center'>
                                                    <item.icon size="25" />
                                                    <p className='ml-4'>
                                                        {item.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Link 
                    href="/contact"
                    className={
                        activ === "/contact"
                        ? "text-green-700 font-[Poppins]"
                        : "text-black"
                    }>
                Contact
                </Link>
            </Popover.Group>
            {/* <Transition show={nav} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        // meng handle tab menu
                        <Popover.Panel className="lg:hidden id=mobile-menu">
                            <Popover.Panel ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                <Link href="/blog" activeClass="blog" to="blog" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Blog
                                </Link>
                                <Link href="/users" activeClass="users" to="users" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Users
                                </Link>
                                <Link href="/contact" activeClass="contact" to="contact" smooth={true} offset={50} duration={500} className="cursor-pointer block hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </Link>
                            </Popover.Panel>
                        </Popover.Panel>
                    )}
            </Transition> */}
            <Transition
            enter="duration-500 transition ease-out"
            enterFrom="opacity-0 -translate-x-96"
            enterTo="opacity-100 scale-100"
            leave="duration-500 transition ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 -translate-x-96">
            <Popover.Panel
            focus
            className="relative inset-x-0 top-0 transition origin-top-right transform lg:hidden">
            <div className="z-20 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                        <p>XI RPL 3</p>
                        <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:black hover:bg-gray-100 focus:outline-none">
                                <span className="sr-only">Close menu</span>
                                <FaTimes aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                    </div>
                    <Link 
                        href="/" 
                        className={classNames(
                            activ === "/"
                            ? "text-green-700 border-l-2 pl-4 py-2 border-green-800 bg-gradient-to-r from-white via-white to-green-800/20"
                            : "text-black hover:bg-green-100",
                            "mt-6 gap-4 flex items-center font-[Poppins] py-2 pl-2"
                        )}>
                        <FaHome size="20"/>
                        Home
                    </Link>
                    <Link 
                        href="/anggota" 
                        className={classNames(
                            activ === "/anggota"
                            ? "text-green-700 border-l-2 pl-4 py-2 border-green-800 bg-gradient-to-r from-white via-white to-green-800/20"
                            : "text-black hover:bg-green-100",
                            "mt-3 gap-4 flex items-center font-[Poppins] py-2 pl-2"
                        )}>
                        <FaUsers size="20"/>
                        Anggota
                    </Link>
                    <Popover className="relative mt-3 font-[Poppins]">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                        ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                        : "text-black hover:bg-green-100",
                                        "group rounded-md w-full flex justify-between items-center text-base font-medium focus:border-none focus:ring-0 py-2 pl-2",
                                    )}>
                                        <p>Susunan Kelas</p>
                                        <FaAngleDown className={classNames(
                                            open
                                            ? "rotate-180 text-red-500" : "rotate-0",
                                            "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                        )}
                                        aria-hidden="true"
                                        />
                                </Popover.Button>
                                <Transition
                                enter="transition ease-out duration-500"
                                enterFrom="opacity-0 translate-y-5"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-300"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-5">
                                    <Popover.Panel className="w-full transform left-1/2">
                                        <div className="overflow-hidden">
                                            <div className='relative grid gap-6 bg-white px-6 pt-5 sm:gap-8 sm:p-8'>
                                                {susunanKelas.map((item) => (
                                                    <Link href={item.href}>
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <span className='w-full h-[1px] bg-gray-400'/>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Popover className="relative mt-3 font-[Poppins]">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                        ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                        : "text-black hover:bg-green-100",
                                        "group rounded-md w-full flex justify-between items-center text-base font-medium focus:border-none focus:ring-0 py-2 pl-2",
                                    )}>
                                        <p>Jadwal Piket</p>
                                        <FaAngleDown className={classNames(
                                            open
                                            ? "rotate-180 text-red-500" : "rotate-0",
                                            "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                        )}
                                        aria-hidden="true"
                                        />
                                </Popover.Button>
                                <Transition
                                enter="transition ease-out duration-500"
                                enterFrom="opacity-0 translate-y-5"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-300"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-5">
                                    <Popover.Panel className="w-full transform left-1/2">
                                        <div className="overflow-hidden">
                                            <div className='relative grid gap-6 px-6 pt-5 bg-white sm:gap-8 sm:p-8'>
                                                {jadwalPiket.map((item) => (
                                                    <Link href={item.href}>
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <span className='w-full h-[1px] bg-gray-400'/>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Popover className="relative mt-3 font-[Poppins]">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open
                                        ? "text-green-800 font-medium border-none ring-0 focus:ring-0 focus:border-none"
                                        : "text-black hover:bg-green-100",
                                        "group rounded-md w-full flex justify-between items-center text-base font-medium focus:border-none focus:ring-0 py-2 pl-2",
                                    )}> 
                                        <p>Gallery</p>
                                        <FaAngleDown className={classNames(
                                            open
                                            ? "rotate-180 text-red-500" : "rotate-0",
                                            "transition-all duration-500 ml-1 w-5 h-5 border-none ring-0 focus:ring-0 focus:border-none"
                                        )}
                                        aria-hidden="true"
                                        />
                                </Popover.Button>
                                <Transition
                                enter="transition ease-out duration-500"
                                enterFrom="opacity-0 translate-y-5"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-300"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-5">
                                    <Popover.Panel className="w-full transform left-1/2">
                                        <div className="overflow-hidden">
                                            <div className='relative grid gap-6 px-6 pt-5 bg-white sm:gap-8 sm:p-8'>
                                                {galeri.map((item) => (
                                                    <Link href={item.href}>
                                                        {item.name}
                                                    </Link>
                                                ))}
                                                <span className='w-full h-[1px] bg-gray-400'/>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Link 
                        href="/contact"
                        className={classNames(
                            activ === "/contact"
                            ? "text-green-700 border-l-2 pl-4 py-2 border-green-800 bg-gradient-to-r from-white via-white to-green-800/20"
                            : "text-black hover:bg-green-100",
                            "mt-3 gap-4 flex items-center font-[Poppins] py-2 pl-2"
                        )}>
                        <FaPhoneAlt size="18"/>
                        Contact
                    </Link>
                    <hr className='dashed-line w-full mt-10' />
                    <div className='mt-5 flex justify-center gap-2'>
                        <Link href="https://instagram.com/theonlyrpl3" className='group bg-white rounded-full hover:bg-gradient-to-br hover:from-purple-800 hover:via-red-500 hover:to-yellow-500 w-10 h-10 flex justify-center items-center'>
                            <FaInstagram size="28" className='text-black group-hover:text-white'/>
                        </Link>
                        <Link href="https://wa.me/089517117162" className='group bg-white rounded-full hover:bg-green-500 w-10 h-10 flex justify-center items-center'>
                            <FaWhatsapp size="28" className='text-black group-hover:text-white'/>
                        </Link>
                    </div>
                </div>
            </div>
            </Popover.Panel>
        </Transition>
    </Popover>



        // <section className='fixed w-full shadow-lg h-24 z-10 bg-white'>
        //     <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        //         <Link href="/">
        //             <Image src="/ayanokoji.jpg" width="120" height="30" alt="xirpl3" className='cursor-pointer'/>
        //         </Link>
        //         <div>
        //             <ul className='hidden lg:flex'>
        //                 <Link href="/">
        //                     <li className='ml-10 text-xl uppercase'>Home</li>
        //                 </Link>
        //                 <Link href="/about-us">
        //                     <li className='ml-10 text-xl uppercase'>About Us</li>
        //                 </Link>
        //                 <Link href="/contact">
        //                     <li className='ml-10 text-xl uppercase'>Contact</li>
        //                 </Link>
        //             </ul>
        //         </div>
        //         <div onClick={handleNav} className='lg:hidden cursor-pointer pl-24'>
        //             <AiOutlineMenu size={25}/>
        //         </div>
        //         <div className={menuOpen ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ECF0F3] p-10 ease-in duration-500" : "fixed left-[-100%] h-screen w-[65%] top-0 p-10 ease-in duration-500"}>
        //             <div className='flex w-full items-center justify-end '>
        //                 <div onClick={handleNav} className='cursor-pointer'>
        //                     <AiOutlineClose size={25} />
        //                 </div>
        //             </div>
        //             <div className='flex flex-col py-4'>
        //                 <ul>
        //                     <Link href="/">
        //                         <li onClick={() => { setMenuOpen(false) }} className='py-4 text-xl cursor-pointer uppercase'>Home</li>
        //                     </Link>
        //                     <Link href="/about-us">
        //                         <li onClick={() => { setMenuOpen(false) }} className='py-4 text-xl cursor-pointer uppercase'>About Us</li>
        //                     </Link>
        //                     <Link href="/contact">
        //                         <li onClick={() => { setMenuOpen(false) }} className='py-4 text-xl cursor-pointer uppercase'>Contact</li>
        //                     </Link>
        //                 </ul>
        //             </div>
        //             <Link href="/">
        //                 <Image src="/ayanokoji.jpg" width="120" height="30" alt="xirpl3" className='cursor-pointer'/>
        //             </Link>
        //         </div>
        //     </div>
        // </section>



        // <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        //     <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        //         <Link href='/'>
        //             <h1 style={{color: `${textColor}`}} className='font-bold text-4xl font-[handlee]'>XI<span>RPL</span>3</h1>
        //         </Link>
        //         <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
        //             <li className='p-4'>
        //                 <Link href='/'>Home</Link>
        //             </li>
        //             <li className='p-4'>
        //                 <Link href='/#gallery'>Gallery</Link>
        //             </li>
        //             <li className='p-4'>
        //                 <Link href='/member'>Member</Link>
        //             </li>
        //             <li className='p-4'>
        //                 <Link href='/contact'>Contact</Link>
        //             </li>
        //         </ul>

        //         Mobile Button Version
        //         <div onClick={handleNav} className='block sm:hidden z-10'>
        //             { nav 
        //             ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> 
        //             : <AiOutlineMenu size={20} style={{color: `${textColor}`}} /> }
        //         </div>

        //         Mobile Menu
        //         <div className={ 
        //             nav 
        //             ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
        //             : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" }>
        //         <ul>
        //             <li className='p-4 text-4xl hover:text-gray-500'>
        //                 <Link href='/'>Home</Link>
        //             </li>
        //             <li className='p-4 text-4xl hover:text-gray-500'>
        //                 <Link href='/#gallery'>Gallery</Link>
        //             </li>
        //             <li className='p-4 text-4xl hover:text-gray-500'>
        //                 <Link href='/member'>Member</Link>
        //             </li>
        //             <li className='p-4 text-4xl hover:text-gray-500'>
        //                 <Link href='/contact'>Contact</Link>
        //             </li>
        //         </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar