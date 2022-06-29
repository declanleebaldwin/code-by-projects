import '../styles/globals.css'
import Image from "next/image";
import React, { useState } from 'react';
import { useRouter } from "next/router";

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Projects',
    href: '/projects'
  },
  {
    text: 'Mentors',
    href: '/mentors'
  }
]

const Menu = ({ show, onClose }) => {
  const router = useRouter();
  const className = `cursor-pointer text-white rounded-lg -translate-x-full origin-top-right bg-black-300 fixed ease-in-out scale-0 duration-150 ${show ? 'scale-100	' : ''}`

  const onLinkClick = (link) => {
    onClose();
    router.push(link.href);
  }

  return (
    <div className={className}>
      <div className="relative flex flex-col w-full">
        {links.map((link, i) => {
          return (
            <div
              key={i}
              onClick={() => onLinkClick(link)}
              className="w-[10rem] h-[4.25rem] flex flex-row justify-center items-center hover:bg-black-200"
            >
              {link.text}
            </div>
          );
        })}
      </div>
    </div>
  )
}

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClick = () => setShowMenu(!showMenu);

  const onCloseMenu = () => setShowMenu(false)

  return (
    <>
      {showMenu && <div className="fixed top-0 left-0 w-full h-full bg-transparent" onClick={onCloseMenu}></div>}
      <div className='fixed top-0 right-0'>
        <div className='relative'>
          <div className="p-2 w-12 h-12 rounded-full mr-4 mt-4 cursor-pointer ease-in-out duration-150 hover:bg-gray-400" onClick={onClick}>
            <Image
              src="/menu.svg"
              layout="responsive"
              width={24}
              height={24}
              alt="menu"
            />
          </div>
          <Menu show={showMenu} onClose={onCloseMenu} />
        </div>
      </div>
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Layout />
    </>
  )
}

export default MyApp
