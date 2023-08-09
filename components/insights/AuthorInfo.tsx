import React from "react"
import Image from 'next/image'

interface AuthorInfoProps {
    author: string,
    description: string,
    imgWidth: number
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({author, description, imgWidth}) => {
    const authorImg = 'https://res.cloudinary.com/dr8ozjurp/image/upload/v1688635407/Ellipse_145_mrpynq.svg'

    return (
        <div className="lg:pl-6 md:pl-4 sm:pl-2">
            <div className="flex">
                <div className="align-top rounded-xl flex my-4 w-20">
                    <Image
                        className="relative align-top"
                        src={authorImg}
                        alt="Author image"
                        width={imgWidth}
                        height={18}
                        priority
                        />
                </div>
                <div className="pt-4 align-top justify-start">
                    <p className="mx-5 font-light tracking-wider pb-1 text-xs text-gray-400">Reviewed By</p>
                    <p className="mx-5 md:text-md text-sm font-thin text-gray-900 max-h-[60px] overflow-hidden"><span className="font-bold">{author}</span>, {description}</p>
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;
