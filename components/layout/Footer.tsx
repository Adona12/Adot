import Image from 'next/image'
import Link from 'next/link'
import qrCode from '../../public/images/footer/qr-code.svg'
import logo from '../../public/images/landing/logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 w-full">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 lg:flex-row lg:items-center py-12">
            <div className="flex items-center text-gray-900">
              <Image
              className="flex-none px-6 h-32 w-32" 
              src={logo}
              alt=""
              />
              <div className="ml-4">
                <p className="text-xl font-semibold">Adot</p>
                <p className="mt-1 text-md">Your Pregnancy Companion.</p>
                <p className="mt-1 text-md">Track, Connect, and Embrace the Journey!</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
            </nav>
          <div className="group relative -mx-4 flex items-center transition-colors hover:bg-fuchsia-50 self-auto rounded-2xl lg:mx-0 p-6">
          <div className="mx-auto px-6">
              <p className="text-lg font-semibold sm:text-left text-center">Contact Us</p>
              <p className="mt-1 text-md text-center sm:text-left">Abrehot Library, Addis Ababa, Ethiopia</p>
              <p className="mt-1 text-md text-center sm:text-left">adot@a2sv.org</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
