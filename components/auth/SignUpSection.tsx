import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePerson2 } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { ModalTypes } from "./AuthModal";
import { useState } from "react";
interface SignUpProps {
  setModalType: Function;
  setIsLoggedIn: Function;
}

const SignUpSection: React.FC<SignUpProps> = ({ setModalType }) => {
  const login = () => {
    setModalType(ModalTypes.OTP);
  };
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [validPhone, setValidPhone] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

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
  return (
    <div>
      <h2 className="text-xl lg:text-2xl xl:text-3xl lg:text-center py-4 font-medium text-primary">
        Create an account
      </h2>
      <form className="space-y-6">
        <div className="relative my-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <MdOutlinePerson2 size={"18px"} className="opacity-30" />
          </div>
          <input
            type="text"
            className="rounded-lg border bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="relative my-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <BiPhoneCall size={"18px"} className="opacity-30" />
          </div>
          <input
            type="text"
            className={`rounded-lg border bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10 ${
              validPhone ? "ring-1 ring-slate-200" : "ring-1 ring-red-300"
            }`}
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {validPhone ? (
            <p></p>
          ) : (
            <p className="text-red-500 font-extralight text-sm mt-2">
              Please enter a valid phone number
            </p>
          )}
        </div>

        <div className="relative my-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <HiOutlineMail size={"18px"} className="opacity-30" />
          </div>
          <input
            type="text"
            className={`rounded-lg border bg-white outline-none shadow-sm h-12 px-2 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10 ${
              validEmail ? " ring-1 ring-slate-200 " : "ring-1 ring-red-300"
            } `}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {validEmail ? (
            <p></p>
          ) : (
            <p className="text-red-500 font-extralight text-sm mt-2">
              Please enter a valid email address
            </p>
          )}
        </div>

        <div className="relative mt-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <RiLockPasswordLine size={"18px"} className="opacity-30" />
          </div>
          <input
            type="password"
            className="rounded-lg border bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex items-center pb-4">
          <button
            onClick={login}
            className="flex w-full mx-4 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center w-full justify-center pb-4 text-sm text-gray-700">
          Already have an account?&nbsp;
          <button
            className="bg-transparent text-sm leading-6 text-primary"
            onClick={() => {
              setModalType(ModalTypes.login);
            }}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpSection;
