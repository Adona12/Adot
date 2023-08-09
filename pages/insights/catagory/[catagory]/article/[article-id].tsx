import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../../../components/layout/Navbar";
import Footer from "../../../../../components/layout/Footer";
import { BiArrowBack } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";
import AuthorInfo from "../../../../../components/insights/AuthorInfo";

export default function Article() {
    const bgImage =
        "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688668900/Group_37026_1_rrz62u.svg";

    const nextArticles = [
      { id: 2, title: "Stress in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633744/Group_37014_wctf0x.svg" },
      { id: 3, title: "Anxiety in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688633745/Group_37013_ax1acc.svg" },
    ]

    return (
        <div>
            <Navbar />
            <main className="flex flex-col px-48 bg-[#F9F8F9] pt-28">
                <div className="flex py-5 align-top">
                    <Link href={"/insights/catagory/1"}>
                        <BiArrowBack size={"24px"} className="mt-1.5 mr-6" />
                    </Link>
                    <h1 className="w-11/12 text-md lg:text-lg xl:text-xl text-left font-semibold text-gray-900 leading-normal">
                        Your pregnancy symptoms decoded
                    </h1>
                </div>
                <div className="flex">
                  <div className="flex w-8/12 pb-2">
                  <AuthorInfo author={'Dr. Katharine C. DeGeorge'} description={'Associate professor of family medicine, University of Virginia, Virginia, US, 10+ years in family medicine'} imgWidth={70} />
                  </div>
                  <button className="flex w-1/12 justify-end justify-self-end pt-4 xl:ml-6">
                    <FaRegBookmark size={"24px"} className="mt-1.5" />
                  </button>
                </div>
                
                <Image
                    className="relative py-0 md:py-42 "
                    src={bgImage}
                    alt="Adot Logo"
                    width={820}
                    height={37}
                    priority
                />
                <p className="flex flex-col font-light w-4/5 tracking-wider text-justify justify-start pt-3 pb-4 md:pr-8 pr-4">
                    Find out about common pregnancy symptom, get tips on what
                    might help manage them, and understand when you might need
                    to contact your health care provider. Found you're super low
                    on energy lately? Too tired to do your usual day-to-day or
                    nodding off during your TV show (more so than usual)? If
                    this sounds familiar, you might be experiencing fatigue.
                </p>
                <p className="flex flex-col font-medium w-4/5 tracking-wider text-justify justify-start pt-3 pb-4 md:pr-8 pr-4">
                    Stay supported through your pregnancy and keep logging your
                    symptoms in Adot. This can help create a handy reference to
                    share with your health care provider if needed. Plus, you're
                    contributing to Flo's understanding of women's health
                    experiences, which benefits the whole Adot community.
                </p>
                <p className="flex flex-col font-medium w-4/5 tracking-wider text-justify justify-start pt-3 pb-4 md:pr-8 pr-4">
                    Want more?
                </p>
                <p className="font-medium w-4/5 tracking-wider text-justify justify-start pt-3 pb-4 md:pr-8 pr-4">
                    Want to know how to get better-quality sleep? <span className="text-primary">Check out these top tips</span> from a doctor.
                </p> 
                <p className="font-light border-b-0 w-4/5 tracking-wider text-justify justify-start pt-3 md:pr-8 pr-4">
                    Next read
                </p> 
                {
        nextArticles.map((nextArticle, i) => 
        <Link key={i} className="" href={`/insights/catagory/1/article/${nextArticle.id}`}>
          <div className="border-b mb-4 border-gray-200 lg:mr-4 mr-0 w-4/5">
              <div className="flex py-3">
                  <div className="align-top rounded-xl flex my-4 w-24">
                      <Image
                          className="relative align-top"
                          src={nextArticle.headerImage}
                          alt="Next.js Logo"
                          width={70}
                          height={18}
                          priority
                          />
                  </div>
                  <div className="pt-4">
                      <p className="mx-6 font-bold tracking-wider pb-2 text-md text-gray-900">{ nextArticle.title }</p>
                      <p className="mx-6 text-sm text-gray-400 max-h-[60px] overflow-hidden">{ nextArticle.content }</p>
                  </div>
              </div>
          </div>
        </Link>
        )
          }
            </main>
            <Footer />
        </div>
    );
}
