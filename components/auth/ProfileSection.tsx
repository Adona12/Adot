import { useState } from "react";

import Month from "./Month";

interface ProfileSectionProps {
  setModalType: Function;
  setIsLoggedIn: Function;
  setIsModalVisible: Function;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  setModalType,
  setIsLoggedIn,
  setIsModalVisible,
}) => {
  const login = () => {
    setIsLoggedIn(true);
    setIsModalVisible(false);
  };
  const [selectedMonth, setSelectedMonth] = useState({ month: 1, sup: "st" });

  const months: MonthInput[] = [
    { month: 1, sup: "st" },
    { month: 2, sup: "nd" },
    { month: 3, sup: "rd" },
    { month: 4, sup: "th" },
    { month: 5, sup: "th" },
    { month: 6, sup: "th" },
    { month: 7, sup: "th" },
    { month: 8, sup: "th" },
    { month: 9, sup: "th" },
    { month: 10, sup: "th" },
    { month: 11, sup: "th" },
    { month: 12, sup: "th" },
  ];
  const handleWeekSelect = (month: MonthInput) => {
    setSelectedMonth((prev) => ({
      ...prev,
      month: month.month,
      sup: month.sup,
    }));
  };

  return (
    <div>
      <h2 className="text-xl lg:text-2xl xl:text-3xl lg:text-center py-4 font-medium text-primary">
        Complete your profile
      </h2>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="my-2">
          <div>
            <div className="text-black text-md font-light  h-12 lg:h-6 my-2">
              Your blood type
            </div>
            <div className="flex ">
              <select
                name="blood-type"
                className="rounded-lg border bg-white outline-none shadow-sm h-12 py-1.5 w-full text-gray-600  sm:text-sm text-md placeholder:text-md sm:leading-6 px-4 mr-2 focus:border-primary "
              >
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
              </select>

              <select
                name="rh-type"
                className="rounded-lg border bg-white outline-none shadow-sm h-12  py-1.5 w-full text-gray-600  sm:text-sm text-md placeholder:text-md sm:leading-6 px-4 ml-2"
              >
                <option>RH+</option>
                <option>RH-</option>
              </select>
            </div>
          </div>
          <div className="py-2">
            <div className="text-black text-md font-light h-12 lg:h-6 my-2">
              Last month of Menstruation
            </div>
            <select
              name="blood-type"
              className="rounded-lg border bg-white outline-none shadow-sm h-12 py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 px-4 mr-2 focus:border-primary"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
        </div>
        <div className=" my-2">
          <div className="text-black text-md font-light h-12 lg:h-6 my-2">
            Current week (Optional)
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              className="rounded-lg border bg-white outline-none shadow-sm h-12  py-1.5 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6 px-4"
              placeholder="2"
            />
            <span className="pt-2 text-black text-md font-light">Weeks</span>
          </div>
          <div className="py-2">
            <div className="text-black text-md font-light h-12 lg:h-6 my-2 ">
              Current weight (Optional)
            </div>
            <input
              type="text"
              className="rounded-lg border bg-white outline-none shadow-sm h-12 py-1.5 px-4 w-full text-gray-600 placeholder:text-gray-300 sm:text-sm text-md placeholder:text-md sm:leading-6"
              placeholder="67kg"
            />
          </div>
        </div>
      </div>
      <div className="text-black text-md font-light my-2">
        Current month (Optional)
      </div>
      <div className="flex overflow-x-scroll no-scrollbar">
        {months.map((month) => (
          <Month
            key={month.month}
            currentMonth={month}
            selectedMonth={selectedMonth}
            setSelectedMonth={handleWeekSelect}
          />
        ))}
      </div>
      <div className="flex items-center pb-4">
        <button
          onClick={login}
          className="flex w-full  justify-center rounded-md border outline-slate-200 bg-primary py-2 mt-4 text-sm font-semibold leading-6 text-white shadow-sm"
        >
          Finish
        </button>
      </div>

      <div className="flex items-center pb-4">
        <button
          onClick={login}
          className="flex w-full  justify-center rounded-md  py-2 text-sm font-semibold leading-6 text-primary border border-slade-200"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
