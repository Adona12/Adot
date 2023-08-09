import { Fragment, useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import insightsImg from '../../public/images/features/insights.svg'
import medicationImg from '../../public/images/features/medication.svg'
import journalingImg from '../../public/images/features/journaling.svg'

const features = [
  {
    name: 'Insights',
    description:
      'Dive into a treasure trove of pregnancy wisdom with Insights! Expert advice, heartwarming stories, and personalized recommendations empower you at every stage, making your journey even more inspiring and informed!',
    image: insightsImg
  },
  {
    name: 'Medication and Appointment Scheduling',
    description:
      'Effortlessly manage medications and appointments with Medication & Appointment Scheduling! Set reminders, customize alerts, and stay organized. Never miss a pill or prenatal visit again—take control of your well-being with ease!',
    image: medicationImg
  },
  {
    name: 'Journaling',
    description:
      'Capture your miraculous journey with our enchanting Journaling feature! Preserve beautiful moments, express emotions, and create a cherished keepsake. Enrich entries with photos and voice memos, relishing this extraordinary chapter of your life.',
    image: journalingImg
  },
]

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-first col-span-6 space-y-2">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-[#f8e9f4]"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-primary"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <h3 className={"mt-2 text-lg font-semibold " + (featureIndex === selectedIndex? " text-white": " text-secondary")}>
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className={"mt-2 text-sm text-gray-400" + (featureIndex === selectedIndex? " text-white": " text--gray-400")}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        </div>
          <Tab.Panels as={Fragment}>
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex justify-center focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                     <motion.div
                        className=""
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 2,
                          delay: 0.1,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
                      >
                    <Image
                      className="relative align-top justify-center"
                      src={feature.image}
                      alt="image"
                      width={250}
                      height={20}
                      priority
                      />
                      </motion.div>
                  </Tab.Panel>
                ) : null
              )}
          </Tab.Panels>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="flex justify-center transform overflow-hidden rounded-2xl px-5 py-6">
                <Image
                  className="relative align-top justify-center"
                  src={feature.image}
                  alt="Next.js Logo"
                  width={250}
                  height={18}
                  priority
                  />
               
              <div className="absolute inset-x-0 bottom-0 bg-primary p-6 backdrop-blur sm:p-10">
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-500' : 'bg-gray-300'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

function Features() {
  return (
    <section className='mb-16'id="features">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="mx-auto text-center mt-12 lg:my-8">
          <h2 className="text-3xl font-medium tracking-tight text-secondary">
            Features
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Introducing our groundbreaking pregnancy tracking app, designed to be your ultimate companion on the 
            beautiful journey of motherhood! With this app at your fingertips, you'll experience 
            a whole new level of convenience and empowerment.
          </p>
        </div>
      </div>
      <div className="mt-8 md:hidden">
        <FeaturesMobile />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-16 md:block">
        <FeaturesDesktop />
      </div>
    </section>
  )
}

export default Features