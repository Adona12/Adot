import React from "react"
import Image from 'next/image'

const SavedTab: React.FC = () => {
    const savedArticles = [
        { title: "Fatigue in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta and fetal...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" },
        { title: "Stress in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta and fetal...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" },
        { title: "Anxiety in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta and fetal...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" },
        { title: "Sad mood in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta and fetal...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" },
        { title: "Spotting in pregnancy explained", content: "Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases to supply the developing placenta and fetal...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" }
    ]

  return (
    <div className="flex flex-col w-full md:pl-10 justify-start mx-auto lg:col-span-9 pt-10 pb-4 md:pr-8 pr-4">
        <p className="mx-6 pb-6 font-semibold tracking-wider text-xl">Saved Insights</p>
        {
        savedArticles.map((article, i) => 
        <div key={i} className="border-b border-gray-200 lg:mr-24 mr-0">
            <div className="grid grid-cols-12 py-6 sm:pl-6 pl-4">
                <div className="relative align-top rounded-xl sm:flex justify-center mx-2 xs:mx-24 md:mx-2 my-4 col-span-3 xl:col-span-1">
                    <Image
                        className="relative align-top justify-center col-span-1 md:col-span-3"
                        src={article.headerImage}
                        alt="Next.js Logo"
                        width={70}
                        height={18}
                        priority
                        />
                </div>
                <div className="sm:col-span-9 col-span-9 xl:col-span-11 pt-4">
                    <p className="mx-6 font-bold tracking-wider pb-2 text-md text-gray-900">{ article.title }</p>
                    <p className="mx-6 text-sm text-gray-400 max-h-[60px] overflow-hidden">{ article.content }</p>
                </div>
            </div>
        </div>)
    }
</div>
  );
};

export default SavedTab;
