import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import discoverIcon from '../../public/images/insights/discover.svg'
import savedIcon from '../../public/images/insights/saved.svg'
import todaysIcon from '../../public/images/insights/today.svg'
import activeDiscoverIcon from '../../public/images/insights/active-discover.svg'
import activeSavedIcon from '../../public/images/insights/active-saved.svg'
import activeTodaysIcon from '../../public/images/insights/active-today.svg'
import DiscoverTab from './DiscoverTab'
import SavedTab from './SavedTab'
import TodaysTab from './TodaysTab'
import AuthModal from "../auth/AuthModal"

interface MenuItemProps {
    item: {
        title: string,
        icon: string,
        activeIcon: string
    },
    isActive: Boolean
}

const MenuItemDesktop: React.FC<MenuItemProps> = ({ item: {title, icon, activeIcon}, isActive }) => {
    return (
        <div className={"flex py-3 align-center min-w-[150px] justify-center my-1 text-lg md:rounded-tr-full w-full rounded-full md:rounded-br-full lg:mr-4" + (isActive ? ' md:bg-gradient-to-r md:from-[#F9F8F9] md:to-[#E3D2DE] text-primary bg-[#e3d8e0]' : "bg-red-200")}>
            <div className="flex w-1/2 md:w-4/6 justify-start lg:ml-24 xl:ml-36">
                <Image
                className="flex"
                src={isActive? activeIcon : icon}
                width={33}
                height={10}
                alt="Adot Logo"
                priority
                />
                <span className="md:px-4 px-1 text-md lg:text-lg">{ title }</span>
            </div>
        </div>
    )
}

const MenuItemMobile: React.FC<MenuItemProps> = ({ item: {title, icon, activeIcon}, isActive }) => {
    return (
        <div className="flex py-1.5 px-1 my-1 w-fit rounded-full">
            <span className={"rounded-full flex pl-3 pr-4 py-2 text-sm font-semibold leading-6 ring-1 ring-inset ring-gray-500" + (isActive ? ' text-primary bg-[#e3d8e0] ring-primary' : " ring-gray-500")}>
             <Image
                className="flex"
                src={isActive? activeIcon : icon}
                width={24}
                height={10}
                alt="Adot Logo"
                priority
                />
                <span className="px-1">
                    {title}
                </span>
                
            </span>
        </div>
    )
}

interface BlurredCoverProps {
    currTab: number,
    setIsModalVisible: Function
}

const BlurredCover: React.FC<BlurredCoverProps> = ({ currTab, setIsModalVisible }) => {
    const bgSaved = 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687502064/Screenshot_2023-06-23_at_9.32.14_AM_xo1qu3.png'
    const bgToday = 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687504672/Screenshot_2023-06-23_at_10.17.24_AM_w3y7ku.png'

    return (
      <div 
      className="bg-cover grid bg-center w-full h-[445px]"
      style={{
       backgroundImage: `url(${currTab == 2 ? bgSaved : bgToday })`
     }}
     >
       <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-md">
        <p className="text-gray-400 sm:text-md text-3xl font-medium mt-4 text-center px-6">
            <button onClick={() => setIsModalVisible(true)} className="mt-5 text-center text-3xl text-primary font-bold drop-shadow-lg">Login</button> to access { currTab == 2 ? "you're saved insights" : "your daily insights"}
        </p>
      </div>
     </div>
    );
  };

const InsightsCatagories: React.FC = () => {
    const [activeLink, setActiveLink] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const menuItems = [
        { id: 1, title: "Discover", activeIcon: activeDiscoverIcon, icon: discoverIcon, isActive: true }, 
        { id: 2, title: "Saved", activeIcon: activeSavedIcon, icon: savedIcon, isActive: false }, 
        { id: 3, title: "Today's", activeIcon: activeTodaysIcon, icon: todaysIcon, isActive: false }
    ]
    
  return (
    <div className="w-full pt-24 bg-[#F9F8F9]">
        <div className="w-full">
            { isModalVisible && <AuthModal setIsLoggedIn={setIsLoggedIn} setIsModalVisible={setIsModalVisible} /> }
            <div className="w-full grid lg:grid-cols-12 gap-8 lg:pr-24 md:pr-16 lg:pl-20 md:pl-14 pl-5 pr-10 text-center lg:text-left pt-16 pb-8 md:pb-16">
                <div className="w-full lg:col-span-7 md:pl-10 lg:pl-0">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                    }}
                >
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-left pt-2 font-bold text-gray-700 leading-normal">
                    Insights from our team
                    </h1>
                </motion.div>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.3,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                    }}
                >
                    <p className="text-gray-400 sm:text-md text-lg font-light mt-4 text-left">
                        Get key insights on your health, nutrition, and baby! 
                    </p>
                </motion.div>
                </div>
                <div className="flex flex-col w-full md:px-6 justify-end mx-auto lg:col-span-5">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 h-12 font-light ring-none text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5" placeholder="Search articles, videos, audio and more" required />
                    </div>
                </div>
            </div>
            <div className="w-full md:grid md:grid-rows-1 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3 mt-1 md:mt-5 pt-1 md:pt-5 overflow-x-scroll no-scrollbar md:flex md:flex-col md:sticky md:top-20 md:h-[240px] h-fit">
                    <div className="md:pl-1 min-w-[350px] w-fit md:min-w-full md:w-full flex md:grid md:grid-cols-3 pl-4">
                        {
                            menuItems.map((menuItem, index) => 
                            <div key={index} className="md:grid md:col-span-3">
                                <div onClick={() => setActiveLink(menuItem.id)} className="hidden md:block" >
                                    <MenuItemDesktop item={menuItem} isActive={activeLink == menuItem.id}  />
                                </div>
                                <div onClick={() => setActiveLink(menuItem.id)} className="md:hidden sm:pr-5" >
                                    <MenuItemMobile item={menuItem} isActive={activeLink == menuItem.id}  />
                                </div>
                           </div>
                            )
                        }
                    </div>
                </div>
                <div className="md:col-span-9">
                    { activeLink == 1 && <DiscoverTab /> }
                    { activeLink == 2 && (isLoggedIn ? <SavedTab /> : <BlurredCover currTab={2} setIsModalVisible={setIsModalVisible}  />) }
                    { activeLink == 3 && (isLoggedIn ? <TodaysTab /> : <BlurredCover currTab={3} setIsModalVisible={setIsModalVisible} />) }
                </div>          
            </div>   
        </div>
    </div>
    );
};

export default InsightsCatagories;
