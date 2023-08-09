import React from "react"

interface TopicCardProps {
    topic: {
      topicTitle: string,
      bgImage: any
    }
}

const TopicCard: React.FC<TopicCardProps> = ({ topic: { topicTitle, bgImage }}) => {
  return (
    <div 
     className="bg-cover grid content-end justify-center pb-6 md:pb-8 bg-center min-w-[200px] sm:min-w-[300px] md:min-w-[400px] h-[230px] mx-6 rounded-3xl mb-3"
     style={{
      backgroundImage: `url(${bgImage})`
    }}
    >
      <p className="flex text-center mx-auto text-sm md:text-md border-solid border-2 border-[#ffdfea] py-1 sm:py-3 sm:px-5 rounded-xl text-white w-5/6 md:w-full bg-opacity-80 bg-[#e5b6a0]">
        { topicTitle }
      </p>
    </div>
  );
};

export default TopicCard;
