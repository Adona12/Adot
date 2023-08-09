import { ModalTypes } from "./AuthModal";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

interface OTPProps {
  setModalType: Function;
}

const OTPSection: React.FC<OTPProps> = ({ setModalType }) => {
  const [otp, setOtp] = useState("");
  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };
  return (
    <div className="space-y-8">
      <div className="my-10">
        <h2 className="text-xl lg:text-2xl xl:text-3xl lg:text-left py-4 font-medium text-primary">
          Check your SMS
        </h2>
        <p>
          We’ve sent a 6-digit confirmation code to{" "}
          <span className="text-primary">0978843519</span>. Make sure you enter
          correct code.
        </p>
      </div>
      <MuiOtpInput value={otp} length={6} onChange={handleChange} />

      <button
        onClick={() => {
          setModalType(ModalTypes.Profile);
        }}
        className="mt-6 flex w-full mx-auto justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
      >
        Verify
      </button>
      <div>
        <div className="flex items-center w-full justify-center pb-2 text-sm text-gray-700">
          Didn't recieve code?&nbsp;
          <button
            className="bg-transparent text-sm leading-6 text-primary"
            onClick={() => {
              setModalType(ModalTypes.OTP);
            }}
          >
            Resend code
          </button>
        </div>
        <div className="flex items-center w-full justify-center pb-2 text-sm text-gray-700">
          Wrong phone number?&nbsp;
          <button
            className="bg-transparent text-sm leading-6 text-primary"
            onClick={() => {
              setModalType(ModalTypes.SignUp);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPSection;
