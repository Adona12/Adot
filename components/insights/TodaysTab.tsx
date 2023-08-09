import React from "react"
import Image from 'next/image'

const TodaysTab: React.FC = () => {
    const savedArticles = [
        { title: "3rd Trimester Nutrition guide", content: "It's a signal from your body to slow down and give it time to adjust to the incredible changes happening inside. Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451695/Image_2_u3irqs.svg" },
        { title: "3rd Trimester Yoga guide", content: "It's a signal from your body to slow down and give it time to adjust to the incredible changes happening inside. Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451692/unsplash_wqcQ6ODwPxU_5_xd3w2i.svg" },
        { title: "3rd Trimester Symptoms guide", content: "It's a signal from your body to slow down and give it time to adjust to the incredible changes happening inside. Hormone changes play a big role in making you feel tired, especially the hormone progesterone. This hormone rises sharply in the first trimester. In addition, as blood volume increases...", headerImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1687452134/unsplash_wqcQ6ODwPxU_7_i01llf.svg" },
    ]

  return (
    <div className="flex flex-col w-full xs:pl-10 pl-2 justify-start mx-auto lg:col-span-9 pt-10 pb-4 pr-2 xs:pr-8">
        <p className="mx-6 pb-6 font-semibold tracking-wider text-xl">Today's Insights</p>
    {
        savedArticles.map((article, i) => 
        <div key={i} className="border-b border-gray-200 mr-4 max-w-[500px] md:max-w-full md:px-8 lg:mr-24">
            <div className="grid grid-cols-12 py-6 pl-6">
                <div className="relative align-top rounded-xl justify-center md:max-h-[100px] min-h-[150px] h-[200px] mx-2 xs:mx-24 md:mx-2 my-4 col-span-12 md:col-span-5 lg:col-span-4">
                    <Image
                        className="w-full h-full rounded-xl object-cover"
                        src={article.headerImage}
                        alt="Next.js Logo"
                        objectFit="cover"
                        fill
                        />
                </div>
                
                <div className="lg:col-span-8 md:col-span-7 pt-4 col-span-12 max-h-[177px] overflow-hidden">
                    <p className="mx-6 font-bold tracking-wider pb-3 text-2xl text-gray-900">{ article.title }</p>
                    <p className="mx-6 text-lg text-gray-400">{ article.content }</p>
                </div>
            </div>
        </div>)
    }
</div>
  );
};

export default TodaysTab;
