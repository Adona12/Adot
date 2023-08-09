import { BiPhoneCall } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { ModalTypes } from "./AuthModal";
import { useLoginUserMutation,useGetUserProfileQuery } from "../../store/user/user-api";
import { setCredentials } from "../../store/user/user-slice";
import { useAppDispatch } from "../../store/hooks";
import { UserResponse } from "../../type/user";
import { useEffect, useState } from "react";
import { setCookie } from "@/utils/cookie";
import Cookies from "js-cookie";

interface LogInProps {
  setIsLoggedIn: Function;
  setIsModalVisible: Function;
  setModalType: Function;
  modalType: ModalTypes;
}

const LoginSection: React.FC<LogInProps> = ({
  setIsLoggedIn,
  setIsModalVisible,
  setModalType,
}) => {
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  let [logInUser, { data, isError, isSuccess, error, isLoading }] = useLoginUserMutation();
  const result =useGetUserProfileQuery();
  const login = () => {
    logInUser({ phone: phone, password: password });
    console.log("login",isSuccess);

  };

  useEffect(() => {
    if (isSuccess) {
      setIsModalVisible(false);
      setIsLoggedIn(true);
      const authData = data.data as UserResponse;
      console.log(authData);
      //dispatch(setCredentials({user:authData.user,token:authData.tokens.accessToken}));
      console.log("done");
      if (authData) {
        Cookies.set("token", authData.tokens.accessToken, { expires: 7 });

      }
    }
  }, [isSuccess]);

  console.log(data);
 


  return (
    <div>
      <h2 className="text-xl lg:text-2xl xl:text-3xl lg:text-center py-4 font-medium text-primary">
        Sign in to your account
      </h2>
      <div className="space-y-6">
        <div className="relative my-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <BiPhoneCall size={"18px"} className="opacity-30" />
          </div>
          <input
            type="text"
            className="rounded-lg border bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        <div className="relative mt-6 sm:w-11/12 w-full mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-12">
            <RiLockPasswordLine size={"18px"} className="opacity-30" />
          </div>
          <input
            type="password"
            className="rounded-lg border bg-white outline-none shadow-sm h-12 px-8 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 pl-10"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mx-4 sm:py-2">
          <div className="text-sm leading-6 w-full">
            <a href="#" className="font-normal text-primary">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="flex items-center pb-4">
          <button
            onClick={login}
            className="flex w-full mx-4 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          >
            Sign in
          </button>
        </div>
        <div className="flex items-center w-full justify-center pb-4 text-sm text-gray-700">
          Don't have an account?&nbsp;
          <button
            className="bg-transparent text-sm leading-6 text-primary"
            onClick={() => {
              setModalType(ModalTypes.SignUp);
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
