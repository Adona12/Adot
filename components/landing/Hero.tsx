import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/images/landing/logo.svg";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import axios from "axios";
import Link from "next/link";
import WhiteNavbar from "../layout/WhiteNavbar";

const Hero: React.FC = () => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isPhone, setIsPhone] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [validPhone, setValidPhone] = useState(true);
    const [validEmail, setValidEmail] = useState(true);

    const handleEmailChange = (e: any) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        setValidEmail(validateEmail(inputValue));
    };

    const handlePhoneChange = (e: any) => {
        const inputValue = e.target.value;
        setPhone(inputValue);
        setValidPhone(validatePhone(inputValue));
    };

    const validateEmail = (email: string) => {
        if (email == "") {
            return true;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        if (phone == "") {
            return true;
        }
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    let isDisabled;

    if (
        (!isPhone && validEmail && email != "") ||
        (isPhone && validPhone && phone != "")
    ) {
        isDisabled = true;
    } else {
        isDisabled = false;
    }

    let buttonText: any;

    if (isProcessing) {
        buttonText = (
            <>
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-white fill-gray-400"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
                Processing
            </>
        );
    } else {
        buttonText = "Subscribe";
    }

    let toast;

    // fix z-index issue
    if (isSuccess) {
        toast = (
            <div
                id="toast-success"
                className="absolute bottom-10 z-100000001 flex items-center w-full max-w-xs px-4 py-2 mb-4 text-gray-500 bg-white rounded-full shadow"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 rounded-lg">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <div className="ml-3 text-sm font-normal">
                    Subscribed successfully!
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5  inline-flex h-8 w-8"
                    data-dismiss-target="#toast-success"
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        );
    } else {
        toast = (
            <div
                id="toast-error"
                className="absolute bottom-10 z-100000001 flex items-center w-full max-w-sm px-4 py-2 mb-4 text-gray-500 bg-white rounded-full shadow"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 rounded-lg">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <div className="ml-3 text-sm font-normal">
                    Something went wrong. Please try again.
                </div>
                <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex h-8 w-8"
                    data-dismiss-target="#toast-success"
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        );
    }

    let textField;

    if (isPhone) {
        textField = (
            <div className="relative mb-6 sm:w-11/12 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
                    <BiPhoneCall size={"18px"} className="opacity-30" />
                </div>
                <input
                    onChange={handlePhoneChange}
                    value={phone}
                    type="text"
                    className={`rounded-lg bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10 placeholder:pl-3" ${
                        validPhone
                            ? "ring-1 ring-slate-200"
                            : "ring-1 ring-red-300"
                    }`}
                    placeholder="0945539856"
                />
                {validPhone ? (
                    <p></p>
                ) : (
                    <p className="text-red-500 font-extralight text-sm mt-2">
                        Please enter a valid phone number
                    </p>
                )}
            </div>
        );
    } else {
        textField = (
            <div className="relative mb-6 sm:w-11/12 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
                    <HiOutlineMail size={"18px"} className="opacity-30" />
                </div>
                <input
                    type="text"
                    onChange={handleEmailChange}
                    value={email}
                    className={`rounded-lg bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10 placeholder:pl-3" ${
                        validEmail
                            ? " ring-1 ring-slate-200 "
                            : "ring-1 ring-red-300"
                    }`}
                    placeholder="jane.doe@gmail.com"
                />
                {validEmail ? (
                    <p></p>
                ) : (
                    <p className="text-red-500 font-extralight text-sm mt-2">
                        Please enter a valid email address
                    </p>
                )}
            </div>
        );
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isPhone) {
            if (!validPhone || phone == "") {
                return;
            }
        } else {
            if (!validEmail || email == "") {
                return;
            }
        }

        setIsProcessing(true);
        let date = new Date();

        let type;
        if (isPhone) {
            type = "Phone";
        } else {
            type = "Email";
        }

        const data = {
            Email: email,
            Phone: phone,
            Date: date,
            Type: type,
        };
        axios
            .post(
                "https://sheet.best/api/sheets/7f2807fe-c31c-45be-9a3a-8d182d3f4c52",
                data
            )
            .then((response) => {
                setIsProcessing(false);
                if (response.status == 200) {
                    setIsSuccess(true);
                } else {
                    setIsSuccess(false);
                }

                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 3000);
                setPhone("");
                setEmail("");
            });
    };
    const bgImage =
        "https://res.cloudinary.com/dr8ozjurp/image/upload/v1688649931/Insights_5_sx6rty.svg";
    return (
      <div id="home">
        <div
            className="relative w-full lg:flex bg-cover bg-center items-center h-full lg:h-screen align-middle mb-2 px-8 xl:px-12 mx-auto"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
          <WhiteNavbar />
            <div className="w-full lg:hidden block pt-24">
                <motion.div className="h-full w-full flex justify-center">
                    <Image
                        className="relative"
                        src={logo}
                        alt="Adot Logo"
                        width={150}
                        height={18}
                        priority
                    />
                </motion.div>
            </div>
            <motion.div className="min-w-full grid grid-flow-row sm:grid-flow-col grid-rows-1 lg:grid-cols-2 gap-8 py-16">
                <div className="flex flex-col px-6 mb-8 justify-center lg:items-start items-center row-start-2 lg:row-start-1">
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
                                restDelta: 0.001,
                            },
                        }}
                    >
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left py-4 font-semibold text-white leading-normal">
                            <span className="text-white">Adot:</span> Your
                            Pregnancy Companion
                            {/* Change this */}
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
                                restDelta: 0.001,
                            },
                        }}
                    >
                        <p className="text-white w-9/12 sm:text-lg text-md font-light mt-4 mb-6 py-4 text-center lg:text-left">
                            Don't miss out on this opportunity to be one of the
                            first to experience{" "}
                            <span className="">Adot</span>. Simply enter
                            your phone number or email below, and we'll notify
                            you as soon as it becomes available for download.
                        </p>
                    </motion.div>
                    <div className="py-2 w-full mb-8">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 50,
                                    restDelta: 0.001,
                                },
                            }}
                        >
                            <form
                                method="post"
                                name="google-sheet"
                                onSubmit={handleSubmit}
                            >
                                <div className="text-secondary md:grid md:grid-cols-12 h-12">
                                    <motion.div
                                        transition={{
                                            type: "spring",
                                            stiffness: 20,
                                            damping: 15,
                                        }}
                                        whileTap={{ scale: 1.1 }}
                                        whileInView={{ opacity: 1 }}
                                        className="col-span-8 mb-2 ml-1 text-quaternary"
                                    >
                                        <button
                                            onClick={() => {
                                                setIsPhone(!isPhone);
                                            }}
                                        >
                                            {isPhone
                                                ? "Use email instead"
                                                : "Use phone instead"}
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        transition={{
                                            type: "spring",
                                            stiffness: 20,
                                            damping: 15,
                                        }}
                                        whileTap={{ scale: 1.1 }}
                                        whileInView={{ opacity: 1 }}
                                        className="col-span-9"
                                    >
                                        {textField}
                                    </motion.div>
                                    {!isDisabled && (
                                        <button
                                            type="submit"
                                            disabled
                                            className="font-normal col-span-3 block sm:flex tracking-wide h-12 text-primary py-2.5 px-5 mt-12 sm:mt-0 mx-auto border bg-primary rounded-xl hover:shadow-primary-md transition-all outline-none disabled:bg-[#ffffff]"
                                        >
                                            Subscribe
                                        </button>
                                    )}
                                    {isDisabled && (
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 15,
                                            }}
                                            whileTap={{ scale: 1 }}
                                            whileInView={{ opacity: 1 }}
                                            className="col-span-3"
                                        >
                                            <button
                                                type="submit"
                                                className="font-normal block sm:flex tracking-wide h-12 text-white py-2.5 px-5 mt-12 sm:mt-0 mx-auto border bg-primary rounded-xl hover:shadow-primary-md transition-all outline-none disabled:bg-[#ffffff]"
                                            >
                                                {buttonText}
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    </div>
                    {isVisible && toast}
                </div>
                <div className="w-full hidden lg:block">
                    <motion.div
                        className="h-full w-full flex justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <Image
                            className="relative"
                            src={logo}
                            alt="Next.js Logo"
                            width={400}
                            height={37}
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </div>
    );
};

export default Hero;
