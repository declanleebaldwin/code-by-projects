import '../styles/globals.css'
import Image from "next/image";

const Layout = () => {
  return (
    <div className='fixed top-0 right-0'>
      <div className="p-2 w-12 h-12 relative rounded-full mr-4 mt-4 cursor-pointer ease-in-out duration-150 hover:bg-gray-400">
        <Image
          src="/menu.svg"
          layout="responsive"
          width={24}
          height={24}
          alt="menu"
        />
      </div>
    </div>
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
