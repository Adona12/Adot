import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from "framer-motion"
import Navbar from '../../../../components/layout/Navbar';
import Footer from '../../../../components/layout/Footer';
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';
import AuthorInfo from '../../../../components/insights/AuthorInfo';

export default function Catagory() {
    const router = useRouter()
    const { topicId } = router.query;
    const bgImage = 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1688636237/unsplash_wqcQ6ODwPxU_9_ekmyar.svg'
    const articles = [
      { id: 1, title: "Fatigue in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633744/Group_37015_jihzyd.svg" },
      { id: 2, title: "Stress in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633744/Group_37014_wctf0x.svg" },
      { id: 3, title: "Anxiety in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633745/Group_37013_ax1acc.svg" },
      { id: 4, title: "Sad mood in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633747/Group_37016_ejw2as.svg" },
      { id: 5, title: "Spotting in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633747/Group_37012_wbyxbh.svg" }
  ]
  console.log(topicId)
  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:px-48 md:px-24 px-12 bg-[#F9F8F9] pt-28">
        <div className="flex py-10 align-top">
          <Link href={'/insights'}>
           <BiArrowBack size={"24px"} className="mt-1.5 mr-6" />
          </Link>
            <h1 className="w-11/12 text-lg lg:text-xl xl:text-2xl text-left font-semibold text-gray-900 leading-normal">
              Your pregnancy symptoms decoded
            </h1>
          </div>
        <Image
          className="relative py-0 md:py-42"
          src={bgImage}
          alt="Adot Logo"
          width={800}
          height={37}
          priority
        />
        <div className="flex flex-col sm:w-2/3 w-full pb-6 pt-12 max-w-[800px]">
          <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 h-12 font-light ring-none text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5" placeholder="Search articles, videos, audio and more" required />
          </div>
        </div>
        <AuthorInfo author={'Adot Medical Board'} description={'100+ doctors and experts from Europe and North America'} imgWidth={50} />
        <div className="flex flex-col sm:w-10/12 w-full justify-start pt-3 pb-4 md:pr-8 sm:pr-4">
        {
        articles.map((article, i) => 
        <Link key={i} className="" href={`/insights/catagory/1/article/1`}>
          <div className="border-b border-gray-200 lg:mr-4 mr-0 max-w-[900px]">
              <div className="flex py-3">
                  <div className="align-top rounded-xl flex my-4 w-24">
                      <Image
                          className="relative align-top"
                          src={article.headerImage}
                          alt="Next.js Logo"
                          width={70}
                          height={18}
                          priority
                          />
                  </div>
                  <div className="pt-4">
                      <p className="lg:mx-6 md:mx-4 mx-1 font-bold tracking-wider pb-2 text-md text-gray-900">{ article.title }</p>
                      <p className="lg:mx-6 md:mx-4 mx-1 text-sm text-gray-400 max-h-[60px] overflow-hidden">{ article.content }</p>
                  </div>
              </div>
          </div>
        </Link>
        )
          }
      </div>
      </main>
      <Footer />
    </>
  )
}
