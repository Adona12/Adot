import React, { useState } from "react";
import Image from "next/image";
import Adot from "../../public/images/common/Adot.svg";
import { MdOutlineClose } from "react-icons/md";
import SignUpSection from "./SignUpSection";
import LogInSection from "./LogInSection";
import OTPSection from "./OTPSection";
import ProfileSection from "./ProfileSection";

export enum ModalTypes {
  login = "login",
  SignUp = "signup",
  OTP = "otp",
  Profile= "profile",
}
interface AuthProps {
  setIsLoggedIn: Function;
  setIsModalVisible: Function;
}

const AuthModal: React.FC<AuthProps> = ({
  setIsLoggedIn,
  setIsModalVisible,
}) => {
  const [modaltype, setModalType] = useState(ModalTypes.login);
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none bg-[#F5F5F5]">
      <div
        onClick={() => setIsModalVisible(false)}
        className="w-full h-full opacity-40 bg-black"
      />
      <div className="fixed inset-0 z-40 mt-8 sm:mt-24 sm:mx-auto sm:w-full sm:max-w-[540px] opacity-100 rounded-xl">
        <div className="bg-white opacity-100 px-6 pb-12 pt-8 shadow sm:rounded-lg sm:pl-12 sm:pr-8">
          <div className="w-full flex justify-end">
            <button onClick={() => setIsModalVisible(false)}>
              <MdOutlineClose size={"24px"} className="opacity-60" />
            </button>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md mt-4">
            <Image
              className="relative py-0 md:py-42 mx-auto"
              src={Adot}
              alt="Adot Logo"
              width={100}
              height={37}
              priority
            />
          </div>
          {modaltype == ModalTypes.login && (
            <LogInSection
              modalType={modaltype}
              setIsLoggedIn={setIsLoggedIn}
              setIsModalVisible={setIsModalVisible}
              setModalType={setModalType}
            />
          ) }
          {modaltype == ModalTypes.SignUp &&  (
            <SignUpSection
              setIsLoggedIn={setIsLoggedIn}
              setModalType={setModalType}
            />
          )}
          {modaltype == ModalTypes.OTP &&  (
            <OTPSection
              setModalType={setModalType}
            />
          )}
          {modaltype == ModalTypes.Profile &&  (
            <ProfileSection
            setIsModalVisible={setIsModalVisible}
              setIsLoggedIn={setIsLoggedIn}
              setModalType={setModalType}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
