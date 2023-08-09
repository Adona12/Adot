import React from "react"
import TopicCard from './TopicCard'
import Link from 'next/link'

const DiscoverTab: React.FC = () => {
    const catagories = [
        { id: 1, title: "Recently active channels", topics: [
            { id: 1, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337879/activeFirst_gyxwdi.svg' },
            { id: 2, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337892/activeSecond_tmwxmg.svg' },
            { id: 3, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687451695/Image_2_u3irqs.svg' }
        ] 
    },
        { id: 2, title: "All about your baby", topics: [
            { id: 1, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687363712/unsplash_wqcQ6ODwPxU_1_rkagsr.svg' },
            { id: 2, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337878/babySecond_w96cmw.svg' },
            { id: 3, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337881/babyThird_xllxfc.svg' }
        ] 
    },
        { id: 3, title: "Nutrition need to know", topics: [
            { id: 1, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337886/foodFirst_j3gulf.svg' },
            { id: 2, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337881/foodSecond_phpflm.svg' },
            { id: 3, topicTitle: "Your pregnancy symptoms decoded", bgImage: 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1687337878/babySecond_w96cmw.svg' }
        ]
     }
    ]

  return (
    <div className="flex flex-col w-full pl-1 md:pl-4 justify-start mx-auto lg:col-span-9 pt-10">
    {
        catagories.map((catagory, i) => 
        <div key={i}>
            <p className="mx-6 pb-6 font-semibold tracking-wider text-xl">{ catagory.title }</p>
            <div className="flex overflow-x-scroll no-scrollbar mb-12">
                {
                catagory.topics.map((topic, index) => 
                    <Link key={index} className="" href={`/insights/catagory/${topic.id}`}>
                        <TopicCard topic={topic} />
                    </Link>)
                }
            </div>
        </div>)
    }
</div>
  );
};

export default DiscoverTab;
